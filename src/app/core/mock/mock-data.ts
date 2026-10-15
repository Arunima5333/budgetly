import { Category, IncomeCategory } from '../models/category.model';
import { IncomeCategoryName, Transaction, TransactionType } from '../models/transaction.model';

/** Fixed category list; only the transactions are random. */
export const MOCK_CATEGORIES: Category[] = [
  { name: 'Rent', color: '#5b6cf0', monthlyLimit: 20000 },
  { name: 'Food', color: '#e0812f', monthlyLimit: 10000 },
  { name: 'Transport', color: '#2a9d8f', monthlyLimit: 4000 },
  { name: 'Shopping', color: '#c2557a', monthlyLimit: 6000 },
  { name: 'Bills', color: '#8a6fdf', monthlyLimit: 5000 },
  { name: 'Entertainment', color: '#c9a227', monthlyLimit: 3000 },
  { name: 'Health', color: '#3e93db', monthlyLimit: 3000 }
];

/** Single colour used to show any income transaction (Salary, Freelance or Other) in lists. */
export const INCOME_DISPLAY_COLOR = '#2e9e6b';

/** Income categories; separate from MOCK_CATEGORIES so they never count towards the budget. */
export const MOCK_INCOME_CATEGORIES: IncomeCategory[] = [
  { name: 'Salary', color: INCOME_DISPLAY_COLOR },
  { name: 'Freelance', color: '#2a9d8f' },
  { name: 'Other', color: '#8a8f99' }
];

const MONTHS_COVERED = 12;
/** Monthly income in rupees; comfortably above the ₹51,000 total of all limits. */
const SALARY_AMOUNT = 75000;

/** A transaction description and the rupee range it plausibly costs. */
interface DescriptionSpec {
  label: string;
  min: number;
  max: number;
  /** Bills only: relative share of the Bills total this bill usually takes. */
  share?: number;
}

interface CategorySpec {
  /** For Bills, the first entry (Electricity) is always included. */
  descriptions: DescriptionSpec[];
  /** Inclusive range for the number of transactions per month. */
  count: [number, number];
}

const CATEGORY_SPECS: { [name: string]: CategorySpec } = {
  Food: {
    descriptions: [
      { label: 'Coffee', min: 150, max: 350 },
      { label: 'Bakery', min: 150, max: 600 },
      { label: 'Takeaway', min: 300, max: 1200 },
      { label: 'Restaurant', min: 800, max: 3000 },
      { label: 'Groceries', min: 1000, max: 6000 }
    ],
    count: [6, 10]
  },
  Transport: {
    descriptions: [
      { label: 'Parking', min: 50, max: 300 },
      { label: 'Metro card', min: 200, max: 1000 },
      { label: 'Taxi', min: 150, max: 1200 },
      { label: 'Train ticket', min: 300, max: 2500 },
      { label: 'Fuel', min: 1000, max: 4000 }
    ],
    count: [3, 6]
  },
  Shopping: {
    descriptions: [
      { label: 'Books', min: 200, max: 1200 },
      { label: 'Online order', min: 300, max: 4000 },
      { label: 'Home goods', min: 500, max: 5000 },
      { label: 'Clothing', min: 800, max: 6000 },
      { label: 'Electronics', min: 2000, max: 15000 }
    ],
    count: [1, 4]
  },
  Bills: {
    descriptions: [
      { label: 'Electricity bill', min: 800, max: 4000, share: 0.4 },
      { label: 'Internet', min: 500, max: 2000, share: 0.25 },
      { label: 'Phone plan', min: 200, max: 1500, share: 0.2 },
      { label: 'Water bill', min: 100, max: 1000, share: 0.15 }
    ],
    count: [3, 4]
  },
  Entertainment: {
    descriptions: [
      { label: 'Streaming subscription', min: 150, max: 700 },
      { label: 'Cinema', min: 300, max: 1500 },
      { label: 'Video game', min: 800, max: 4000 },
      { label: 'Concert tickets', min: 1500, max: 5000 }
    ],
    count: [1, 3]
  },
  Health: {
    descriptions: [
      { label: 'Pharmacy', min: 150, max: 1500 },
      { label: 'Doctor visit', min: 500, max: 2000 },
      { label: 'Gym membership', min: 1000, max: 3000 },
      { label: 'Dentist', min: 1000, max: 5000 }
    ],
    count: [1, 3]
  }
};

