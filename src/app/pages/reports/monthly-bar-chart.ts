import { formatShortInr, ShortInrStyle } from '../../core/utils/short-inr';

// Provided globally by chart.js/dist/Chart.min.js (registered in angular.json).
declare const Chart: any;

/** Colours read from CSS variables at draw time (canvas can't use var()), refreshed on theme change. */
export interface BarChartColors {
  /** Highlighted (selected month) bar: --bs-primary. */
  accent: string;
  /** Other bars: --chart-bar-muted. */
  muted: string;
  /** Baseline: --bs-border-color. */
  border: string;
  /** Amount and month labels: --bs-secondary-color. */
  mutedText: string;
  /** Selected month label: --bs-body-color. */
  bodyText: string;
  /** Dashed "No data" outline for the selected month: --icon-accent (#4338ca light, #aeb6ff dark). */
  accentOutline: string;
  /** Dashed "No data" outline for other months: --border-strong (#868d99 light, #6b7280 dark). */
  strongOutline: string;
}

export function readBarChartColors(): BarChartColors {
  const style = getComputedStyle(document.documentElement);
  const get = (name: string, fallback: string) => (style.getPropertyValue(name) || '').trim() || fallback;
  return {
    accent: get('--bs-primary', '#4338ca'),
    muted: get('--chart-bar-muted', '#e8ebf0'),
    border: get('--bs-border-color', '#dee2e6'),
    mutedText: get('--bs-secondary-color', '#6c757d'),
    bodyText: get('--bs-body-color', '#212529'),
    accentOutline: get('--icon-accent', '#4338ca'),
    strongOutline: get('--border-strong', '#868d99')
  };
}

const BAR_RADIUS = 6;
const NO_DATA_TEXT = 'No data';
/** Used when "No data" can't fit at the smallest size (e.g. 12 months on a phone): the usual "no value" mark. */
const NO_DATA_SHORT = '—';

/**
 * Registers a 'roundedBar' chart type once: a bar chart whose bars have rounded TOP corners.
 * Chart.js 2.x has no bar border radius, so this controller draws the rectangles itself.
 * Scoped to charts of this type; Chart.elements.Rectangle is not patched.
 */
export function registerRoundedBar() {
  if (Chart.controllers.roundedBar) {
    return;
  }
  Chart.defaults.roundedBar = Chart.helpers.clone(Chart.defaults.bar);
  Chart.controllers.roundedBar = Chart.controllers.bar.extend({
    draw: function drawRoundedBars() {
      const chart = this.chart;
      const ctx = chart.ctx;
      Chart.helpers.canvas.clipArea(ctx, chart.chartArea);
      this.getMeta().data.forEach((rect: any) => {
        const vm = rect._view;
        const left = vm.x - vm.width / 2;
        const right = vm.x + vm.width / 2;
        const top = Math.min(vm.y, vm.base);
        const bottom = Math.max(vm.y, vm.base);
        const height = bottom - top;
        if (!(height >= 0.5)) {
          return; // a 0 month draws no bar, only its label
        }
        // Clamp so short or narrow bars still get a clean shape.
        const r = Math.min(BAR_RADIUS, vm.width / 2, height);
        ctx.beginPath();
        ctx.moveTo(left, bottom);
        ctx.lineTo(left, top + r);
        ctx.arcTo(left, top, left + r, top, r);
        ctx.lineTo(right - r, top);
        ctx.arcTo(right, top, right, top + r, r);
        ctx.lineTo(right, bottom);
        ctx.closePath();
        ctx.fillStyle = vm.backgroundColor;
        ctx.fill();
      });
      Chart.helpers.canvas.unclipArea(ctx);
    }
  });
}

/** Room reserved around the plot for the drawn labels (largest font sizes used below). */
export const BAR_LABEL_PADDING = { top: 22, bottom: 26 };

const AMOUNT_SIZES = [12, 11, 10, 9, 8];
const MONTH_SIZES = [12, 11, 10, 9, 8];
const AMOUNT_STYLES: ShortInrStyle[] = ['full', 'no-symbol', 'shortest'];

/** Mobile (compact): smaller text, and amounts never carry '₹' ('38.2k'). */
const COMPACT_SIZES = [10, 9, 8];
const COMPACT_AMOUNT_STYLES: ShortInrStyle[] = ['no-symbol', 'shortest'];

function font(size: number, weight: number, family: string): string {
  return weight + ' ' + size + 'px ' + family;
}

/** Largest size at which every text fits in maxWidth, or null. */
function fitSize(ctx: any, texts: string[], maxWidth: number, sizes: number[], weight: number, family: string): number | null {
  for (const size of sizes) {
    ctx.font = font(size, weight, family);
    const widest = texts.reduce((w, t) => Math.max(w, ctx.measureText(t).width), 0);
    if (widest <= maxWidth) {
      return size;
    }
  }
  return null;
}