/** Extra (non-salary) income: what it is called and the rupee range it plausibly pays. */
const FREELANCE_INCOME: DescriptionSpec[] = [
  { label: 'Freelance project', min: 8000, max: 30000 },
  { label: 'Website design gig', min: 8000, max: 30000 },
  { label: 'Consulting work', min: 8000, max: 30000 }
];

const OTHER_INCOME: DescriptionSpec[] = [
  { label: 'Interest credit', min: 500, max: 3000 },
  { label: 'Cashback', min: 200, max: 1500 },
  { label: 'Gift from family', min: 2000, max: 10000 }
];

const BONUS_INCOME: DescriptionSpec = { label: 'Performance bonus', min: 15000, max: 40000 };

/** Share of non-empty months that get 1-2 extra income transactions (at least 2 months). */
const EXTRA_INCOME_MONTH_SHARE = [0.3, 0.4];

interface ExtraIncome {
  category: IncomeCategoryName;
  description: string;
  amount: number;
}

/** Spending target as a share of the monthly limit. */
const RATIO_RANGES = {
  under: [0.4, 0.8],
  close: [0.9, 1.0],
  over: [1.05, 1.4]
};

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

function shuffle<T>(items: T[]): T[] {
  const result = items.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = randomInt(0, i);
    const tmp = result[i];
    result[i] = result[j];
    result[j] = tmp;
  }
  return result;
}

function pad2(value: number): string {
  return value < 10 ? '0' + value : String(value);
}

function toIsoDate(year: number, month: number, day: number): string {
  return year + '-' + pad2(month) + '-' + pad2(day);
}

/** Splits `total` into parts proportional to `weights` that sum exactly to `total` (2 decimals). */
function splitByWeights(total: number, weights: number[]): number[] {
  const weightSum = weights.reduce((sum, w) => sum + w, 0);
  const parts = weights.map(w => round2(total * w / weightSum));
  parts[parts.length - 1] = round2(total - parts.slice(0, -1).reduce((sum, p) => sum + p, 0));
  return parts;
}

/** Splits `total` into `count` random positive parts; each is at least a third of an even share. */
function splitAmount(total: number, count: number): number[] {
  const weights: number[] = [];
  for (let i = 0; i < count; i++) {
    weights.push(randomBetween(0.5, 1.5));
  }
  return splitByWeights(total, weights);
}

/**
 * Picks a spending ratio per category so every month mixes
 * under-limit, close-to-limit and over-limit categories.
 */
function pickRatios(names: string[]): { [name: string]: number } {
  const overCount = randomInt(1, 2);
  const closeCount = randomInt(1, 2);
  const ratios: { [name: string]: number } = {};
  shuffle(names).forEach((name, index) => {
    const range = index < overCount ? RATIO_RANGES.over
      : index < overCount + closeCount ? RATIO_RANGES.close
      : RATIO_RANGES.under;
    ratios[name] = randomBetween(range[0], range[1]);
  });
  return ratios;
}

/**
 * Picks a description whose typical price range fits the amount (randomly among matches),
 * or the closest range if none fits, so e.g. a ₹2,000 purchase is never "Coffee".
 */
function describeAmount(descriptions: DescriptionSpec[], amount: number): string {
  const fitting = descriptions.filter(d => amount >= d.min && amount <= d.max);
  if (fitting.length) {
    return fitting[randomInt(0, fitting.length - 1)].label;
  }
  const distance = (d: DescriptionSpec) => amount < d.min ? d.min - amount : amount - d.max;
  return descriptions.reduce((best, d) => distance(d) < distance(best) ? d : best).label;
}

/** One random Freelance or Other (non-bonus) income, described to fit its amount. */
function randomExtraIncome(): ExtraIncome {
  const isFreelance = Math.random() < 0.5;
  const pool = isFreelance ? FREELANCE_INCOME : OTHER_INCOME;
  const range = pool[randomInt(0, pool.length - 1)];
  const amount = round2(randomBetween(range.min, range.max));
  return {
    category: isFreelance ? 'Freelance' : 'Other',
    description: describeAmount(pool, amount),
    amount
  };
}

/**
 * Picks which non-empty months get extra income: 30-40% of them (at least 2), each with 1-2 extras.
 * One or two of those months (once or twice a year) get a performance bonus as one of their extras.
 */