/**
 * Labels above the bars as drawn: amounts in the most readable form, "No data" (or "—" if even that
 * can't fit) for months without transactions, all at one size that fits every bar's slot.
 */
export function fitBarLabels(ctx: any, values: number[], noData: boolean[], maxWidth: number, family: string,
                             compact = false): { texts: string[]; size: number } {
  const sizes = compact ? COMPACT_SIZES : AMOUNT_SIZES;
  const styles = compact ? COMPACT_AMOUNT_STYLES : AMOUNT_STYLES;
  for (const noDataText of [NO_DATA_TEXT, NO_DATA_SHORT]) {
    for (const style of styles) {
      const texts = values.map((v, i) => noData[i] ? noDataText : formatShortInr(v, style));
      const size = fitSize(ctx, texts, maxWidth, sizes, 500, family);
      if (size !== null) {
        return { texts, size };
      }
    }
  }
  return {
    texts: values.map((v, i) => noData[i] ? NO_DATA_SHORT : formatShortInr(v, 'shortest')),
    size: sizes[sizes.length - 1]
  };
}

/**
 * Per-chart plugin: a thin baseline under the bars, the short amount above each bar ('₹0' just
 * above the baseline for empty months) and the month name below; the last bar is the selected
 * month (bold, body colour). Font sizes shrink with the space per bar so labels never overlap;
 * in compact (mobile) mode text starts smaller and amounts drop the '₹'.
 * Months with no transactions (dataset.noData[i]) get a dashed outline the full height of the plot area
 * (rounded top, open bottom on the baseline) with "No data" above it: strong gray, or the accent for the
 * selected month. A month with transactions but no expenses is a real ₹0 (no bar, '₹0' label).
 */
export function monthlyLabelsPlugin(getColors: () => BarChartColors, family: string, isCompact: () => boolean = () => false) {
  return {
    beforeDatasetsDraw: (chart: any) => {
      const area = chart.chartArea;
      const ctx = chart.ctx;
      ctx.save();
      ctx.strokeStyle = getColors().border;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(area.left, Math.round(area.bottom) + 0.5);
      ctx.lineTo(area.right, Math.round(area.bottom) + 0.5);
      ctx.stroke();
      ctx.restore();
    },
    afterDatasetsDraw: (chart: any) => {
      const values: number[] = chart.data.datasets[0].data;
      const noData: boolean[] = chart.data.datasets[0].noData || [];
      const months: string[] = chart.data.labels;
      const rects = chart.getDatasetMeta(0).data;
      const count = values.length;
      if (!count) {
        return;
      }
      const ctx = chart.ctx;
      const area = chart.chartArea;
      const colors = getColors();
      const maxWidth = (area.right - area.left) / count - 4;
      const compact = isCompact();
      const amounts = fitBarLabels(ctx, values, values.map((v, i) => !!noData[i]), maxWidth, family, compact);
      let monthSize = fitSize(ctx, months, maxWidth, compact ? COMPACT_SIZES : MONTH_SIZES, 700, family);
      const monthTexts = monthSize === null ? months.map(m => m.charAt(0)) : months;
      monthSize = monthSize === null ? MONTH_SIZES[MONTH_SIZES.length - 1] : monthSize;

      ctx.save();
      ctx.textAlign = 'center';
      rects.forEach((rect: any, i: number) => {
        const vm = rect._view;
        const selected = i === count - 1;
        const emptyBar = !!noData[i];
        if (emptyBar) {
          drawDashedEmptyBar(ctx, vm.x, vm.width, area.top, area.bottom, selected ? colors.accentOutline : colors.strongOutline);
        }
        const top = emptyBar ? area.top : (values[i] > 0 ? Math.min(vm.y, vm.base) : area.bottom);
        ctx.font = font(amounts.size, 500, family);
        ctx.fillStyle = colors.mutedText;
        ctx.textBaseline = 'bottom';
        ctx.fillText(amounts.texts[i], vm.x, top - 4);

        ctx.font = font(monthSize, selected ? 700 : 400, family);
        ctx.fillStyle = selected ? colors.bodyText : colors.mutedText;
        ctx.textBaseline = 'top';
        ctx.fillText(monthTexts[i], vm.x, area.bottom + 8);
      });
      ctx.restore();
    }
  };
}

/** Dashed outline bar: full plot height, rounded top corners like the filled bars, open bottom on the baseline. */
function drawDashedEmptyBar(ctx: any, x: number, width: number, top: number, bottom: number, color: string) {
  const left = Math.round(x - width / 2) + 0.5;
  const right = Math.round(x + width / 2) - 0.5;
  const base = Math.round(bottom);
  const r = Math.min(BAR_RADIUS, (right - left) / 2, base - top);
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(left, base);
  ctx.lineTo(left, top + r);
  ctx.arcTo(left, top, left + r, top, r);
  ctx.lineTo(right - r, top);
  ctx.arcTo(right, top, right, top + r, r);
  ctx.lineTo(right, base);
  ctx.stroke();
  ctx.restore();
}