function planExtraIncome(monthIndices: number[]): { [index: number]: ExtraIncome[] } {
  const share = randomBetween(EXTRA_INCOME_MONTH_SHARE[0], EXTRA_INCOME_MONTH_SHARE[1]);
  const monthCount = Math.min(monthIndices.length, Math.max(2, Math.round(monthIndices.length * share)));
  const chosen = shuffle(monthIndices).slice(0, monthCount);
  const bonusCount = Math.min(chosen.length, randomInt(1, 2));

  const plan: { [index: number]: ExtraIncome[] } = {};
  chosen.forEach((monthIndex, position) => {
    const extras: ExtraIncome[] = [];
    const count = randomInt(1, 2);
    for (let i = 0; i < count; i++) {
      if (i === 0 && position < bonusCount) {
        extras.push({
          category: 'Other',
          description: BONUS_INCOME.label,
          amount: round2(randomBetween(BONUS_INCOME.min, BONUS_INCOME.max))
        });
      } else {
        extras.push(randomExtraIncome());
      }
    }
    plan[monthIndex] = extras;
  });
  return plan;
}

/** Generates one month of transactions with no dates after `lastDay`. */
function generateMonth(year: number, month: number, lastDay: number, extraIncome: ExtraIncome[]): Transaction[] {
  const transactions: Transaction[] = [];
  const idPrefix = 't-' + year + pad2(month) + '-';
  const add = (day: number, description: string, category: string, amount: number, type: TransactionType) => {
    transactions.push({
      id: idPrefix + pad2(transactions.length + 1),
      date: toIsoDate(year, month, Math.min(day, lastDay)),
      description,
      category,
      amount: round2(amount),
      type
    });
  };

  add(randomInt(1, 3), 'Monthly salary', 'Salary', SALARY_AMOUNT, 'income');
  extraIncome.forEach(extra => {
    add(randomInt(1, lastDay), extra.description, extra.category, extra.amount, 'income');
  });

  // Rent is a single fixed payment equal to its limit.
  const rent = MOCK_CATEGORIES.filter(c => c.name === 'Rent')[0];
  add(randomInt(1, 5), 'Monthly rent', rent.name, rent.monthlyLimit, 'expense');

  const variable = MOCK_CATEGORIES.filter(c => c.name !== 'Rent');
  const ratios = pickRatios(variable.map(c => c.name));

  variable.forEach(category => {
    const spec = CATEGORY_SPECS[category.name];
    const count = randomInt(spec.count[0], spec.count[1]);
    const target = round2(category.monthlyLimit * ratios[category.name]);

    if (category.name === 'Bills') {
      // Each bill type at most once, always including Electricity; split by each bill's typical share.
      const picked = [spec.descriptions[0]].concat(shuffle(spec.descriptions.slice(1)).slice(0, count - 1));
      const weights = picked.map(d => (d.share || 1) * randomBetween(0.8, 1.2));
      splitByWeights(target, weights).forEach((amount, index) => {
        add(randomInt(1, lastDay), picked[index].label, category.name, amount, 'expense');
      });
      return;
    }

    splitAmount(target, count).forEach(amount => {
      add(randomInt(1, lastDay), describeAmount(spec.descriptions, amount), category.name, amount, 'expense');
    });
  });

  return transactions;
}

/**
 * Generates random transactions for the 12 months ending with the month of `today`.
 * 2-3 earlier months are left empty; the current month never is, and has no dates after `today`.
 * Every non-empty month has a salary; some also get Freelance/Other income (see planExtraIncome).
 */
export function generateMockTransactions(today: Date): Transaction[] {
  // Indices 0..10 are past months; 11 is the current month and is never emptied.
  const pastIndices: number[] = [];
  for (let i = 0; i < MONTHS_COVERED - 1; i++) {
    pastIndices.push(i);
  }
  const emptyIndices = shuffle(pastIndices).slice(0, randomInt(2, 3));

  const nonEmptyIndices: number[] = [];
  for (let i = 0; i < MONTHS_COVERED; i++) {
    if (emptyIndices.indexOf(i) === -1) {
      nonEmptyIndices.push(i);
    }
  }
  const extraIncomePlan = planExtraIncome(nonEmptyIndices);

  let transactions: Transaction[] = [];
  for (let i = 0; i < MONTHS_COVERED; i++) {
    if (emptyIndices.indexOf(i) !== -1) {
      continue;
    }
    const monthStart = new Date(today.getFullYear(), today.getMonth() - (MONTHS_COVERED - 1 - i), 1);
    const year = monthStart.getFullYear();
    const month = monthStart.getMonth() + 1;
    const isCurrent = i === MONTHS_COVERED - 1;
    const lastDay = isCurrent ? today.getDate() : new Date(year, month, 0).getDate();
    transactions = transactions.concat(generateMonth(year, month, lastDay, extraIncomePlan[i] || []));
  }
  return transactions;
}
