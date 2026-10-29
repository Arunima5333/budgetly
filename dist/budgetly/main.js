(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/overview/overview.component */ "./src/app/pages/overview/overview.component.ts");
/* harmony import */ var _pages_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/transactions/transactions.component */ "./src/app/pages/transactions/transactions.component.ts");
/* harmony import */ var _pages_budgets_budgets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/budgets/budgets.component */ "./src/app/pages/budgets/budgets.component.ts");
/* harmony import */ var _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/reports/reports.component */ "./src/app/pages/reports/reports.component.ts");







var routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: _pages_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"] },
    { path: 'transactions', component: _pages_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__["TransactionsComponent"] },
    { path: 'budgets', component: _pages_budgets_budgets_component__WEBPACK_IMPORTED_MODULE_5__["BudgetsComponent"] },
    { path: 'reports', component: _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_6__["ReportsComponent"] },
    // Unknown addresses go to Overview (a dev ?today= is read at startup, so it still applies).
    { path: '**', redirectTo: 'overview' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-shell {\n  min-height: 100vh;\n}\n\n/* Content padding on every page: 32px top, 48px bottom; sides scale with the viewport\n   from 16px (phones, ~400px and below) to 48px (1200px and up). No max width. */\n\n.app-main {\n  min-width: 0;\n  padding: 32px clamp(16px, 4vw, 48px) 48px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7Z0ZBQ2dGOztBQUNoRjtFQUNFLFlBQVk7RUFDWix5Q0FBeUM7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtc2hlbGwge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLyogQ29udGVudCBwYWRkaW5nIG9uIGV2ZXJ5IHBhZ2U6IDMycHggdG9wLCA0OHB4IGJvdHRvbTsgc2lkZXMgc2NhbGUgd2l0aCB0aGUgdmlld3BvcnRcbiAgIGZyb20gMTZweCAocGhvbmVzLCB+NDAwcHggYW5kIGJlbG93KSB0byA0OHB4ICgxMjAwcHggYW5kIHVwKS4gTm8gbWF4IHdpZHRoLiAqL1xuLmFwcC1tYWluIHtcbiAgbWluLXdpZHRoOiAwO1xuICBwYWRkaW5nOiAzMnB4IGNsYW1wKDE2cHgsIDR2dywgNDhweCkgNDhweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-shell d-lg-flex\">\n  <app-sidebar></app-sidebar>\n  <main class=\"app-main flex-grow-1\">\n    <router-outlet></router-outlet>\n  </main>\n</div>\n\n<!-- Shared alert (AlertService): one instance for every page and modal. -->\n<app-alert></app-alert>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'budgetly';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _pages_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/overview/overview.component */ "./src/app/pages/overview/overview.component.ts");
/* harmony import */ var _pages_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/transactions/transactions.component */ "./src/app/pages/transactions/transactions.component.ts");
/* harmony import */ var _pages_budgets_budgets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/budgets/budgets.component */ "./src/app/pages/budgets/budgets.component.ts");
/* harmony import */ var _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/reports/reports.component */ "./src/app/pages/reports/reports.component.ts");
/* harmony import */ var _shared_components_month_selector_month_selector_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/month-selector/month-selector.component */ "./src/app/shared/components/month-selector/month-selector.component.ts");
/* harmony import */ var _shared_components_view_only_badge_view_only_badge_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/view-only-badge/view-only-badge.component */ "./src/app/shared/components/view-only-badge/view-only-badge.component.ts");
/* harmony import */ var _shared_components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/empty-state/empty-state.component */ "./src/app/shared/components/empty-state/empty-state.component.ts");
/* harmony import */ var _shared_components_app_alert_app_alert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/app-alert/app-alert.component */ "./src/app/shared/components/app-alert/app-alert.component.ts");
/* harmony import */ var _shared_components_add_transaction_modal_add_transaction_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/components/add-transaction-modal/add-transaction-modal.component */ "./src/app/shared/components/add-transaction-modal/add-transaction-modal.component.ts");
/* harmony import */ var _shared_components_delete_transaction_modal_delete_transaction_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/components/delete-transaction-modal/delete-transaction-modal.component */ "./src/app/shared/components/delete-transaction-modal/delete-transaction-modal.component.ts");
/* harmony import */ var _shared_pipes_money_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/pipes/money.pipe */ "./src/app/shared/pipes/money.pipe.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _pages_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__["OverviewComponent"],
                _pages_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_8__["TransactionsComponent"],
                _pages_budgets_budgets_component__WEBPACK_IMPORTED_MODULE_9__["BudgetsComponent"],
                _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_10__["ReportsComponent"],
                _shared_pipes_money_pipe__WEBPACK_IMPORTED_MODULE_17__["MoneyPipe"],
                _shared_components_add_transaction_modal_add_transaction_modal_component__WEBPACK_IMPORTED_MODULE_15__["AddTransactionModalComponent"],
                _shared_components_delete_transaction_modal_delete_transaction_modal_component__WEBPACK_IMPORTED_MODULE_16__["DeleteTransactionModalComponent"],
                _shared_components_app_alert_app_alert_component__WEBPACK_IMPORTED_MODULE_14__["AppAlertComponent"],
                _shared_components_month_selector_month_selector_component__WEBPACK_IMPORTED_MODULE_11__["MonthSelectorComponent"],
                _shared_components_view_only_badge_view_only_badge_component__WEBPACK_IMPORTED_MODULE_12__["ViewOnlyBadgeComponent"],
                _shared_components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_13__["EmptyStateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/mock/mock-data.ts":
/*!****************************************!*\
  !*** ./src/app/core/mock/mock-data.ts ***!
  \****************************************/
/*! exports provided: MOCK_CATEGORIES, INCOME_DISPLAY_COLOR, MOCK_INCOME_CATEGORIES, generateMockTransactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_CATEGORIES", function() { return MOCK_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCOME_DISPLAY_COLOR", function() { return INCOME_DISPLAY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_INCOME_CATEGORIES", function() { return MOCK_INCOME_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMockTransactions", function() { return generateMockTransactions; });
/** Fixed category list; only the transactions are random. */
var MOCK_CATEGORIES = [
    { name: 'Rent', color: '#5b6cf0', monthlyLimit: 20000 },
    { name: 'Food', color: '#e0812f', monthlyLimit: 10000 },
    { name: 'Transport', color: '#2a9d8f', monthlyLimit: 4000 },
    { name: 'Shopping', color: '#c2557a', monthlyLimit: 6000 },
    { name: 'Bills', color: '#8a6fdf', monthlyLimit: 5000 },
    { name: 'Entertainment', color: '#c9a227', monthlyLimit: 3000 },
    { name: 'Health', color: '#3e93db', monthlyLimit: 3000 }
];
/** Single colour used to show any income transaction (Salary, Freelance or Other) in lists. */
var INCOME_DISPLAY_COLOR = '#2e9e6b';
/** Income categories; separate from MOCK_CATEGORIES so they never count towards the budget. */
var MOCK_INCOME_CATEGORIES = [
    { name: 'Salary', color: INCOME_DISPLAY_COLOR },
    { name: 'Freelance', color: '#2a9d8f' },
    { name: 'Other', color: '#8a8f99' }
];
var MONTHS_COVERED = 12;
/** Monthly income in rupees; comfortably above the ₹51,000 total of all limits. */
var SALARY_AMOUNT = 75000;
var CATEGORY_SPECS = {
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
var FREELANCE_INCOME = [
    { label: 'Freelance project', min: 8000, max: 30000 },
    { label: 'Website design gig', min: 8000, max: 30000 },
    { label: 'Consulting work', min: 8000, max: 30000 }
];
var OTHER_INCOME = [
    { label: 'Interest credit', min: 500, max: 3000 },
    { label: 'Cashback', min: 200, max: 1500 },
    { label: 'Gift from family', min: 2000, max: 10000 }
];
var BONUS_INCOME = { label: 'Performance bonus', min: 15000, max: 40000 };
/** Share of non-empty months that get 1-2 extra income transactions (at least 2 months). */
var EXTRA_INCOME_MONTH_SHARE = [0.3, 0.4];
/** Spending target as a share of the monthly limit. */
var RATIO_RANGES = {
    under: [0.4, 0.8],
    close: [0.9, 1.0],
    over: [1.05, 1.4]
};
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}
function round2(value) {
    return Math.round(value * 100) / 100;
}
function shuffle(items) {
    var result = items.slice();
    for (var i = result.length - 1; i > 0; i--) {
        var j = randomInt(0, i);
        var tmp = result[i];
        result[i] = result[j];
        result[j] = tmp;
    }
    return result;
}
function pad2(value) {
    return value < 10 ? '0' + value : String(value);
}
function toIsoDate(year, month, day) {
    return year + '-' + pad2(month) + '-' + pad2(day);
}
/** Splits `total` into parts proportional to `weights` that sum exactly to `total` (2 decimals). */
function splitByWeights(total, weights) {
    var weightSum = weights.reduce(function (sum, w) { return sum + w; }, 0);
    var parts = weights.map(function (w) { return round2(total * w / weightSum); });
    parts[parts.length - 1] = round2(total - parts.slice(0, -1).reduce(function (sum, p) { return sum + p; }, 0));
    return parts;
}
/** Splits `total` into `count` random positive parts; each is at least a third of an even share. */
function splitAmount(total, count) {
    var weights = [];
    for (var i = 0; i < count; i++) {
        weights.push(randomBetween(0.5, 1.5));
    }
    return splitByWeights(total, weights);
}
/**
 * Picks a spending ratio per category so every month mixes
 * under-limit, close-to-limit and over-limit categories.
 */
function pickRatios(names) {
    var overCount = randomInt(1, 2);
    var closeCount = randomInt(1, 2);
    var ratios = {};
    shuffle(names).forEach(function (name, index) {
        var range = index < overCount ? RATIO_RANGES.over
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
function describeAmount(descriptions, amount) {
    var fitting = descriptions.filter(function (d) { return amount >= d.min && amount <= d.max; });
    if (fitting.length) {
        return fitting[randomInt(0, fitting.length - 1)].label;
    }
    var distance = function (d) { return amount < d.min ? d.min - amount : amount - d.max; };
    return descriptions.reduce(function (best, d) { return distance(d) < distance(best) ? d : best; }).label;
}
/** One random Freelance or Other (non-bonus) income, described to fit its amount. */
function randomExtraIncome() {
    var isFreelance = Math.random() < 0.5;
    var pool = isFreelance ? FREELANCE_INCOME : OTHER_INCOME;
    var range = pool[randomInt(0, pool.length - 1)];
    var amount = round2(randomBetween(range.min, range.max));
    return {
        category: isFreelance ? 'Freelance' : 'Other',
        description: describeAmount(pool, amount),
        amount: amount
    };
}
/**
 * Picks which non-empty months get extra income: 30-40% of them (at least 2), each with 1-2 extras.
 * One or two of those months (once or twice a year) get a performance bonus as one of their extras.
 */
function planExtraIncome(monthIndices) {
    var share = randomBetween(EXTRA_INCOME_MONTH_SHARE[0], EXTRA_INCOME_MONTH_SHARE[1]);
    var monthCount = Math.min(monthIndices.length, Math.max(2, Math.round(monthIndices.length * share)));
    var chosen = shuffle(monthIndices).slice(0, monthCount);
    var bonusCount = Math.min(chosen.length, randomInt(1, 2));
    var plan = {};
    chosen.forEach(function (monthIndex, position) {
        var extras = [];
        var count = randomInt(1, 2);
        for (var i = 0; i < count; i++) {
            if (i === 0 && position < bonusCount) {
                extras.push({
                    category: 'Other',
                    description: BONUS_INCOME.label,
                    amount: round2(randomBetween(BONUS_INCOME.min, BONUS_INCOME.max))
                });
            }
            else {
                extras.push(randomExtraIncome());
            }
        }
        plan[monthIndex] = extras;
    });
    return plan;
}
/** Generates one month of transactions with no dates after `lastDay`. */
function generateMonth(year, month, lastDay, extraIncome) {
    var transactions = [];
    var idPrefix = 't-' + year + pad2(month) + '-';
    var add = function (day, description, category, amount, type) {
        transactions.push({
            id: idPrefix + pad2(transactions.length + 1),
            date: toIsoDate(year, month, Math.min(day, lastDay)),
            description: description,
            category: category,
            amount: round2(amount),
            type: type
        });
    };
    add(randomInt(1, 3), 'Monthly salary', 'Salary', SALARY_AMOUNT, 'income');
    extraIncome.forEach(function (extra) {
        add(randomInt(1, lastDay), extra.description, extra.category, extra.amount, 'income');
    });
    // Rent is a single fixed payment equal to its limit.
    var rent = MOCK_CATEGORIES.filter(function (c) { return c.name === 'Rent'; })[0];
    add(randomInt(1, 5), 'Monthly rent', rent.name, rent.monthlyLimit, 'expense');
    var variable = MOCK_CATEGORIES.filter(function (c) { return c.name !== 'Rent'; });
    var ratios = pickRatios(variable.map(function (c) { return c.name; }));
    variable.forEach(function (category) {
        var spec = CATEGORY_SPECS[category.name];
        var count = randomInt(spec.count[0], spec.count[1]);
        var target = round2(category.monthlyLimit * ratios[category.name]);
        if (category.name === 'Bills') {
            // Each bill type at most once, always including Electricity; split by each bill's typical share.
            var picked_1 = [spec.descriptions[0]].concat(shuffle(spec.descriptions.slice(1)).slice(0, count - 1));
            var weights = picked_1.map(function (d) { return (d.share || 1) * randomBetween(0.8, 1.2); });
            splitByWeights(target, weights).forEach(function (amount, index) {
                add(randomInt(1, lastDay), picked_1[index].label, category.name, amount, 'expense');
            });
            return;
        }
        splitAmount(target, count).forEach(function (amount) {
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
function generateMockTransactions(today) {
    // Indices 0..10 are past months; 11 is the current month and is never emptied.
    var pastIndices = [];
    for (var i = 0; i < MONTHS_COVERED - 1; i++) {
        pastIndices.push(i);
    }
    var emptyIndices = shuffle(pastIndices).slice(0, randomInt(2, 3));
    var nonEmptyIndices = [];
    for (var i = 0; i < MONTHS_COVERED; i++) {
        if (emptyIndices.indexOf(i) === -1) {
            nonEmptyIndices.push(i);
        }
    }
    var extraIncomePlan = planExtraIncome(nonEmptyIndices);
    var transactions = [];
    for (var i = 0; i < MONTHS_COVERED; i++) {
        if (emptyIndices.indexOf(i) !== -1) {
            continue;
        }
        var monthStart = new Date(today.getFullYear(), today.getMonth() - (MONTHS_COVERED - 1 - i), 1);
        var year = monthStart.getFullYear();
        var month = monthStart.getMonth() + 1;
        var isCurrent = i === MONTHS_COVERED - 1;
        var lastDay = isCurrent ? today.getDate() : new Date(year, month, 0).getDate();
        transactions = transactions.concat(generateMonth(year, month, lastDay, extraIncomePlan[i] || []));
    }
    return transactions;
}


/***/ }),

/***/ "./src/app/core/services/alert.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/alert.service.ts ***!
  \************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




/**
 * Shows the app's single toast-style alert (rendered once by <app-alert> in the app shell),
 * so any page, modal or service can confirm an action or report a problem.
 */
var AlertService = /** @class */ (function () {
    function AlertService() {
        var _this = this;
        this.alertsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * An alert shown before anything subscribed (e.g. DataService warning about saved data while the app starts,
         * before <app-alert> exists). Delivered once to the first subscriber, then dropped: never replayed.
         */
        this.pending = null;
        this.dismissSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** While true (phone menu open), new alerts wait here (latest only) and are shown when released. */
        this.holding = false;
        this.heldAlert = null;
        /** Emits when the visible alert should disappear immediately (e.g. the phone menu opens over it). */
        this.dismissed$ = this.dismissSubject.asObservable();
        /** Emits every alert to show; a new one replaces the current one. */
        this.alerts$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(function () {
            var pending = _this.pending;
            _this.pending = null;
            // Delivered on the next tick so the subscriber has finished initialising.
            return pending ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(pending).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_2__["asyncScheduler"])), _this.alertsSubject) : _this.alertsSubject;
        });
    }
    AlertService.prototype.show = function (message, type) {
        if (type === void 0) { type = 'success'; }
        var alert = { message: message, type: type };
        if (this.holding) {
            this.heldAlert = alert;
            return;
        }
        this.emit(alert);
    };
    /** Hides the visible alert now (no fade timer). */
    AlertService.prototype.dismiss = function () {
        this.dismissSubject.next(undefined);
    };
    /**
     * Holds new alerts while `hold` is true (they would cover the phone slide-out menu); releasing shows the
     * latest held alert, if any.
     */
    AlertService.prototype.holdAlerts = function (hold) {
        this.holding = hold;
        if (!hold && this.heldAlert) {
            var alert_1 = this.heldAlert;
            this.heldAlert = null;
            this.emit(alert_1);
        }
    };
    AlertService.prototype.emit = function (alert) {
        if (this.alertsSubject.observers.length) {
            this.alertsSubject.next(alert);
        }
        else {
            this.pending = alert;
        }
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/core/services/currency.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/currency.service.ts ***!
  \***************************************************/
/*! exports provided: CURRENCY_STORAGE_KEY, CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY_STORAGE_KEY", function() { return CURRENCY_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils_money__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/money */ "./src/app/core/utils/money.ts");




var CURRENCY_STORAGE_KEY = 'budgetly.currency';
/** The saved code, or INR when it's missing, invalid or storage can't be read. */
function readStoredCurrency() {
    try {
        var stored = localStorage.getItem(CURRENCY_STORAGE_KEY);
        if (Object(_utils_money__WEBPACK_IMPORTED_MODULE_3__["isCurrencyCode"])(stored)) {
            return stored;
        }
    }
    catch (e) {
        // Fall back to the default.
    }
    return _utils_money__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CURRENCY"];
}
/**
 * The one display currency for the whole app, persisted like the theme. Amounts are converted from rupees only
 * when shown or typed; stored amounts never change. Read synchronously at startup so the first render uses it.
 */
var CurrencyService = /** @class */ (function () {
    function CurrencyService() {
        this.currency$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](readStoredCurrency());
    }
    Object.defineProperty(CurrencyService.prototype, "currency", {
        get: function () {
            return this.currency$.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrencyService.prototype, "option", {
        get: function () {
            return Object(_utils_money__WEBPACK_IMPORTED_MODULE_3__["getCurrency"])(this.currency);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrencyService.prototype, "symbol", {
        /** e.g. '$', for input-group prefixes. */
        get: function () {
            return this.option.symbol;
        },
        enumerable: true,
        configurable: true
    });
    /** Ignores unknown codes; saves the choice (best effort) and notifies subscribers when it changes. */
    CurrencyService.prototype.setCurrency = function (code) {
        if (!Object(_utils_money__WEBPACK_IMPORTED_MODULE_3__["isCurrencyCode"])(code) || code === this.currency) {
            return;
        }
        try {
            localStorage.setItem(CURRENCY_STORAGE_KEY, code);
        }
        catch (e) {
            // Storage unavailable (private mode, blocked); the choice just won't persist.
        }
        this.currency$.next(code);
    };
    CurrencyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CurrencyService);
    return CurrencyService;
}());



/***/ }),

/***/ "./src/app/core/services/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: CATEGORY_NAME_MAX_LENGTH, DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_NAME_MAX_LENGTH", function() { return CATEGORY_NAME_MAX_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _mock_mock_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mock/mock-data */ "./src/app/core/mock/mock-data.ts");
/* harmony import */ var _utils_category_budgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/category-budgets */ "./src/app/core/utils/category-budgets.ts");
/* harmony import */ var _utils_month_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/month-range */ "./src/app/core/utils/month-range.ts");
/* harmony import */ var _utils_month_summary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/month-summary */ "./src/app/core/utils/month-summary.ts");
/* harmony import */ var _utils_stored_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/stored-data */ "./src/app/core/utils/stored-data.ts");
/* harmony import */ var _utils_transaction_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/transaction-color */ "./src/app/core/utils/transaction-color.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./alert.service */ "./src/app/core/services/alert.service.ts");
/* harmony import */ var _today_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./today.service */ "./src/app/core/services/today.service.ts");












var STORAGE_KEY = 'budgetly.mockData.v3';
/** Expense categories (defaults + user-added). */
var CATEGORIES_STORAGE_KEY = 'budgetly.categories.v1';
/** Where the original value is copied (once) before broken saved data is cleaned and written back. */
var BACKUP_SUFFIX = '.backup';
var SKIPPED_WARNING = 'Some saved data couldn\'t be read and was skipped.';
var UNREADABLE_WARNING = 'Your saved data couldn\'t be read, so Budgetly started empty. A backup was kept.';
var CATEGORY_NAME_MAX_LENGTH = 24;
var HEX_COLOR = /^#[0-9a-fA-F]{6}$/;
/** Older data formats (v1: pre-rupee amounts, v2: single 'Income' category); removed on load. */
var LEGACY_STORAGE_KEYS = ['budgetly.mockData.v1', 'budgetly.mockData.v2'];
var DataService = /** @class */ (function () {
    function DataService(today, alertService) {
        var _this = this;
        this.today = today;
        this.alertService = alertService;
        /** Worst problem found while reading saved data at startup (shown once as a warning alert). */
        this.loadProblem = 'ok';
        this.dataChangedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        /**
         * Emits once on subscribe and again whenever transactions or categories change
         * (add/update/delete transaction, add/update/delete category). Views recompute from it.
         */
        this.dataChanged$ = this.dataChangedSubject.asObservable();
        this.categories = this.loadCategories();
        this.transactions = this.loadOrGenerate();
        // Shown once, even though <app-alert> subscribes later (AlertService holds it until then).
        if (this.loadProblem === 'unreadable') {
            this.alertService.show(UNREADABLE_WARNING, 'warning');
        }
        else if (this.loadProblem === 'partial') {
            this.alertService.show(SKIPPED_WARNING, 'warning');
        }
        // TodayService is injected (so already created): a dev ?today= date applies from the first month shown.
        this.selectedMonthSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.today.currentYearMonth());
        this.selectedMonth$ = this.selectedMonthSubject.asObservable();
        this.isCurrentMonthSelected$ = this.selectedMonth$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (selected) { return _this.today.isCurrentMonth(selected); }));
        this.isFirstSelectableMonthSelected$ = this.selectedMonth$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (selected) { return Object(_utils_month_range__WEBPACK_IMPORTED_MODULE_6__["monthIndex"])(selected) <= Object(_utils_month_range__WEBPACK_IMPORTED_MODULE_6__["monthIndex"])(_this.getMinSelectableMonth()); }));
    }
    /**
     * Earliest selectable month: January 2020 (MIN_SELECTABLE_MONTH), or the current month if that is earlier
     * (a dev ?today= before 2020), so the current month is always selectable.
     */
    DataService.prototype.getMinSelectableMonth = function () {
        var current = this.today.currentYearMonth();
        return Object(_utils_month_range__WEBPACK_IMPORTED_MODULE_6__["monthIndex"])(current) < Object(_utils_month_range__WEBPACK_IMPORTED_MODULE_6__["monthIndex"])(_utils_month_range__WEBPACK_IMPORTED_MODULE_6__["MIN_SELECTABLE_MONTH"]) ? current : tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _utils_month_range__WEBPACK_IMPORTED_MODULE_6__["MIN_SELECTABLE_MONTH"]);
    };
    /** The currently selected month (1-based), as a copy. */
    DataService.prototype.getSelectedMonth = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.selectedMonthSubject.getValue());
    };
    /**
     * Selects a month. `month` is 1-based; out-of-range values roll over
     * into the neighbouring year (0 = December of the previous year, 13 = January of the next).
     * Clamped to [getMinSelectableMonth(), current month]: nothing before January 2020 or after the current month.
     */
    DataService.prototype.setSelectedMonth = function (year, month) {
        if (!isFinite(year) || !isFinite(month)) {
            return;
        }
        // Current month from TodayService, so a dev ?today= date counts.
        var current = this.today.currentYearMonth();
        var min = this.getMinSelectableMonth();
        var requested = new Date(year, month - 1, 1);
        var normalized = { year: requested.getFullYear(), month: requested.getMonth() + 1 };
        if (Object(_utils_month_range__WEBPACK_IMPORTED_MODULE_6__["monthIndex"])(normalized) > Object(_utils_month_range__WEBPACK_IMPORTED_MODULE_6__["monthIndex"])(current)) {
            normalized = current;
        }
        else if (Object(_utils_month_range__WEBPACK_IMPORTED_MODULE_6__["monthIndex"])(normalized) < Object(_utils_month_range__WEBPACK_IMPORTED_MODULE_6__["monthIndex"])(min)) {
            normalized = min;
        }
        this.selectedMonthSubject.next({ year: normalized.year, month: normalized.month });
    };
    /** One month later, but never beyond the current month (see setSelectedMonth). */
    DataService.prototype.nextMonth = function () {
        var current = this.selectedMonthSubject.getValue();
        this.setSelectedMonth(current.year, current.month + 1);
    };
    /** One month earlier, but never before January 2020 (see setSelectedMonth). */
    DataService.prototype.previousMonth = function () {
        var current = this.selectedMonthSubject.getValue();
        this.setSelectedMonth(current.year, current.month - 1);
    };
    /** Expense categories with their monthly limits (defaults plus user-added), as copies. */
    DataService.prototype.getCategories = function () {
        return this.categories.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, c)); });
    };
    /**
     * The stored name of the expense or income category matching `name` (trimmed, case-insensitive),
     * or null. Names are keys for filters and colours, so they must be unique across both lists.
     * `ignoreExpenseName` skips that one expense category (the one being edited).
     */
    DataService.prototype.findCategoryName = function (name, ignoreExpenseName) {
        var key = (name || '').trim().toLowerCase();
        if (!key) {
            return null;
        }
        var ignore = (ignoreExpenseName || '').toLowerCase();
        var names = this.categories.map(function (c) { return c.name; })
            .filter(function (n) { return !ignore || n.toLowerCase() !== ignore; })
            .concat(_mock_mock_data__WEBPACK_IMPORTED_MODULE_4__["MOCK_INCOME_CATEGORIES"].map(function (c) { return c.name; }));
        var match = names.filter(function (n) { return n.toLowerCase() === key; })[0];
        return match || null;
    };
    /**
     * Adds an expense category: name trimmed, 1-24 chars and unique (see findCategoryName), limit > 0
     * (rounded to 2 decimals), colour a #rrggbb hex. Saves it, notifies `dataChanged$` and returns
     * a copy, or null if the input is invalid.
     */
    DataService.prototype.addCategory = function (input) {
        var category = this.validCategory(input);
        if (!category) {
            return null;
        }
        this.categories = this.categories.concat([category]);
        this.writeCategories();
        this.dataChangedSubject.next(undefined);
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, category);
    };
    /**
     * Updates the expense category called `originalName` in place (order kept), with the same rules
     * as addCategory except that its own current name doesn't count as a duplicate.
     * On a rename, every transaction in that category is re-labelled with the new name (transactions
     * reference categories by name), and those whose description is exactly the old name (saved without a note)
     * get the new name as description too; saved in one write. Notifies `dataChanged$` once and returns a copy,
     * or null for an unknown name or invalid input.
     */
    DataService.prototype.updateCategory = function (originalName, input) {
        var index = this.categories.map(function (c) { return c.name; }).indexOf(originalName);
        if (index === -1) {
            return null;
        }
        var category = this.validCategory(input, originalName);
        if (!category) {
            return null;
        }
        this.categories = this.categories.map(function (c, i) { return i === index ? category : c; });
        this.writeCategories();
        if (category.name !== originalName) {
            this.transactions = this.transactions.map(function (t) { return t.type === 'expense' && t.category === originalName
                ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, t, { category: category.name, description: t.description === originalName ? category.name : t.description }) : t; });
            this.writeStored({ generatedFor: this.generatedFor, transactions: this.transactions });
        }
        this.dataChangedSubject.next(undefined);
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, category);
    };
    /** True if any stored expense transaction (in any month) uses the expense category `name`. */
    DataService.prototype.categoryHasTransactions = function (name) {
        return this.transactions.some(function (t) { return t.type === 'expense' && t.category === name; });
    };
    /**
     * Deletes the expense category `name`. Refuses (returns false, changes nothing) for an unknown
     * name or a category that still has transactions in any month. Otherwise saves the categories,
     * notifies `dataChanged$` once and returns true.
     */
    DataService.prototype.deleteCategory = function (name) {
        var remaining = this.categories.filter(function (c) { return c.name !== name; });
        if (remaining.length === this.categories.length || this.categoryHasTransactions(name)) {
            return false;
        }
        this.categories = remaining;
        this.writeCategories();
        this.dataChangedSubject.next(undefined);
        return true;
    };
    /** Income categories (Salary, Freelance, Other) with chart colours; no budgets. */
    DataService.prototype.getIncomeCategories = function () {
        return _mock_mock_data__WEBPACK_IMPORTED_MODULE_4__["MOCK_INCOME_CATEGORIES"].map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, c)); });
    };
    /** All transactions, newest first. */
    DataService.prototype.getTransactions = function () {
        return this.transactions.map(function (t) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, t)); });
    };
    /** A copy of the transaction with this id, or null if there is none. */
    DataService.prototype.getTransactionById = function (id) {
        var found = this.transactions.filter(function (t) { return t.id === id; })[0];
        return found ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, found) : null;
    };
    /**
     * Transactions in the given month, newest first.
     * @param year Full year, e.g. 2026.
     * @param month 1-based month (1 = January, 12 = December).
     */
    DataService.prototype.getTransactionsForMonth = function (year, month) {
        var prefix = this.monthKey(year, month) + '-';
        return this.transactions
            .filter(function (t) { return t.date.indexOf(prefix) === 0; })
            .map(function (t) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, t)); });
    };
    /**
     * Expense totals for `count` months ending with the given month, oldest first (crosses years).
     * `hasData` says whether the month has ANY transaction (income or expense); months without data
     * (or outside the generated range) have hasData false and total 0. Income-only months: hasData true, total 0.
     * @param endMonth 1-based month (1 = January, 12 = December).
     */
    DataService.prototype.getMonthlyExpenseTotals = function (endYear, endMonth, count) {
        var result = [];
        var _loop_1 = function (i) {
            var start = new Date(endYear, endMonth - 1 - i, 1);
            var year = start.getFullYear();
            var month = start.getMonth() + 1;
            var prefix = this_1.monthKey(year, month) + '-';
            // Sum in paise so float noise can't creep into the totals.
            var inMonth = this_1.transactions.filter(function (t) { return t.date.indexOf(prefix) === 0; });
            var paise = inMonth
                .filter(function (t) { return t.type === 'expense'; })
                .reduce(function (sum, t) { return sum + Math.round(t.amount * 100); }, 0);
            result.push({ year: year, month: month, total: paise / 100, hasData: inMonth.length > 0 });
        };
        var this_1 = this;
        for (var i = Math.max(0, count) - 1; i >= 0; i--) {
            _loop_1(i);
        }
        return result;
    };
    /**
     * Income, spending and remaining budget for a month.
     * @param month 1-based month (1 = January, 12 = December).
     */
    DataService.prototype.getMonthSummary = function (year, month) {
        return Object(_utils_month_summary__WEBPACK_IMPORTED_MODULE_7__["computeMonthSummary"])(this.getTransactionsForMonth(year, month), this.categories);
    };
    /**
     * Spending against each expense category's limit, in category order.
     * @param month 1-based month (1 = January, 12 = December).
     */
    DataService.prototype.getCategoryBudgets = function (year, month) {
        return Object(_utils_category_budgets__WEBPACK_IMPORTED_MODULE_5__["computeCategoryBudgets"])(this.getTransactionsForMonth(year, month), this.categories);
    };
    /**
     * The newest `limit` transactions of a month, newest first (date desc, id for ties).
     * @param month 1-based month (1 = January, 12 = December).
     */
    DataService.prototype.getRecentTransactions = function (year, month, limit) {
        if (limit === void 0) { limit = 5; }
        return this.getTransactionsForMonth(year, month).slice(0, Math.max(0, limit));
    };
    /**
     * Display colour for a transaction: the category colour for expenses, one shared
     * colour for all income, or null for an unknown category (use a neutral fallback).
     */
    DataService.prototype.getTransactionColor = function (transaction) {
        return Object(_utils_transaction_color__WEBPACK_IMPORTED_MODULE_9__["transactionColor"])(transaction, this.categories, _mock_mock_data__WEBPACK_IMPORTED_MODULE_4__["INCOME_DISPLAY_COLOR"]);
    };
    /**
     * Adds a user-entered transaction, saves it to localStorage and notifies `dataChanged$`.
     * The amount is rounded to 2 decimals; the description is the trimmed note, or the category name.
     * Returns a copy of the saved transaction.
     */
    DataService.prototype.addTransaction = function (input) {
        // 'u-' prefix can't collide with generated 't-YYYYMM-NN' ids.
        var id = 'u-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
        var transaction = this.buildTransaction(id, input);
        this.saveTransactions(this.transactions.concat([transaction]));
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, transaction);
    };
    /**
     * Replaces the transaction with this id (the id is kept), with the same rules as addTransaction:
     * amount rounded to 2 decimals and > 0, description = trimmed note or the category name.
     * Saves, notifies `dataChanged$` and returns a copy, or null if the id doesn't exist.
     */
    DataService.prototype.updateTransaction = function (id, input) {
        var index = this.transactions.map(function (t) { return t.id; }).indexOf(id);
        if (index === -1) {
            return null;
        }
        var transaction = this.buildTransaction(id, input);
        var next = this.transactions.slice();
        next[index] = transaction;
        this.saveTransactions(next);
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, transaction);
    };
    /**
     * Removes the transaction with this id, saves and notifies `dataChanged$`.
     * Returns false (and changes nothing) if the id doesn't exist.
     */
    DataService.prototype.deleteTransaction = function (id) {
        var remaining = this.transactions.filter(function (t) { return t.id !== id; });
        if (remaining.length === this.transactions.length) {
            return false;
        }
        this.saveTransactions(remaining);
        return true;
    };
    DataService.prototype.buildTransaction = function (id, input) {
        var amount = Math.round(input.amount * 100) / 100;
        if (!isFinite(amount) || amount <= 0) {
            throw new Error('Transaction amount must be greater than 0');
        }
        var note = (input.note || '').trim();
        return {
            id: id,
            date: input.date,
            description: note || input.category,
            category: input.category,
            amount: amount,
            type: input.type
        };
    };
    /** Re-sorts, persists and notifies listeners. */
    DataService.prototype.saveTransactions = function (transactions) {
        this.transactions = this.sortNewestFirst(transactions);
        this.writeStored({ generatedFor: this.generatedFor, transactions: this.transactions });
        this.dataChangedSubject.next(undefined);
    };
    /** Development helper: discards the stored data and generates a fresh set. */
    DataService.prototype.resetMockData = function () {
        try {
            localStorage.removeItem(STORAGE_KEY);
        }
        catch (e) {
            // Storage unavailable; the new data will only live in memory.
        }
        this.transactions = this.loadOrGenerate();
        this.dataChangedSubject.next(undefined);
    };
    /**
     * Saved transactions, cleaned (see cleanStoredTransactions). Mock data is generated ONLY when nothing is
     * saved (or storage is unavailable): a month change never regenerates or replaces saved data, so a new
     * month simply starts empty. Broken entries are skipped, unreadable data starts empty; in both cases the
     * original value is backed up and the cleaned data written back, so the warning shows once.
     */
    DataService.prototype.loadOrGenerate = function () {
        this.removeLegacyData();
        var raw;
        try {
            raw = localStorage.getItem(STORAGE_KEY);
        }
        catch (e) {
            // Storage blocked: not corruption. Mock data in memory only, no warning.
            return this.generateMock(false);
        }
        var cleaned = Object(_utils_stored_data__WEBPACK_IMPORTED_MODULE_8__["cleanStoredTransactions"])(raw);
        if (cleaned.status === 'missing') {
            return this.generateMock(true);
        }
        this.generatedFor = cleaned.generatedFor || this.realMonthKey();
        if (cleaned.status !== 'ok') {
            this.backupOnce(STORAGE_KEY, raw);
            this.writeStored({ generatedFor: this.generatedFor, transactions: cleaned.transactions });
            this.noteProblem(cleaned.status);
        }
        return this.sortNewestFirst(cleaned.transactions);
    };
    /**
     * Fresh mock transactions. Deliberately the REAL date, not TodayService, so a dev ?today= date never
     * reshapes them. Saved when `persist` is true.
     */
    DataService.prototype.generateMock = function (persist) {
        var today = new Date();
        this.generatedFor = this.realMonthKey();
        var transactions = this.sortNewestFirst(Object(_mock_mock_data__WEBPACK_IMPORTED_MODULE_4__["generateMockTransactions"])(today));
        if (persist) {
            this.writeStored({ generatedFor: this.generatedFor, transactions: transactions });
        }
        return transactions;
    };
    /** 'YYYY-MM' of the real current month. */
    DataService.prototype.realMonthKey = function () {
        var today = new Date();
        return this.monthKey(today.getFullYear(), today.getMonth() + 1);
    };
    /** Copies the original saved value to `<key>.backup` unless a backup already exists. */
    DataService.prototype.backupOnce = function (key, raw) {
        if (raw === null) {
            return;
        }
        try {
            if (localStorage.getItem(key + BACKUP_SUFFIX) === null) {
                localStorage.setItem(key + BACKUP_SUFFIX, raw);
            }
        }
        catch (e) {
            // Storage unavailable or full; the cleaned data still loads.
        }
    };
    /** Keeps the worst load problem ('unreadable' beats 'partial'). */
    DataService.prototype.noteProblem = function (status) {
        if (status === 'unreadable' || (status === 'partial' && this.loadProblem !== 'unreadable')) {
            this.loadProblem = status;
        }
    };
    /** Normalised category from user input, or null if invalid (see addCategory for the rules). */
    DataService.prototype.validCategory = function (input, ignoreExpenseName) {
        var name = (input.name || '').trim();
        var monthlyLimit = Math.round(Number(input.monthlyLimit) * 100) / 100;
        var valid = name.length > 0
            && name.length <= CATEGORY_NAME_MAX_LENGTH
            && this.findCategoryName(name, ignoreExpenseName) === null
            && isFinite(monthlyLimit) && monthlyLimit > 0
            && HEX_COLOR.test(input.color || '');
        return valid ? { name: name, monthlyLimit: monthlyLimit, color: input.color.toLowerCase() } : null;
    };
    /**
     * Saved categories, cleaned (see cleanStoredCategories): the defaults when nothing is saved (or storage is
     * unavailable), an empty list when the saved value is unreadable; [] stays []. Broken entries are skipped;
     * when anything was wrong the original is backed up and the cleaned list written back.
     */
    DataService.prototype.loadCategories = function () {
        var raw;
        try {
            raw = localStorage.getItem(CATEGORIES_STORAGE_KEY);
        }
        catch (e) {
            return _mock_mock_data__WEBPACK_IMPORTED_MODULE_4__["MOCK_CATEGORIES"].map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, c)); });
        }
        var cleaned = Object(_utils_stored_data__WEBPACK_IMPORTED_MODULE_8__["cleanStoredCategories"])(raw);
        if (cleaned.status === 'missing') {
            return _mock_mock_data__WEBPACK_IMPORTED_MODULE_4__["MOCK_CATEGORIES"].map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, c)); });
        }
        if (cleaned.status !== 'ok') {
            this.backupOnce(CATEGORIES_STORAGE_KEY, raw);
            this.categories = cleaned.categories;
            this.writeCategories();
            this.noteProblem(cleaned.status);
        }
        return cleaned.categories;
    };
    DataService.prototype.writeCategories = function () {
        try {
            localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(this.categories));
        }
        catch (e) {
            // Storage unavailable or full; keep the categories in memory only.
        }
    };
    DataService.prototype.removeLegacyData = function () {
        LEGACY_STORAGE_KEYS.forEach(function (key) {
            try {
                localStorage.removeItem(key);
            }
            catch (e) {
                // Storage unavailable; nothing to clean up.
            }
        });
    };
    DataService.prototype.writeStored = function (data) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        }
        catch (e) {
            // Storage unavailable or full; keep the data in memory only.
        }
    };
    DataService.prototype.sortNewestFirst = function (transactions) {
        // ISO dates sort correctly as strings; the id breaks ties for a stable order.
        return transactions.slice().sort(function (a, b) {
            if (a.date !== b.date) {
                return a.date < b.date ? 1 : -1;
            }
            return a.id < b.id ? 1 : -1;
        });
    };
    /** 'YYYY-MM' for a 1-based month. */
    DataService.prototype.monthKey = function (year, month) {
        return year + '-' + (month < 10 ? '0' + month : month);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_today_service__WEBPACK_IMPORTED_MODULE_11__["TodayService"], _alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/core/services/today.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/today.service.ts ***!
  \************************************************/
/*! exports provided: readFakeToday, TodayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFakeToday", function() { return readFakeToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayService", function() { return TodayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utils_date_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/date-format */ "./src/app/core/utils/date-format.ts");




/**
 * Reads a fake "today" from a page address like `?today=2026-11-01`. Development builds only:
 * production always returns null, so the parameter can never take effect there.
 * Invalid values are ignored with one console warning.
 */
function readFakeToday(search, production) {
    if (production) {
        return null;
    }
    var match = /[?&]today=([^&]*)/.exec(search || '');
    if (!match) {
        return null;
    }
    var value = decodeURIComponent(match[1]);
    var date = Object(_utils_date_format__WEBPACK_IMPORTED_MODULE_3__["parseIsoLocalDate"])(value);
    if (!date) {
        console.warn('Budgetly: ignoring ?today="' + value + '" (expected a real date as YYYY-MM-DD). Using the real date.');
    }
    return date;
}
/**
 * The single source of "today" for the UI: the current month, past months, the month selector's limits,
 * and the Add transaction date range. Uses the real date, or in development a fake one from `?today=`.
 * The fake date is read once when the app starts (this service is created before DataService picks
 * its initial month) and lives in memory only: it survives in-app navigation and redirects, and a load
 * without the parameter uses the real date again. Not for the mock data generator (that stays on the
 * real date).
 */
var TodayService = /** @class */ (function () {
    function TodayService() {
        this.fakeToday = readFakeToday(window.location.search, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production);
        this.isFake = this.fakeToday !== null;
        if (this.fakeToday) {
            // tslint:disable-next-line:no-console
            console.info('Budgetly: using a fake today of ' + Object(_utils_date_format__WEBPACK_IMPORTED_MODULE_3__["todayIsoLocal"])(this.fakeToday) + ' (from ?today=, development only).');
        }
    }
    /** Today at local midnight (the fake date when one is set). A new Date each call. */
    TodayService.prototype.now = function () {
        var source = this.fakeToday || new Date();
        return new Date(source.getFullYear(), source.getMonth(), source.getDate());
    };
    /** Today as 'YYYY-MM-DD'. */
    TodayService.prototype.todayIso = function () {
        return Object(_utils_date_format__WEBPACK_IMPORTED_MODULE_3__["todayIsoLocal"])(this.now());
    };
    /** The 1st of the current month as 'YYYY-MM-DD'. */
    TodayService.prototype.firstOfMonthIso = function () {
        return Object(_utils_date_format__WEBPACK_IMPORTED_MODULE_3__["firstOfMonthIsoLocal"])(this.now());
    };
    /** The current month (1-based). */
    TodayService.prototype.currentYearMonth = function () {
        var today = this.now();
        return { year: today.getFullYear(), month: today.getMonth() + 1 };
    };
    /** True when the 1-based year/month is the current month. */
    TodayService.prototype.isCurrentMonth = function (ym) {
        return Object(_utils_date_format__WEBPACK_IMPORTED_MODULE_3__["isCurrentMonth"])(ym, this.now());
    };
    TodayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodayService);
    return TodayService;
}());



/***/ }),

/***/ "./src/app/core/utils/amount-sign.ts":
/*!*******************************************!*\
  !*** ./src/app/core/utils/amount-sign.ts ***!
  \*******************************************/
/*! exports provided: MINUS_SIGN, amountSign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUS_SIGN", function() { return MINUS_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amountSign", function() { return amountSign; });
/** U+2212 MINUS SIGN (not a hyphen), used in front of expense amounts. */
var MINUS_SIGN = '−';
/** '+' for income, '−' (U+2212) for expenses. */
function amountSign(type) {
    return type === 'income' ? '+' : MINUS_SIGN;
}


/***/ }),

/***/ "./src/app/core/utils/budget-hint.ts":
/*!*******************************************!*\
  !*** ./src/app/core/utils/budget-hint.ts ***!
  \*******************************************/
/*! exports provided: budgetHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "budgetHint", function() { return budgetHint; });
function round2(value) {
    return Math.round(value * 100) / 100;
}
/**
 * Pure: the hint for a month's income, the current total of all category limits and the limit
 * being typed (null when empty or invalid).
 */
function budgetHint(income, currentTotal, limit) {
    if (!(income > 0)) {
        return { kind: 'hidden', amount: 0, warn: false };
    }
    if (limit === null) {
        return currentTotal > income
            ? { kind: 'already-over', amount: round2(currentTotal - income), warn: true }
            : { kind: 'unbudgeted', amount: round2(income - currentTotal), warn: false };
    }
    var newTotal = currentTotal + limit;
    return newTotal > income
        ? { kind: 'over', amount: round2(newTotal - income), warn: true }
        : { kind: 'remaining', amount: round2(income - newTotal), warn: false };
}


/***/ }),

/***/ "./src/app/core/utils/category-budgets.ts":
/*!************************************************!*\
  !*** ./src/app/core/utils/category-budgets.ts ***!
  \************************************************/
/*! exports provided: CLOSE_TO_LIMIT_RATIO, budgetStatus, needsAttention, computeCategoryBudgets, toCategoryBudget, adjustStatusForCurrency, displayedLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_TO_LIMIT_RATIO", function() { return CLOSE_TO_LIMIT_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "budgetStatus", function() { return budgetStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "needsAttention", function() { return needsAttention; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeCategoryBudgets", function() { return computeCategoryBudgets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCategoryBudget", function() { return toCategoryBudget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustStatusForCurrency", function() { return adjustStatusForCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayedLeft", function() { return displayedLeft; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _money__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./money */ "./src/app/core/utils/money.ts");


/** Ratio from which a category counts as "Close to limit". */
var CLOSE_TO_LIMIT_RATIO = 0.85;
function toPaise(rupees) {
    return Math.round(rupees * 100);
}
/**
 * Pure: status for a spent amount against a limit. Compares in whole paise,
 * so float noise (e.g. 0.1 + 0.2 style sums) can't break "exactly at the limit".
 */
function budgetStatus(spentPaise, limitPaise) {
    if (spentPaise > limitPaise) {
        return 'over';
    }
    if (spentPaise === limitPaise && limitPaise > 0) {
        return 'at-limit';
    }
    if (limitPaise > 0 && spentPaise / limitPaise >= CLOSE_TO_LIMIT_RATIO) {
        return 'close';
    }
    return 'on-track';
}
var ATTENTION_RANK = { over: 0, 'at-limit': 1, close: 2 };
/**
 * Pure: the categories that need attention (close, at limit or over, as decided by budgetStatus),
 * ordered over first, then at limit, then close; within each group the highest ratio first.
 */
function needsAttention(budgets) {
    return budgets
        .filter(function (b) { return b.status !== 'on-track'; })
        .sort(function (a, b) { return ATTENTION_RANK[a.status] - ATTENTION_RANK[b.status] || b.ratio - a.ratio; });
}
/** Pure: spending per expense category (in category order) for one month's transactions. */
function computeCategoryBudgets(transactions, categories) {
    var spentPaise = {};
    transactions.forEach(function (t) {
        if (t.type === 'expense') {
            spentPaise[t.category] = (spentPaise[t.category] || 0) + toPaise(t.amount);
        }
    });
    return categories.map(function (category) { return toCategoryBudget(category, spentPaise[category.name] || 0); });
}
/**
 * Pure: one category's budget row from its spending in paise (status via budgetStatus).
 * Also used for the live preview in the Add/Edit category modal.
 */
function toCategoryBudget(category, spentPaise) {
    var spent = spentPaise;
    var limit = toPaise(category.monthlyLimit);
    var status = budgetStatus(spent, limit);
    var ratio = limit > 0 ? spent / limit : 0;
    // Floor within the limit (99.99% reads 99%, not 100%); ceil when over (100.01% reads 101%).
    var percentUsed = status === 'over' && limit > 0 ? Math.ceil(ratio * 100) : Math.floor(ratio * 100);
    return {
        name: category.name,
        color: category.color,
        limit: category.monthlyLimit,
        spent: spent / 100,
        ratio: ratio,
        percentUsed: percentUsed,
        barPercent: Math.min(100, Math.max(0, percentUsed)),
        status: status,
        overBy: status === 'over' ? (spent - limit) / 100 : 0
    };
}
/**
 * Display-level status for the selected currency, decided from the amounts AS DISPLAYED (each rounded to the
 * currency's decimals), so a card's numbers always agree with its badge:
 * - displayed spent > displayed limit: "Over by" the displayed difference ("$11.37 spent of $11.36" -> over by $0.01);
 * - displayed spent = displayed limit: "At limit" ("¥2,129 spent of ¥2,129"), nothing over;
 * - otherwise the rupee status (on track / close) stands.
 * overBy is returned in rupees that format as exactly the displayed difference. "At limit" always reads 100% with a
 * full bar (e.g. ₹9,999.60 of ₹10,000 shows ₹10,000 of ₹10,000); other percentages are left as they are.
 * Stored data is untouched.
 */
function adjustStatusForCurrency(budget, code) {
    var spent = Object(_money__WEBPACK_IMPORTED_MODULE_1__["displayedUnits"])(budget.spent, code);
    var limit = Object(_money__WEBPACK_IMPORTED_MODULE_1__["displayedUnits"])(budget.limit, code);
    if (spent > limit) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, budget, { status: 'over', overBy: Object(_money__WEBPACK_IMPORTED_MODULE_1__["inrFromDisplayedUnits"])(spent - limit, code) });
    }
    if (spent === limit && (limit > 0 || budget.status === 'over')) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, budget, { status: 'at-limit', overBy: 0, percentUsed: 100, barPercent: 100 });
    }
    return budget;
}
/** "… left" on a card: the displayed limit minus the displayed spending (0 when at or over), in rupees. */
function displayedLeft(budget, code) {
    return Object(_money__WEBPACK_IMPORTED_MODULE_1__["inrFromDisplayedUnits"])(Math.max(0, Object(_money__WEBPACK_IMPORTED_MODULE_1__["displayedUnits"])(budget.limit, code) - Object(_money__WEBPACK_IMPORTED_MODULE_1__["displayedUnits"])(budget.spent, code)), code);
}


/***/ }),

/***/ "./src/app/core/utils/date-format.ts":
/*!*******************************************!*\
  !*** ./src/app/core/utils/date-format.ts ***!
  \*******************************************/
/*! exports provided: todayIsoLocal, formatMonthYear, formatDayMonth, firstOfMonthIsoLocal, isCurrentMonth, parseIsoLocalDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todayIsoLocal", function() { return todayIsoLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMonthYear", function() { return formatMonthYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDayMonth", function() { return formatDayMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstOfMonthIsoLocal", function() { return firstOfMonthIsoLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCurrentMonth", function() { return isCurrentMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseIsoLocalDate", function() { return parseIsoLocalDate; });
function pad2(value) {
    return value < 10 ? '0' + value : String(value);
}
/**
 * `today`'s LOCAL date as 'YYYY-MM-DD' (toISOString would use UTC and can shift the day).
 * Pass TodayService.now() so a faked dev date is respected.
 */
function todayIsoLocal(today) {
    return today.getFullYear() + '-' + pad2(today.getMonth() + 1) + '-' + pad2(today.getDate());
}
/** 1-based month -> 'October 2026' (en-US), the same format as the Overview month selector. */
function formatMonthYear(year, month) {
    return new Date(year, month - 1, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}
/** 'YYYY-MM-DD' -> '8 Oct' (en-IN). Parsed as a local date to avoid timezone shifts. */
function formatDayMonth(isoDate) {
    var parts = isoDate.split('-').map(Number);
    return new Date(parts[0], parts[1] - 1, parts[2])
        .toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}
/** The 1st of `today`'s LOCAL month as 'YYYY-MM-DD' (pass TodayService.now()). */
function firstOfMonthIsoLocal(today) {
    return today.getFullYear() + '-' + pad2(today.getMonth() + 1) + '-01';
}
/** True when the 1-based year/month is `today`'s LOCAL month (pass TodayService.now()). */
function isCurrentMonth(ym, today) {
    return ym.year === today.getFullYear() && ym.month === today.getMonth() + 1;
}
/**
 * Strict 'YYYY-MM-DD' -> LOCAL midnight Date, or null if the format is wrong or the date doesn't exist
 * (e.g. 2026-02-30). Never uses new Date('YYYY-MM-DD'), which parses as UTC.
 */
function parseIsoLocalDate(value) {
    var match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || '');
    if (!match) {
        return null;
    }
    var year = Number(match[1]);
    var month = Number(match[2]);
    var day = Number(match[3]);
    var date = new Date(year, month - 1, day);
    var valid = date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
    return valid ? date : null;
}


/***/ }),

/***/ "./src/app/core/utils/filter-transactions.ts":
/*!***************************************************!*\
  !*** ./src/app/core/utils/filter-transactions.ts ***!
  \***************************************************/
/*! exports provided: DEFAULT_TRANSACTION_FILTERS, filterTransactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TRANSACTION_FILTERS", function() { return DEFAULT_TRANSACTION_FILTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTransactions", function() { return filterTransactions; });
var DEFAULT_TRANSACTION_FILTERS = {
    query: '',
    type: 'all',
    category: null,
    sort: 'newest'
};
/** Date desc, then id desc (the app's default "newest first" order). */
function newestFirst(a, b) {
    if (a.date !== b.date) {
        return a.date < b.date ? 1 : -1;
    }
    return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
}
var SORTERS = {
    newest: newestFirst,
    oldest: function (a, b) { return -newestFirst(a, b); },
    amount: function (a, b) { return b.amount !== a.amount ? b.amount - a.amount : newestFirst(a, b); }
};
/** Pure: applies the query, type and category filters, then sorts. Returns a new array. */
function filterTransactions(transactions, filters) {
    var query = (filters.query || '').trim().toLowerCase();
    return transactions
        .filter(function (t) { return filters.type === 'all' || t.type === filters.type; })
        .filter(function (t) { return !filters.category || t.category === filters.category; })
        .filter(function (t) { return !query
        || t.description.toLowerCase().indexOf(query) !== -1
        || t.category.toLowerCase().indexOf(query) !== -1; })
        .sort(SORTERS[filters.sort] || newestFirst);
}


/***/ }),

/***/ "./src/app/core/utils/insights.ts":
/*!****************************************!*\
  !*** ./src/app/core/utils/insights.ts ***!
  \****************************************/
/*! exports provided: computeInsights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeInsights", function() { return computeInsights; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _money__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./money */ "./src/app/core/utils/money.ts");


function toPaise(rupees) {
    return Math.round(rupees * 100);
}
/** Whole-number percentage; a non-zero change that rounds to 0 reads '<1'. */
function percentText(fraction) {
    var percent = Math.round(Math.abs(fraction) * 100);
    return percent === 0 && fraction !== 0 ? '<1' : String(percent);
}
/** Largest relative change first; ties broken by the larger absolute change. */
function biggest(changes) {
    var sorted = changes.slice().sort(function (a, b) {
        return Math.abs(b.ratio) - Math.abs(a.ratio) || Math.abs(b.current - b.previous) - Math.abs(a.current - a.previous);
    });
    return sorted.length ? sorted[0] : null;
}
/**
 * Pure: three insights for the selected month compared with the previous one.
 * 1. biggest % increase among categories that spent something last month and more this month;
 * 2. biggest % decrease among categories that spent something last month and less this month
 *    (down to 0 = 100%); unchanged categories never count;
 * 3. savings: income − expenses for the selected month.
 */
function computeInsights(currentBudgets, previousBudgets, currentSummary, prevMonthName, currency) {
    if (currency === void 0) { currency = _money__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_CURRENCY"]; }
    var money = function (value) { return Object(_money__WEBPACK_IMPORTED_MODULE_1__["formatMoney"])(value, currency); };
    var previousPaise = {};
    previousBudgets.forEach(function (b) { return previousPaise[b.name] = toPaise(b.spent); });
    var previousTotal = previousBudgets.reduce(function (sum, b) { return sum + toPaise(b.spent); }, 0);
    var changes = currentBudgets
        .map(function (b) { return ({ name: b.name, previous: (previousPaise[b.name] || 0) / 100, current: toPaise(b.spent) / 100 }); })
        // A change that shows as zero in the currency ('up from $11.36 to $11.36') counts as unchanged.
        .filter(function (c) { return c.previous > 0 && c.current !== c.previous && !Object(_money__WEBPACK_IMPORTED_MODULE_1__["displaysAsZero"])(c.current - c.previous, currency); })
        .map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, c, { ratio: (c.current - c.previous) / c.previous })); });
    var increase;
    var decrease;
    if (previousTotal === 0) {
        var nothing = { tone: 'neutral', badge: '—', text: 'No spending in ' + prevMonthName + ' to compare with.' };
        increase = nothing;
        decrease = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, nothing);
    }
    else {
        var up = biggest(changes.filter(function (c) { return c.ratio > 0; }));
        increase = up
            ? {
                tone: 'up',
                badge: '↑ ' + percentText(up.ratio) + '%',
                text: up.name + ' spending is up from ' + money(up.previous) + ' in ' + prevMonthName + ' to ' + money(up.current) + '.'
            }
            : { tone: 'neutral', badge: 'No increase', text: 'No category spent more than in ' + prevMonthName + '.' };
        var down = biggest(changes.filter(function (c) { return c.ratio < 0; }));
        decrease = down
            ? {
                tone: 'down',
                badge: '↓ ' + percentText(down.ratio) + '%',
                text: down.name + ' costs dropped from ' + money(down.previous) + ' to ' + money(down.current) + '.'
            }
            : { tone: 'neutral', badge: 'No decrease', text: 'No category spent less than in ' + prevMonthName + '.' };
    }
    var savings;
    var income = currentSummary.income;
    if (!(income > 0)) {
        savings = { tone: 'neutral', badge: 'No income', text: 'No income recorded this month.' };
    }
    else {
        // Like the Overview summary: a difference that shows as zero in the currency (e.g. ₹0.30 over is '$0.00')
        // reads as on budget, '0% saved' / 'You kept $0.00 …', never '0% overspent' / 'You spent $0.00 more …'.
        var difference = (toPaise(income) - toPaise(currentSummary.spent)) / 100;
        var saved = Object(_money__WEBPACK_IMPORTED_MODULE_1__["displaysAsZero"])(difference, currency) ? 0 : difference;
        savings = saved >= 0
            ? {
                tone: 'saved',
                badge: percentText(saved / income) + '% saved',
                text: 'You kept ' + money(saved) + ' of your ' + money(income) + ' income this month.'
            }
            : {
                tone: 'overspent',
                badge: percentText(saved / income) + '% overspent',
                text: 'You spent ' + money(-saved) + ' more than your ' + money(income) + ' income this month.'
            };
    }
    return [increase, decrease, savings];
}


/***/ }),

/***/ "./src/app/core/utils/money.ts":
/*!*************************************!*\
  !*** ./src/app/core/utils/money.ts ***!
  \*************************************/
/*! exports provided: INR_PER_UNIT, CURRENCIES, DEFAULT_CURRENCY, isCurrencyCode, getCurrency, fromInr, toInr, inrToInputValue, inputToInr, formatMoney, displayedUnits, inrFromDisplayedUnits, displaysAsZero, formatSignedMoney, formatShortMoney */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INR_PER_UNIT", function() { return INR_PER_UNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCIES", function() { return CURRENCIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CURRENCY", function() { return DEFAULT_CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCurrencyCode", function() { return isCurrencyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrency", function() { return getCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromInr", function() { return fromInr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInr", function() { return toInr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inrToInputValue", function() { return inrToInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputToInr", function() { return inputToInr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayedUnits", function() { return displayedUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inrFromDisplayedUnits", function() { return inrFromDisplayedUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displaysAsZero", function() { return displaysAsZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatSignedMoney", function() { return formatSignedMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatShortMoney", function() { return formatShortMoney; });
/**
 * THE exchange-rate table: rupees per 1 unit of each currency.
 * Approximate values as of late 2025 (not live rates; there is no network access). Update them only here.
 */
var INR_PER_UNIT = {
    INR: 1,
    USD: 88,
    EUR: 102,
    GBP: 117,
    JPY: 0.58
};
/**
 * The symbol is added by us rather than by Intl's currency style: 'narrowSymbol' isn't available in older
 * engines, ja-JP's own symbol is the full-width '￥', and some locales put the symbol after the number.
 */
var CURRENCIES = [
    { code: 'INR', name: 'Indian rupee', symbol: '₹', locale: 'en-IN', decimals: 0, limitPlaceholder: '2,000' },
    { code: 'USD', name: 'US dollar', symbol: '$', locale: 'en-US', decimals: 2, limitPlaceholder: '25.00' },
    { code: 'EUR', name: 'Euro', symbol: '€', locale: 'en-IE', decimals: 2, limitPlaceholder: '25.00' },
    { code: 'GBP', name: 'British pound', symbol: '£', locale: 'en-GB', decimals: 2, limitPlaceholder: '20.00' },
    { code: 'JPY', name: 'Japanese yen', symbol: '¥', locale: 'ja-JP', decimals: 0, limitPlaceholder: '3,500' }
];
var DEFAULT_CURRENCY = 'INR';
function isCurrencyCode(value) {
    return CURRENCIES.some(function (c) { return c.code === value; });
}
/** The option for a code; unknown codes fall back to the default (INR). */
function getCurrency(code) {
    return CURRENCIES.filter(function (c) { return c.code === code; })[0] || CURRENCIES.filter(function (c) { return c.code === DEFAULT_CURRENCY; })[0];
}
function rateOf(code) {
    return INR_PER_UNIT[getCurrency(code).code];
}
/** Rounds to `decimals` places, half away from zero. */
function roundTo(value, decimals) {
    var factor = Math.pow(10, decimals);
    var sign = value < 0 ? -1 : 1;
    return sign * Math.round(Math.abs(value) * factor + 1e-9) / factor;
}
/** Rupees -> the currency (unrounded). */
function fromInr(inr, code) {
    return inr / rateOf(code);
}
/** An amount in the currency -> rupees rounded to paise (what gets stored). NaN for non-numbers. */
function toInr(amount, code) {
    var value = typeof amount === 'number' ? amount : parseFloat(amount);
    return isFinite(value) ? roundTo(value * rateOf(code), 2) : NaN;
}
/** Prefill for an edit form: INR keeps its paise as stored; other currencies round to their decimals. */
function inrToInputValue(inr, code) {
    var currency = getCurrency(code);
    return currency.code === 'INR' ? inr : roundTo(fromInr(inr, code), currency.decimals);
}
/**
 * Rupees to save from an amount field. Round-trip safe: when the field still holds exactly the value it was
 * prefilled with (edit mode, untouched), the original stored rupees are returned, so nothing drifts.
 */
function inputToInr(typed, code, prefilled, originalInr) {
    if (prefilled === void 0) { prefilled = null; }
    if (originalInr === void 0) { originalInr = null; }
    var value = typeof typed === 'number' ? typed : parseFloat(typed);
    if (originalInr !== null && prefilled !== null && value === prefilled) {
        return originalInr;
    }
    return toInr(value, code);
}
var numberFormats = {};
/** The locale's grouping with fixed decimals (formatters are cached: the money pipe runs on every check). */
function groupDigits(value, locale, decimals) {
    var key = locale + '|' + decimals;
    if (!numberFormats[key]) {
        numberFormats[key] = new Intl.NumberFormat(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    }
    return numberFormats[key].format(value);
}
/**
 * Rupees shown in the currency: converted, rounded to its decimals, with its symbol and grouping,
 * e.g. 120000 -> '₹1,20,000' / '$1,363.64' / '¥206,897'. Negatives read '-$5.00'; a value that rounds
 * to 0 has no sign; '' for non-numbers.
 */
function formatMoney(inr, code) {
    if (typeof inr !== 'number' || !isFinite(inr)) {
        return '';
    }
    var currency = getCurrency(code);
    var amount = roundTo(Math.abs(fromInr(inr, code)), currency.decimals);
    return (inr < 0 && amount > 0 ? '-' : '') + currency.symbol + groupDigits(amount, currency.locale, currency.decimals);
}
/**
 * Rupees as displayed in the currency, in its smallest displayed unit (cents for USD/EUR/GBP, whole yen/rupees):
 * an integer, rounded exactly as formatMoney rounds. Compare these to decide what the screen shows.
 */
function displayedUnits(inr, code) {
    var currency = getCurrency(code);
    var factor = Math.pow(10, currency.decimals);
    var sign = inr < 0 ? -1 : 1;
    return sign * Math.round(roundTo(Math.abs(fromInr(inr, code)), currency.decimals) * factor);
}
/** The rupee amount that formatMoney shows as exactly these displayed units (for differences of displayed amounts). */
function inrFromDisplayedUnits(units, code) {
    var currency = getCurrency(code);
    return units / Math.pow(10, currency.decimals) * rateOf(code);
}
/** True when the rupees show as zero in the currency after rounding to its decimals ($0.00, ¥0, ₹0). */
function displaysAsZero(inr, code) {
    return typeof inr === 'number' && isFinite(inr) && roundTo(Math.abs(fromInr(inr, code)), getCurrency(code).decimals) === 0;
}
/**
 * formatMoney with a sign put in front by the caller ('+' income, '−' expense), dropped when the amount
 * shows as zero, so it never reads '−$0.00'.
 */
function formatSignedMoney(inr, code, sign) {
    var text = formatMoney(inr, code);
    return text && sign && !displaysAsZero(inr, code) ? sign + text : text;
}
/**
 * Pure: short label for chart annotations, from rupees. Glanceable, so always whole units under 1,000
 * ('$950', never '$950.20'); from 1,000 thousands with one decimal, '.0' dropped ('$38.2k', '€20k');
 * 0, negative and non-finite -> symbol + '0'.
 */
function formatShortMoney(inr, code, style) {
    if (style === void 0) { style = 'full'; }
    var symbol = style === 'full' ? getCurrency(code).symbol : '';
    var whole = Math.round(isFinite(inr) ? Math.max(0, fromInr(inr, code)) : 0);
    if (whole < 1000) {
        return symbol + whole;
    }
    var thousands = whole / 1000;
    var text = style === 'shortest' ? String(Math.round(thousands)) : thousands.toFixed(1).replace(/\.0$/, '');
    return symbol + text + 'k';
}


/***/ }),

/***/ "./src/app/core/utils/month-range.ts":
/*!*******************************************!*\
  !*** ./src/app/core/utils/month-range.ts ***!
  \*******************************************/
/*! exports provided: MIN_SELECTABLE_MONTH, monthIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_SELECTABLE_MONTH", function() { return MIN_SELECTABLE_MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthIndex", function() { return monthIndex; });
/** Earliest month the app lets you select (arrows, picker, setSelectedMonth). */
var MIN_SELECTABLE_MONTH = { year: 2020, month: 1 };
/** Comparable month index (year * 12 + month) for 1-based year/months. */
function monthIndex(ym) {
    return ym.year * 12 + ym.month;
}


/***/ }),

/***/ "./src/app/core/utils/month-summary.ts":
/*!*********************************************!*\
  !*** ./src/app/core/utils/month-summary.ts ***!
  \*********************************************/
/*! exports provided: computeMonthSummary, adjustSummaryForCurrency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeMonthSummary", function() { return computeMonthSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustSummaryForCurrency", function() { return adjustSummaryForCurrency; });
/* harmony import */ var _money__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./money */ "./src/app/core/utils/money.ts");

function round2(value) {
    return Math.round(value * 100) / 100;
}
/** Pure: summarises one month's transactions against the total of all category limits. */
function computeMonthSummary(transactions, categories) {
    var income = 0;
    var incomeCount = 0;
    var spent = 0;
    transactions.forEach(function (t) {
        if (t.type === 'income') {
            income += t.amount;
            incomeCount++;
        }
        else {
            spent += t.amount;
        }
    });
    income = round2(income);
    spent = round2(spent);
    var totalBudget = round2(categories.reduce(function (sum, c) { return sum + c.monthlyLimit; }, 0));
    var isOverBudget = spent > totalBudget;
    return {
        income: income,
        incomeCount: incomeCount,
        spent: spent,
        totalBudget: totalBudget,
        left: round2(totalBudget - spent),
        spentRatio: totalBudget > 0 ? spent / totalBudget : 0,
        isOverBudget: isOverBudget,
        overBy: isOverBudget ? round2(spent - totalBudget) : 0
    };
}
/**
 * Display-level month summary for the selected currency, from the totals AS DISPLAYED: over budget only when the
 * displayed spending exceeds the displayed total budget, "Over by" / "left" being the displayed difference
 * (in rupees that format as exactly that). Equal displayed totals read as on budget with nothing left and a
 * ratio of exactly 1 (100%, full bar); other ratios stay as they are. Stored data and the rupee summary are untouched.
 */
function adjustSummaryForCurrency(summary, code) {
    var spent = Object(_money__WEBPACK_IMPORTED_MODULE_0__["displayedUnits"])(summary.spent, code);
    var budget = Object(_money__WEBPACK_IMPORTED_MODULE_0__["displayedUnits"])(summary.totalBudget, code);
    var isOverBudget = spent > budget;
    var atBudget = spent === budget && budget > 0;
    return Object.assign({}, summary, {
        isOverBudget: isOverBudget,
        spentRatio: atBudget ? 1 : summary.spentRatio,
        overBy: isOverBudget ? Object(_money__WEBPACK_IMPORTED_MODULE_0__["inrFromDisplayedUnits"])(spent - budget, code) : 0,
        left: isOverBudget ? 0 : Object(_money__WEBPACK_IMPORTED_MODULE_0__["inrFromDisplayedUnits"])(budget - spent, code)
    });
}


/***/ }),

/***/ "./src/app/core/utils/percentages.ts":
/*!*******************************************!*\
  !*** ./src/app/core/utils/percentages.ts ***!
  \*******************************************/
/*! exports provided: roundPercentages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundPercentages", function() { return roundPercentages; });
/**
 * Pure: whole-number percentages of `values` that add up to exactly 100 (largest-remainder method).
 * Each value gets the floor of its exact share; the points still missing go to the values with the
 * largest fractional remainders (ties: larger value first). All zeros (or no values) -> all zeros.
 */
function roundPercentages(values) {
    var total = values.reduce(function (sum, v) { return sum + v; }, 0);
    if (!(total > 0)) {
        return values.map(function () { return 0; });
    }
    var exact = values.map(function (v) { return v / total * 100; });
    var result = exact.map(Math.floor);
    var missing = 100 - result.reduce(function (sum, v) { return sum + v; }, 0);
    var order = exact
        .map(function (e, i) { return ({ i: i, remainder: e - Math.floor(e), value: values[i] }); })
        .sort(function (a, b) { return b.remainder - a.remainder || b.value - a.value; });
    for (var k = 0; missing > 0 && k < order.length; k++, missing--) {
        result[order[k].i]++;
    }
    return result;
}


/***/ }),

/***/ "./src/app/core/utils/stored-data.ts":
/*!*******************************************!*\
  !*** ./src/app/core/utils/stored-data.ts ***!
  \*******************************************/
/*! exports provided: isValidTransaction, isValidCategory, cleanStoredTransactions, cleanStoredCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidTransaction", function() { return isValidTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidCategory", function() { return isValidCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanStoredTransactions", function() { return cleanStoredTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanStoredCategories", function() { return cleanStoredCategories; });
var HEX_COLOR = /^#[0-9a-fA-F]{6}$/;
var ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
/** A saved transaction: string id, 'YYYY-MM-DD' date, income/expense, positive amount, string category/description. */
function isValidTransaction(t) {
    return !!t && typeof t === 'object'
        && typeof t.id === 'string' && t.id.length > 0
        && typeof t.date === 'string' && ISO_DATE.test(t.date)
        && typeof t.description === 'string'
        && typeof t.category === 'string'
        && typeof t.amount === 'number' && isFinite(t.amount) && t.amount > 0
        && (t.type === 'income' || t.type === 'expense');
}
/** A saved expense category: non-empty name, #rrggbb colour, finite limit > 0. */
function isValidCategory(c) {
    return !!c && typeof c === 'object'
        && typeof c.name === 'string' && c.name.trim().length > 0
        && typeof c.color === 'string' && HEX_COLOR.test(c.color)
        && typeof c.monthlyLimit === 'number' && isFinite(c.monthlyLimit) && c.monthlyLimit > 0;
}
function parse(raw) {
    try {
        return { ok: true, value: JSON.parse(raw) };
    }
    catch (e) {
        return { ok: false, value: null };
    }
}
/**
 * Cleans the saved transactions value (`{ generatedFor, transactions: [...] }`): keeps every valid transaction
 * (a category that no longer exists is fine), skips broken ones and repeated ids (the first wins).
 */
function cleanStoredTransactions(raw) {
    if (raw === null) {
        return { status: 'missing', generatedFor: null, transactions: [], skipped: 0 };
    }
    var parsed = parse(raw);
    var data = parsed.value;
    if (!parsed.ok || !data || typeof data !== 'object' || !Array.isArray(data.transactions)) {
        return { status: 'unreadable', generatedFor: null, transactions: [], skipped: 0 };
    }
    var seen = {};
    var transactions = [];
    var skipped = 0;
    data.transactions.forEach(function (t) {
        if (!isValidTransaction(t) || seen[t.id]) {
            skipped++;
            return;
        }
        seen[t.id] = true;
        transactions.push({ id: t.id, date: t.date, description: t.description, category: t.category, amount: t.amount, type: t.type });
    });
    return {
        status: skipped ? 'partial' : 'ok',
        generatedFor: typeof data.generatedFor === 'string' ? data.generatedFor : null,
        transactions: transactions,
        skipped: skipped
    };
}
/** Cleans the saved categories value (an array): keeps valid entries, skips broken ones and repeated names. */
function cleanStoredCategories(raw) {
    if (raw === null) {
        return { status: 'missing', categories: [], skipped: 0 };
    }
    var parsed = parse(raw);
    if (!parsed.ok || !Array.isArray(parsed.value)) {
        return { status: 'unreadable', categories: [], skipped: 0 };
    }
    var seen = {};
    var categories = [];
    var skipped = 0;
    parsed.value.forEach(function (c) {
        var key = isValidCategory(c) ? c.name.trim().toLowerCase() : '';
        if (!key || seen[key]) {
            skipped++;
            return;
        }
        seen[key] = true;
        categories.push({ name: c.name, color: c.color, monthlyLimit: c.monthlyLimit });
    });
    return { status: skipped ? 'partial' : 'ok', categories: categories, skipped: skipped };
}


/***/ }),

/***/ "./src/app/core/utils/transaction-color.ts":
/*!*************************************************!*\
  !*** ./src/app/core/utils/transaction-color.ts ***!
  \*************************************************/
/*! exports provided: transactionColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionColor", function() { return transactionColor; });
/**
 * Pure: display colour for a transaction. All income uses `incomeColor`;
 * expenses use their category's colour. Returns null when the category is unknown,
 * so the caller can fall back to a neutral theme colour.
 */
function transactionColor(transaction, categories, incomeColor) {
    if (transaction.type === 'income') {
        return incomeColor;
    }
    var category = categories.filter(function (c) { return c.name === transaction.category; })[0];
    return category ? category.color : null;
}


/***/ }),

/***/ "./src/app/core/utils/validators.ts":
/*!******************************************!*\
  !*** ./src/app/core/utils/validators.ts ***!
  \******************************************/
/*! exports provided: positiveAmount, positiveAmountIn, decimalPlaces, maxInputDecimals, amountDecimalsIn, amountErrorText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positiveAmount", function() { return positiveAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positiveAmountIn", function() { return positiveAmountIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decimalPlaces", function() { return decimalPlaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxInputDecimals", function() { return maxInputDecimals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amountDecimalsIn", function() { return amountDecimalsIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amountErrorText", function() { return amountErrorText; });
/* harmony import */ var _money__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./money */ "./src/app/core/utils/money.ts");

/** Valid when the value is a finite number that is still > 0 after rounding to paise. */
function positiveAmount(control) {
    var raw = control.value;
    var value = typeof raw === 'number' ? raw : parseFloat(raw);
    return isFinite(value) && Math.round(value * 100) > 0 ? null : { positiveAmount: true };
}
/**
 * The same rule for an amount typed in the form's currency: valid when it is > 0 at that currency's precision
 * (paise for INR, cents for USD/EUR/GBP, whole yen) AND still > 0 once converted to rupees and rounded to paise.
 * So $0.0001 (shows as $0.00, ₹0.0088) and ¥0.4 are rejected. The currency is read at validation time.
 */
function positiveAmountIn(currency) {
    return function (control) {
        var code = currency();
        var raw = control.value;
        var value = typeof raw === 'number' ? raw : parseFloat(raw);
        var places = Object(_money__WEBPACK_IMPORTED_MODULE_0__["getCurrency"])(code).code === 'INR' ? 2 : Object(_money__WEBPACK_IMPORTED_MODULE_0__["getCurrency"])(code).decimals;
        var inr = Object(_money__WEBPACK_IMPORTED_MODULE_0__["toInr"])(value, code);
        return isFinite(value) && Math.round(value * Math.pow(10, places)) > 0 && inr > 0 ? null : { positiveAmount: true };
    };
}
/**
 * Decimal places of a value as typed. A plain decimal string is counted as written ('12.50' -> 2); numbers
 * (what a number input reports) and exponent forms are counted from their exact value ('1e3' -> 0,
 * 1e-7 -> 7), so nothing is rounded before counting.
 */
function decimalPlaces(raw) {
    if (typeof raw === 'string' && /^\s*[+-]?\d*\.\d+\s*$/.test(raw)) {
        return raw.trim().split('.')[1].length;
    }
    var value = typeof raw === 'number' ? raw : parseFloat(raw);
    if (!isFinite(value)) {
        return 0;
    }
    var parts = String(Math.abs(value)).split('e');
    var fraction = (parts[0].split('.')[1] || '').length;
    return Math.max(0, fraction - (parts[1] ? parseInt(parts[1], 10) : 0));
}
/** Most decimals an amount may be typed with: whole yen, otherwise 2 (paise / cents). */
function maxInputDecimals(code) {
    var currency = Object(_money__WEBPACK_IMPORTED_MODULE_0__["getCurrency"])(code);
    return currency.code === 'INR' ? 2 : currency.decimals;
}
/**
 * Rejects amounts typed with more decimals than the currency allows ({ decimals: { max } }); never rounds.
 * Empty values are left to Validators.required. The currency is read at validation time.
 */
function amountDecimalsIn(currency) {
    return function (control) {
        var raw = control.value;
        if (raw === null || raw === undefined || raw === '') {
            return null;
        }
        var max = maxInputDecimals(currency());
        return decimalPlaces(raw) > max ? { decimals: { max: max } } : null;
    };
}
/** The message under an amount field: "greater than 0" first, then the decimals rule; null when valid. */
function amountErrorText(control, noun) {
    if (!control.errors) {
        return null;
    }
    if (control.errors.required || control.errors.positiveAmount) {
        return noun === 'amount' ? 'Enter an amount greater than 0.' : 'Enter a limit greater than 0.';
    }
    if (control.errors.decimals) {
        return control.errors.decimals.max === 0 ? 'Enter a whole number of yen.' : 'Use at most 2 decimal places.';
    }
    return null;
}


/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.css":
/*!******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--bs-body-color);\n  text-decoration: none;\n}\n\n.brand-mark {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  background-color: #4338ca;\n  color: #fff;\n  font-weight: 700;\n  line-height: 1;\n}\n\n/* Mobile top bar: [menu] [brand] ........ [theme toggle]. */\n\n.topbar {\n  gap: 12px;\n  background-color: var(--app-surface);\n}\n\n.theme-toggle {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  border: 0;\n  border-radius: var(--bs-border-radius);\n  background: transparent;\n  color: var(--bs-body-color);\n  font-size: 1.25rem;\n}\n\n/* Mobile offcanvas panel uses the raised surface instead of the page background. */\n\n.sidebar {\n  --bs-offcanvas-bg: var(--app-surface);\n}\n\n.sidebar-body {\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-link {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 0.75rem;\n  border-radius: var(--bs-border-radius);\n  color: var(--bs-secondary-color);\n  font-weight: 500;\n}\n\n.sidebar-link:hover,\n.sidebar-link:focus-visible {\n  color: var(--bs-body-color);\n  background-color: var(--bs-tertiary-bg);\n}\n\n.sidebar-link.active {\n  color: var(--bs-primary-text-emphasis);\n  background-color: var(--bs-primary-bg-subtle);\n  font-weight: 600;\n}\n\n.form-switch .form-check-input {\n  float: none;\n}\n\n/* Currency row (+ caption), pinned to the bottom of the menu below lg with the divider above it. */\n\n.currency-block {\n  padding-top: 1rem;\n  border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color);\n}\n\n/* The 20px coin takes the 16px box of the Dark mode row's sun icon (2px overhang each side), so both icons share\n   a centre line and \"Currency\" starts exactly where \"Dark mode\" does. */\n\n.currency-icon {\n  flex-shrink: 0;\n  margin: -2px;\n}\n\n/* Both footer icons (coins, sun/moon) in the same muted grey; the labels stay body colour. */\n\n.sidebar-row-icon {\n  color: var(--bs-secondary-color);\n}\n\n/* Under the row, starting at the \"Currency\" label: icon box (16px) + the row gap (0.5rem). Hidden for INR.\n   One line: \"Approximate exchange rates\" fits beside the label in the 260px desktop sidebar. */\n\n.currency-caption {\n  margin-top: 2px;\n  padding-left: calc(16px + 0.5rem);\n  font-size: 0.75rem;\n  line-height: 1.3;\n  color: var(--bs-secondary-color);\n  white-space: nowrap;\n}\n\n/* Label-like name for the currency toggle (aria-labelledby); renders like the former <label>. */\n\n.currency-label {\n  display: inline-block;\n}\n\n.currency-dropdown {\n  flex-shrink: 0;\n}\n\n/* The toggle reuses .form-select.form-select-sm (size, padding, font, radius, border, chevron, surface bg).\n   Fixed width that fits the longest option (\"€ EUR\", ~87.6px at 16px root), the same for every currency and\n   scaling with the root font size; ellipsis only as a safety net. */\n\n.currency-select {\n  width: 5.5rem;\n  flex-shrink: 0;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* Like other buttons: the focus ring and focus border only for keyboard focus (:focus-visible), not after a mouse\n   or touch click. (.form-select:focus draws them on any focus; real selects/inputs elsewhere keep that.) */\n\n.currency-select:focus:not(:focus-visible) {\n  border-color: var(--bs-border-color);\n  outline: 0;\n  box-shadow: none;\n}\n\n/* The list (app dropdown look via .filter-menu): at least as wide as the toggle (.filter-menu's min-width: 100%\n   would measure the viewport once the menu is position: fixed), never taller than the viewport. */\n\n.currency-menu {\n  min-width: 5.5rem;\n  max-height: calc(100vh - 1rem);\n  overflow-y: auto;\n}\n\n/* Desktop: fixed-width column that stays in view while the page scrolls. */\n\n@media (min-width: 992px) {\n  /* Bootstrap forces .offcanvas-lg transparent at lg, so the host paints the surface. */\n  :host {\n    flex: 0 0 260px;\n    width: 260px;\n    background-color: var(--app-surface);\n  }\n\n  .sidebar {\n    position: sticky;\n    top: 0;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    padding: 1.25rem 1rem;\n  }\n\n  /* From lg the divider sits between Currency and Dark mode instead, the same 1rem from each. */\n  .currency-block {\n    padding-top: 0;\n    padding-bottom: 1rem;\n    border-top: 0;\n  }\n\n  /* Bootstrap hides the offcanvas header and zeroes body layout at lg; restore them. */\n  .sidebar .offcanvas-header {\n    display: flex;\n    padding: 0 0.75rem 1.5rem;\n  }\n\n  /* 4px of padding (pulled back with a negative margin, so nothing moves) keeps the links' and switch's\n     focus rings inside this scrolling area instead of clipped at its edges. */\n  .sidebar .offcanvas-body.sidebar-body {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    overflow-y: auto;\n    padding: 4px;\n    margin: -4px;\n  }\n}\n\n/* Mobile offcanvas: keep it a comfortable width. */\n\n@media (max-width: 991.98px) {\n  .sidebar {\n    --bs-offcanvas-width: 280px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUEsNERBQTREOztBQUM1RDtFQUNFLFNBQVM7RUFDVCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULHNDQUFzQztFQUN0Qyx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQSxtRkFBbUY7O0FBQ25GO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixzQ0FBc0M7RUFDdEMsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLDZDQUE2QztFQUM3QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsbUdBQW1HOztBQUNuRztFQUNFLGlCQUFpQjtFQUNqQixnRkFBZ0Y7QUFDbEY7O0FBRUE7d0VBQ3dFOztBQUN4RTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUEsNkZBQTZGOztBQUM3RjtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTsrRkFDK0Y7O0FBQy9GO0VBQ0UsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUEsZ0dBQWdHOztBQUNoRztFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O29FQUVvRTs7QUFDcEU7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTsyR0FDMkc7O0FBQzNHO0VBQ0Usb0NBQW9DO0VBQ3BDLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7a0dBQ2tHOztBQUNsRztFQUNFLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBLDJFQUEyRTs7QUFDM0U7RUFDRSxzRkFBc0Y7RUFDdEY7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0VBQ3ZCOztFQUVBLDhGQUE4RjtFQUM5RjtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsYUFBYTtFQUNmOztFQUVBLHFGQUFxRjtFQUNyRjtJQUNFLGFBQWE7SUFDYix5QkFBeUI7RUFDM0I7O0VBRUE7OEVBQzRFO0VBQzVFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7QUFDRjs7QUFFQSxtREFBbUQ7O0FBQ25EO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5icmFuZC1tYXJrIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDMzOGNhO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi8qIE1vYmlsZSB0b3AgYmFyOiBbbWVudV0gW2JyYW5kXSAuLi4uLi4uLiBbdGhlbWUgdG9nZ2xlXS4gKi9cbi50b3BiYXIge1xuICBnYXA6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1zdXJmYWNlKTtcbn1cblxuLnRoZW1lLXRvZ2dsZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnMtYm9yZGVyLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tYnMtYm9keS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLyogTW9iaWxlIG9mZmNhbnZhcyBwYW5lbCB1c2VzIHRoZSByYWlzZWQgc3VyZmFjZSBpbnN0ZWFkIG9mIHRoZSBwYWdlIGJhY2tncm91bmQuICovXG4uc2lkZWJhciB7XG4gIC0tYnMtb2ZmY2FudmFzLWJnOiB2YXIoLS1hcHAtc3VyZmFjZSk7XG59XG5cbi5zaWRlYmFyLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2lkZWJhci1saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjZyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnMtYm9yZGVyLXJhZGl1cyk7XG4gIGNvbG9yOiB2YXIoLS1icy1zZWNvbmRhcnktY29sb3IpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc2lkZWJhci1saW5rOmhvdmVyLFxuLnNpZGViYXItbGluazpmb2N1cy12aXNpYmxlIHtcbiAgY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy10ZXJ0aWFyeS1iZyk7XG59XG5cbi5zaWRlYmFyLWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWJzLXByaW1hcnktdGV4dC1lbXBoYXNpcyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLXByaW1hcnktYmctc3VidGxlKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgZmxvYXQ6IG5vbmU7XG59XG5cbi8qIEN1cnJlbmN5IHJvdyAoKyBjYXB0aW9uKSwgcGlubmVkIHRvIHRoZSBib3R0b20gb2YgdGhlIG1lbnUgYmVsb3cgbGcgd2l0aCB0aGUgZGl2aWRlciBhYm92ZSBpdC4gKi9cbi5jdXJyZW5jeS1ibG9jayB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBib3JkZXItdG9wOiB2YXIoLS1icy1ib3JkZXItd2lkdGgpIHZhcigtLWJzLWJvcmRlci1zdHlsZSkgdmFyKC0tYnMtYm9yZGVyLWNvbG9yKTtcbn1cblxuLyogVGhlIDIwcHggY29pbiB0YWtlcyB0aGUgMTZweCBib3ggb2YgdGhlIERhcmsgbW9kZSByb3cncyBzdW4gaWNvbiAoMnB4IG92ZXJoYW5nIGVhY2ggc2lkZSksIHNvIGJvdGggaWNvbnMgc2hhcmVcbiAgIGEgY2VudHJlIGxpbmUgYW5kIFwiQ3VycmVuY3lcIiBzdGFydHMgZXhhY3RseSB3aGVyZSBcIkRhcmsgbW9kZVwiIGRvZXMuICovXG4uY3VycmVuY3ktaWNvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW46IC0ycHg7XG59XG5cbi8qIEJvdGggZm9vdGVyIGljb25zIChjb2lucywgc3VuL21vb24pIGluIHRoZSBzYW1lIG11dGVkIGdyZXk7IHRoZSBsYWJlbHMgc3RheSBib2R5IGNvbG91ci4gKi9cbi5zaWRlYmFyLXJvdy1pY29uIHtcbiAgY29sb3I6IHZhcigtLWJzLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi8qIFVuZGVyIHRoZSByb3csIHN0YXJ0aW5nIGF0IHRoZSBcIkN1cnJlbmN5XCIgbGFiZWw6IGljb24gYm94ICgxNnB4KSArIHRoZSByb3cgZ2FwICgwLjVyZW0pLiBIaWRkZW4gZm9yIElOUi5cbiAgIE9uZSBsaW5lOiBcIkFwcHJveGltYXRlIGV4Y2hhbmdlIHJhdGVzXCIgZml0cyBiZXNpZGUgdGhlIGxhYmVsIGluIHRoZSAyNjBweCBkZXNrdG9wIHNpZGViYXIuICovXG4uY3VycmVuY3ktY2FwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKDE2cHggKyAwLjVyZW0pO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiB2YXIoLS1icy1zZWNvbmRhcnktY29sb3IpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vKiBMYWJlbC1saWtlIG5hbWUgZm9yIHRoZSBjdXJyZW5jeSB0b2dnbGUgKGFyaWEtbGFiZWxsZWRieSk7IHJlbmRlcnMgbGlrZSB0aGUgZm9ybWVyIDxsYWJlbD4uICovXG4uY3VycmVuY3ktbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jdXJyZW5jeS1kcm9wZG93biB7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4vKiBUaGUgdG9nZ2xlIHJldXNlcyAuZm9ybS1zZWxlY3QuZm9ybS1zZWxlY3Qtc20gKHNpemUsIHBhZGRpbmcsIGZvbnQsIHJhZGl1cywgYm9yZGVyLCBjaGV2cm9uLCBzdXJmYWNlIGJnKS5cbiAgIEZpeGVkIHdpZHRoIHRoYXQgZml0cyB0aGUgbG9uZ2VzdCBvcHRpb24gKFwi4oKsIEVVUlwiLCB+ODcuNnB4IGF0IDE2cHggcm9vdCksIHRoZSBzYW1lIGZvciBldmVyeSBjdXJyZW5jeSBhbmRcbiAgIHNjYWxpbmcgd2l0aCB0aGUgcm9vdCBmb250IHNpemU7IGVsbGlwc2lzIG9ubHkgYXMgYSBzYWZldHkgbmV0LiAqL1xuLmN1cnJlbmN5LXNlbGVjdCB7XG4gIHdpZHRoOiA1LjVyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogTGlrZSBvdGhlciBidXR0b25zOiB0aGUgZm9jdXMgcmluZyBhbmQgZm9jdXMgYm9yZGVyIG9ubHkgZm9yIGtleWJvYXJkIGZvY3VzICg6Zm9jdXMtdmlzaWJsZSksIG5vdCBhZnRlciBhIG1vdXNlXG4gICBvciB0b3VjaCBjbGljay4gKC5mb3JtLXNlbGVjdDpmb2N1cyBkcmF3cyB0aGVtIG9uIGFueSBmb2N1czsgcmVhbCBzZWxlY3RzL2lucHV0cyBlbHNld2hlcmUga2VlcCB0aGF0LikgKi9cbi5jdXJyZW5jeS1zZWxlY3Q6Zm9jdXM6bm90KDpmb2N1cy12aXNpYmxlKSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnMtYm9yZGVyLWNvbG9yKTtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyogVGhlIGxpc3QgKGFwcCBkcm9wZG93biBsb29rIHZpYSAuZmlsdGVyLW1lbnUpOiBhdCBsZWFzdCBhcyB3aWRlIGFzIHRoZSB0b2dnbGUgKC5maWx0ZXItbWVudSdzIG1pbi13aWR0aDogMTAwJVxuICAgd291bGQgbWVhc3VyZSB0aGUgdmlld3BvcnQgb25jZSB0aGUgbWVudSBpcyBwb3NpdGlvbjogZml4ZWQpLCBuZXZlciB0YWxsZXIgdGhhbiB0aGUgdmlld3BvcnQuICovXG4uY3VycmVuY3ktbWVudSB7XG4gIG1pbi13aWR0aDogNS41cmVtO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMXJlbSk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi8qIERlc2t0b3A6IGZpeGVkLXdpZHRoIGNvbHVtbiB0aGF0IHN0YXlzIGluIHZpZXcgd2hpbGUgdGhlIHBhZ2Ugc2Nyb2xscy4gKi9cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAvKiBCb290c3RyYXAgZm9yY2VzIC5vZmZjYW52YXMtbGcgdHJhbnNwYXJlbnQgYXQgbGcsIHNvIHRoZSBob3N0IHBhaW50cyB0aGUgc3VyZmFjZS4gKi9cbiAgOmhvc3Qge1xuICAgIGZsZXg6IDAgMCAyNjBweDtcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLXN1cmZhY2UpO1xuICB9XG5cbiAgLnNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEuMjVyZW0gMXJlbTtcbiAgfVxuXG4gIC8qIEZyb20gbGcgdGhlIGRpdmlkZXIgc2l0cyBiZXR3ZWVuIEN1cnJlbmN5IGFuZCBEYXJrIG1vZGUgaW5zdGVhZCwgdGhlIHNhbWUgMXJlbSBmcm9tIGVhY2guICovXG4gIC5jdXJyZW5jeS1ibG9jayB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgfVxuXG4gIC8qIEJvb3RzdHJhcCBoaWRlcyB0aGUgb2ZmY2FudmFzIGhlYWRlciBhbmQgemVyb2VzIGJvZHkgbGF5b3V0IGF0IGxnOyByZXN0b3JlIHRoZW0uICovXG4gIC5zaWRlYmFyIC5vZmZjYW52YXMtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDAgMC43NXJlbSAxLjVyZW07XG4gIH1cblxuICAvKiA0cHggb2YgcGFkZGluZyAocHVsbGVkIGJhY2sgd2l0aCBhIG5lZ2F0aXZlIG1hcmdpbiwgc28gbm90aGluZyBtb3Zlcykga2VlcHMgdGhlIGxpbmtzJyBhbmQgc3dpdGNoJ3NcbiAgICAgZm9jdXMgcmluZ3MgaW5zaWRlIHRoaXMgc2Nyb2xsaW5nIGFyZWEgaW5zdGVhZCBvZiBjbGlwcGVkIGF0IGl0cyBlZGdlcy4gKi9cbiAgLnNpZGViYXIgLm9mZmNhbnZhcy1ib2R5LnNpZGViYXItYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBtYXJnaW46IC00cHg7XG4gIH1cbn1cblxuLyogTW9iaWxlIG9mZmNhbnZhczoga2VlcCBpdCBhIGNvbWZvcnRhYmxlIHdpZHRoLiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICAtLWJzLW9mZmNhbnZhcy13aWR0aDogMjgwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top bar, mobile only -->\n<header class=\"topbar d-flex d-lg-none align-items-center px-3 py-2 border-bottom sticky-top\">\n  <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\"\n          data-bs-toggle=\"offcanvas\" data-bs-target=\"#sidebarMenu\"\n          aria-controls=\"sidebarMenu\" aria-label=\"Open menu\">\n    <i class=\"bi bi-list fs-5\" aria-hidden=\"true\"></i>\n  </button>\n  <a class=\"brand\" routerLink=\"/overview\">\n    <span class=\"brand-mark\" aria-hidden=\"true\">B</span>\n    <span>Budgetly</span>\n  </a>\n  <button class=\"theme-toggle\" type=\"button\" (click)=\"toggleTheme()\"\n          [attr.aria-label]=\"isDark ? 'Switch to light mode' : 'Switch to dark mode'\">\n    <i class=\"bi\" [ngClass]=\"isDark ? 'bi-sun' : 'bi-moon'\" aria-hidden=\"true\"></i>\n  </button>\n</header>\n\n<!-- Sidebar: offcanvas below lg, static column from lg up -->\n<aside #sidebarMenu id=\"sidebarMenu\" class=\"sidebar offcanvas-lg offcanvas-start border-end\"\n       tabindex=\"-1\" aria-labelledby=\"sidebarMenuLabel\">\n  <div class=\"offcanvas-header\">\n    <a class=\"brand\" id=\"sidebarMenuLabel\" routerLink=\"/overview\" (click)=\"closeMenu()\">\n      <span class=\"brand-mark\" aria-hidden=\"true\">B</span>\n      <span>Budgetly</span>\n    </a>\n    <button type=\"button\" class=\"btn-close d-lg-none\" data-bs-dismiss=\"offcanvas\"\n            data-bs-target=\"#sidebarMenu\" aria-label=\"Close menu\"></button>\n  </div>\n\n  <div class=\"offcanvas-body sidebar-body\">\n    <nav aria-label=\"Main navigation\">\n      <ul class=\"nav flex-column gap-1\">\n        <li class=\"nav-item\" *ngFor=\"let link of links\">\n          <a class=\"nav-link sidebar-link\" [routerLink]=\"link.path\" routerLinkActive=\"active\"\n             (click)=\"closeMenu()\">\n            <i class=\"bi\" [ngClass]=\"link.icon\" aria-hidden=\"true\"></i>\n            <span>{{ link.label }}</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n\n    <!-- Footer. Desktop: Currency, divider, Dark mode. Below lg: divider, Currency (the top bar has the theme button). -->\n    <div class=\"mt-auto\">\n      <div class=\"currency-block\">\n        <div class=\"currency-row d-flex align-items-center gap-2\">\n          <svg class=\"currency-icon sidebar-row-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><ellipse cx=\"12\" cy=\"7\" rx=\"7\" ry=\"3\"></ellipse><path d=\"M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5\"></path></svg>\n          <span id=\"currencyLabel\" class=\"currency-label flex-grow-1\">Currency</span>\n          <!-- Dropdown styled exactly like the former small select. It opens upward and is positioned 'fixed'\n               (see ngAfterViewInit), so the sidebar/offcanvas scroll areas never clip it. Name: \"Currency, $ USD\". -->\n          <div #currencyDropdown class=\"dropup currency-dropdown\">\n            <button #currencyToggle id=\"currencyToggle\" type=\"button\" class=\"form-select form-select-sm currency-select\"\n                    data-bs-toggle=\"dropdown\" aria-expanded=\"false\" aria-haspopup=\"listbox\"\n                    aria-labelledby=\"currencyLabel currencyToggle\"\n                    [attr.aria-describedby]=\"isConverted ? 'currencyCaption' : null\">{{ selectedOption.symbol }} {{ selectedOption.code }}</button>\n            <!-- A list of choices for screen readers (listbox/option/aria-selected) with the app's dropdown look;\n                 Bootstrap's arrow keys still move between the .dropdown-item buttons, Enter/Space pick. Options are\n                 tabindex=\"-1\" (reached with the arrows, like listbox options), so Tab leaves and closes the list. -->\n            <ul #currencyMenu class=\"dropdown-menu dropdown-menu-end filter-menu currency-menu\" role=\"listbox\"\n                aria-labelledby=\"currencyLabel\">\n              <li *ngFor=\"let option of currencies\" role=\"presentation\">\n                <button type=\"button\" class=\"dropdown-item\" role=\"option\" tabindex=\"-1\" [class.active]=\"option.code === currency\"\n                        [attr.aria-selected]=\"option.code === currency ? 'true' : 'false'\"\n                        (click)=\"pickCurrency(option.code)\">{{ option.symbol }} {{ option.code }}</button>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <!-- Only for converted currencies; it is then also the toggle's description (aria-describedby). -->\n        <p class=\"currency-caption mb-0\" id=\"currencyCaption\" *ngIf=\"isConverted\">Approximate exchange rates</p>\n      </div>\n\n      <div class=\"d-none d-lg-block pt-3 border-top\">\n        <div class=\"form-check form-switch mb-0 d-flex align-items-center gap-2 ps-0\">\n          <i class=\"bi sidebar-row-icon\" [ngClass]=\"isDark ? 'bi-moon-stars' : 'bi-sun'\" aria-hidden=\"true\"></i>\n          <label class=\"form-check-label flex-grow-1\" for=\"themeSwitch\">Dark mode</label>\n          <input class=\"form-check-input ms-0\" type=\"checkbox\" role=\"switch\" id=\"themeSwitch\"\n                 [checked]=\"isDark\" (change)=\"toggleTheme()\">\n        </div>\n      </div>\n    </div>\n\n    <!-- Announces a currency change made while the phone menu is open as a modal (content outside a modal\n         dialog may be ignored by screen readers). Unused on desktop, where the outer region below speaks. -->\n    <div class=\"visually-hidden\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">{{ menuAnnouncement }}</div>\n  </div>\n</aside>\n\n<!-- Polite announcement of a user's currency change (desktop, or whenever the menu isn't open). Outside the\n     offcanvas so it is never hidden (visibility or display) at any breakpoint. -->\n<div class=\"visually-hidden\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">{{ currencyAnnouncement }}</div>\n"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/alert.service */ "./src/app/core/services/alert.service.ts");
/* harmony import */ var _core_services_currency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/currency.service */ "./src/app/core/services/currency.service.ts");
/* harmony import */ var _core_utils_money__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/money */ "./src/app/core/utils/money.ts");





var THEME_STORAGE_KEY = 'budgetly.theme';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(alertService, currencyService) {
        var _this = this;
        this.alertService = alertService;
        this.currencyService = currencyService;
        this.links = [
            { path: '/overview', label: 'Overview', icon: 'bi-grid-1x2' },
            { path: '/transactions', label: 'Transactions', icon: 'bi-list-ul' },
            { path: '/budgets', label: 'Budgets', icon: 'bi-pie-chart' },
            { path: '/reports', label: 'Reports', icon: 'bi-bar-chart-line' }
        ];
        this.theme = 'light';
        this.currencies = _core_utils_money__WEBPACK_IMPORTED_MODULE_4__["CURRENCIES"];
        /**
         * Live-region texts: empty on load (a restored currency isn't announced), set only by a user change, and only
         * ever one of them: the in-menu region while the phone menu is open as a modal, otherwise the outer one.
         */
        this.currencyAnnouncement = '';
        this.menuAnnouncement = '';
        this.announceTimer = null;
        /** The pending announcement (if any) is aimed at the in-menu region. */
        this.announceInMenu = false;
        /** Phone/tablet menu open as a modal (shown.bs.offcanvas until hidden.bs.offcanvas); never true from lg up. */
        this.menuOpen = false;
        /** Bootstrap Dropdown for the currency control. */
        this.currencyDropdownInstance = null;
        /** The phone menu is sliding in or out (show/hide until shown/hidden): the currency list stays closed meanwhile. */
        this.menuSliding = false;
        /**
         * Before the currency list opens: refuse while the phone menu is sliding (a fixed-positioned list inside the
         * moving, transformed offcanvas would appear offset). Cancelling Bootstrap's show event keeps it closed.
         */
        this.onCurrencyShow = function (event) {
            if (_this.menuSliding) {
                event.preventDefault();
            }
        };
        /** Once the currency list is shown: focus the selected currency. */
        this.onCurrencyShown = function () {
            var active = _this.currencyMenu.nativeElement.querySelector('.dropdown-item.active');
            if (active) {
                active.focus();
            }
        };
        /**
         * Keys for the currency control, on window in the capture phase so they run before Bootstrap's document handlers
         * and the offcanvas' own Escape handler:
         * - Escape in the open list closes only the list (focus back on the toggle), never the phone menu;
         * - ArrowUp/ArrowDown on the closed toggle open the list on the selected currency (not the first/last item).
         * Arrow keys inside the open list are left to Bootstrap.
         */
        this.onWindowKeydown = function (event) {
            var dropdown = _this.currencyDropdownInstance;
            var target = event.target;
            if (!dropdown || !_this.currencyDropdown || !target || !_this.currencyDropdown.nativeElement.contains(target)) {
                return;
            }
            var toggle = _this.currencyToggle.nativeElement;
            var isOpen = toggle.getAttribute('aria-expanded') === 'true';
            if (event.key === 'Escape' && isOpen) {
                event.preventDefault();
                event.stopPropagation();
                dropdown.hide();
                toggle.focus();
            }
            else if ((event.key === 'ArrowUp' || event.key === 'ArrowDown') && !isOpen && target === toggle) {
                event.preventDefault();
                event.stopPropagation();
                dropdown.show();
            }
        };
        /** Phone/tablet menu opening: clear any alert (it would sit over the menu links) and hold new ones. */
        this.onMenuShow = function () {
            _this.alertService.holdAlerts(true);
            _this.alertService.dismiss();
            _this.menuSliding = true;
            _this.closeCurrencyList();
        };
        /** Menu starting to close: close the currency list at once, before the slide. */
        this.onMenuHide = function () {
            _this.menuSliding = true;
            _this.closeCurrencyList();
        };
        this.onMenuShown = function () {
            _this.menuOpen = true;
            _this.menuSliding = false;
        };
        /**
         * Menu closed: show the latest held alert, if any, and empty the in-menu live region (cancelling an
         * announcement still on its way there), so it never keeps the last currency message. The outer region is untouched.
         */
        this.onMenuHidden = function () {
            _this.menuOpen = false;
            _this.menuSliding = false;
            _this.alertService.holdAlerts(false);
            if (_this.announceInMenu) {
                clearTimeout(_this.announceTimer);
                _this.announceInMenu = false;
            }
            _this.menuAnnouncement = '';
            _this.closeCurrencyList();
        };
    }
    /** Closes the currency list without moving focus (the offcanvas manages focus while it slides). */
    SidebarComponent.prototype.closeCurrencyList = function () {
        if (this.currencyDropdownInstance) {
            this.currencyDropdownInstance.hide();
        }
    };
    Object.defineProperty(SidebarComponent.prototype, "isDark", {
        get: function () {
            return this.theme === 'dark';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarComponent.prototype, "currency", {
        get: function () {
            return this.currencyService.currency;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarComponent.prototype, "selectedOption", {
        /** The selected currency's entry ('$ USD' on the toggle). */
        get: function () {
            return Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_4__["getCurrency"])(this.currency);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarComponent.prototype, "isConverted", {
        /** Amounts are converted (any currency but the INR base): shows the caption under the Currency row. */
        get: function () {
            return this.currency !== _core_utils_money__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_CURRENCY"];
        },
        enumerable: true,
        configurable: true
    });
    SidebarComponent.prototype.ngOnInit = function () {
        // index.html sets the attribute before Angular boots (avoids a flash);
        // resolve it again here in case that script did not run.
        var current = document.documentElement.getAttribute('data-bs-theme');
        this.applyTheme(current === 'dark' || current === 'light' ? current : this.getPreferredTheme());
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        // Offcanvas events only fire below lg (from lg up the sidebar is a static column).
        var menu = this.sidebarMenu.nativeElement;
        menu.addEventListener('show.bs.offcanvas', this.onMenuShow);
        menu.addEventListener('shown.bs.offcanvas', this.onMenuShown);
        menu.addEventListener('hide.bs.offcanvas', this.onMenuHide);
        menu.addEventListener('hidden.bs.offcanvas', this.onMenuHidden);
        this.createCurrencyDropdown();
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        var menu = this.sidebarMenu.nativeElement;
        menu.removeEventListener('show.bs.offcanvas', this.onMenuShow);
        menu.removeEventListener('shown.bs.offcanvas', this.onMenuShown);
        menu.removeEventListener('hide.bs.offcanvas', this.onMenuHide);
        menu.removeEventListener('hidden.bs.offcanvas', this.onMenuHidden);
        this.alertService.holdAlerts(false);
        clearTimeout(this.announceTimer);
        if (this.currencyDropdownInstance) {
            this.currencyToggle.nativeElement.removeEventListener('show.bs.dropdown', this.onCurrencyShow);
            this.currencyToggle.nativeElement.removeEventListener('shown.bs.dropdown', this.onCurrencyShown);
            window.removeEventListener('keydown', this.onWindowKeydown, true);
            this.currencyDropdownInstance.dispose();
            this.currencyDropdownInstance = null;
        }
    };
    SidebarComponent.prototype.toggleTheme = function () {
        this.applyTheme(this.isDark ? 'light' : 'dark');
        try {
            localStorage.setItem(THEME_STORAGE_KEY, this.theme);
        }
        catch (e) {
            // Storage unavailable (private mode, blocked); the choice just won't persist.
        }
    };
    /** Amounts everywhere are shown converted to the new currency; stored amounts stay in rupees. */
    SidebarComponent.prototype.setCurrency = function (code) {
        if (code === this.currency) {
            return;
        }
        this.currencyService.setCurrency(code);
        this.announceCurrency();
    };
    /** A currency picked from the list: apply it, close the list and return focus to the toggle. */
    SidebarComponent.prototype.pickCurrency = function (code) {
        this.setCurrency(code);
        if (this.currencyDropdownInstance) {
            this.currencyDropdownInstance.hide();
        }
        if (this.currencyToggle) {
            this.currencyToggle.nativeElement.focus();
        }
    };
    /** Closes the offcanvas menu on mobile; no-op on desktop where it is not shown. */
    SidebarComponent.prototype.closeMenu = function () {
        if (typeof bootstrap === 'undefined' || !this.sidebarMenu) {
            return;
        }
        var instance = bootstrap.Offcanvas.getInstance(this.sidebarMenu.nativeElement);
        if (instance) {
            instance.hide();
        }
    };
    /**
     * 'Currency changed to US dollar'. Cleared first and set again a moment later, so every change is announced,
     * including going back to a currency announced before.
     */
    SidebarComponent.prototype.announceCurrency = function () {
        var _this = this;
        this.currencyAnnouncement = '';
        this.menuAnnouncement = '';
        clearTimeout(this.announceTimer);
        // The aria-modal check keeps desktop (offcanvas-lg is never modal there) on the outer region.
        var inMenu = this.menuOpen && this.sidebarMenu.nativeElement.getAttribute('aria-modal') === 'true';
        var text = 'Currency changed to ' + Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_4__["getCurrency"])(this.currency).name;
        this.announceInMenu = inMenu;
        this.announceTimer = setTimeout(function () {
            _this.announceInMenu = false;
            if (inMenu) {
                _this.menuAnnouncement = text;
            }
            else {
                _this.currencyAnnouncement = text;
            }
        }, 100);
    };
    /**
     * The currency list opens upward (dropup + dropdown-menu-end = 'top-end'). Popper's 'fixed' strategy lifts it out
     * of the sidebar/offcanvas scroll areas (no clipping); flip/shift keep it inside the viewport (8px margin), so on a
     * short landscape phone it may open downward or slide instead.
     */
    SidebarComponent.prototype.createCurrencyDropdown = function () {
        if (typeof bootstrap === 'undefined' || !this.currencyToggle) {
            return;
        }
        var toggle = this.currencyToggle.nativeElement;
        this.currencyDropdownInstance = bootstrap.Dropdown.getOrCreateInstance(toggle, {
            popperConfig: function (defaults) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, defaults, { strategy: 'fixed', modifiers: (defaults.modifiers || []).concat([
                    { name: 'preventOverflow', options: { boundary: document.documentElement, rootBoundary: 'viewport', padding: 8, altAxis: true } },
                    { name: 'flip', options: { boundary: document.documentElement, rootBoundary: 'viewport', padding: 8,
                            fallbackPlacements: ['bottom-end', 'top-start', 'bottom-start'] } }
                ]) })); }
        });
        toggle.addEventListener('show.bs.dropdown', this.onCurrencyShow);
        toggle.addEventListener('shown.bs.dropdown', this.onCurrencyShown);
        window.addEventListener('keydown', this.onWindowKeydown, true);
    };
    SidebarComponent.prototype.applyTheme = function (theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-bs-theme', theme);
    };
    SidebarComponent.prototype.getPreferredTheme = function () {
        try {
            var stored = localStorage.getItem(THEME_STORAGE_KEY);
            if (stored === 'light' || stored === 'dark') {
                return stored;
            }
        }
        catch (e) {
            // Ignore and fall back to the system preference.
        }
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebarMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SidebarComponent.prototype, "sidebarMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('currencyDropdown'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SidebarComponent.prototype, "currencyDropdown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('currencyToggle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SidebarComponent.prototype, "currencyToggle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('currencyMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SidebarComponent.prototype, "currencyMenu", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/layout/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"], _core_services_currency_service__WEBPACK_IMPORTED_MODULE_3__["CurrencyService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/pages/budgets/budgets.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/budgets/budgets.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".min-w-0 {\n  min-width: 0;\n}\n\n/* Rows: lines between rows only, consistent vertical padding. */\n\n.attention-list li {\n  padding: 0.75rem 0;\n}\n\n.attention-list li:first-child {\n  padding-top: 0;\n}\n\n.attention-list li:last-child {\n  padding-bottom: 0;\n}\n\n.attention-list li + li {\n  border-top: var(--bs-border-width) solid var(--bs-border-color);\n}\n\n/* Same 10px dot as the Overview \"Budget by category\" card. */\n\n.category-dot {\n  flex-shrink: 0;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n\n/* \"View transactions\": thin outline, accent text (tint in dark mode), accent-tinted hover. */\n\n.view-txn-btn {\n  --bs-btn-color: var(--bs-link-color);\n  --bs-btn-bg: transparent;\n  --bs-btn-border-color: var(--bs-border-color);\n  --bs-btn-hover-color: var(--bs-link-color);\n  --bs-btn-hover-bg: var(--bs-primary-bg-subtle);\n  --bs-btn-hover-border-color: var(--bs-border-color);\n  --bs-btn-active-color: var(--bs-link-color);\n  --bs-btn-active-bg: var(--bs-primary-bg-subtle);\n  --bs-btn-active-border-color: var(--bs-border-color);\n  --bs-btn-focus-shadow-rgb: var(--bs-primary-rgb);\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n/* Add category modal: same 520px as Add transaction (shell from the shared .app-modal). */\n\n.add-category-modal {\n  --bs-modal-width: 520px;\n}\n\n/* Edit mode is wider for its three-button footer, like Edit transaction (add mode stays 520px). */\n\n.add-category-modal.is-edit {\n  --bs-modal-width: 580px;\n}\n\n/* Delete category dialog: same 520px as Delete transaction. */\n\n.delete-category-modal {\n  --bs-modal-width: 520px;\n}\n\n/* Limit hint: muted, or amber (--status-warn-fg) when budgets exceed income. Never blocks saving. */\n\n.limit-hint.is-warn {\n  color: var(--status-warn-fg);\n  font-weight: 600;\n}\n\n/* Colour swatches (native radios); selected = ring with a surface-coloured gap. */\n\n.color-swatch {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.btn-check:checked + .color-swatch {\n  box-shadow: 0 0 0 2px var(--app-surface), 0 0 0 4px var(--bs-body-color);\n}\n\n/* Keyboard focus: the app's focus ring, drawn outside the selection ring (which reaches 4px out). */\n\n.btn-check:focus-visible + .color-swatch {\n  outline: 2px solid var(--focus-ring);\n  outline-offset: 6px;\n}\n\n/* Preview of the new row: dashed box, empty 6px bar like the Overview budget card. */\n\n.category-preview {\n  padding: 0.75rem 1rem;\n  border: var(--bs-border-width) dashed var(--bs-border-color);\n  border-radius: var(--bs-border-radius-lg);\n}\n\n.preview-bar {\n  height: 6px;\n}\n\n/* Category cards (md+) and the single-card list (below md). */\n\n.budget-amount {\n  font-variant-numeric: tabular-nums;\n  line-height: 1.2;\n}\n\n.budget-bar {\n  height: 6px;\n}\n\n.category-list-mobile li {\n  padding: 0.75rem 0;\n}\n\n.category-list-mobile li:first-child {\n  padding-top: 0;\n}\n\n.category-list-mobile li:last-child {\n  padding-bottom: 0;\n}\n\n.category-list-mobile li + li {\n  border-top: var(--bs-border-width) solid var(--bs-border-color);\n}\n\n/*\n * New month: limits card (two thirds wide from lg up), the clean table look of Transactions.\n * Lines (--hairline) under the header and under every row, inset: the card keeps 1rem side padding\n * (app-card's top/bottom padding is removed with py-0) so they never touch the card edges.\n * Text sits where it did before: names/notes 1.25rem from the card edge, pencils 1rem.\n */\n\n.limits-card {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.limits-table {\n  --bs-table-bg: transparent;\n  --bs-table-color: var(--bs-body-color);\n  --bs-table-border-color: var(--hairline);\n  table-layout: fixed;\n}\n\n.limits-table th,\n.limits-table td {\n  padding: 0.75rem;\n}\n\n.limits-table th:first-child,\n.limits-table td:first-child {\n  padding-left: 0.25rem;\n}\n\n.limits-table th:last-child,\n.limits-table td:last-child {\n  padding-right: 0;\n}\n\n.limits-table th {\n  color: var(--bs-secondary-color);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n.limits-table .col-limit {\n  width: 8.5rem;\n}\n\n.limits-table .col-action {\n  width: 3.25rem;\n}\n\n/* Phones: no column headings (the list starts with the first category), and a narrower limit column\n   so normal category names fit (long ones truncate). Bootstrap has no table-header-group display utility. */\n\n@media (max-width: 767.98px) {\n  .limits-head {\n    display: none;\n  }\n\n  .limits-table .col-limit {\n    width: 6.5rem;\n  }\n}\n\n.limit-amount {\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n/* Note under the list; the last row's line is its divider. */\n\n.limits-footer {\n  padding: 1rem 0 1rem 0.25rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnVkZ2V0cy9idWRnZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsZ0VBQWdFOztBQUNoRTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwrREFBK0Q7QUFDakU7O0FBRUEsNkRBQTZEOztBQUM3RDtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQSw2RkFBNkY7O0FBQzdGO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4Qiw2Q0FBNkM7RUFDN0MsMENBQTBDO0VBQzFDLDhDQUE4QztFQUM5QyxtREFBbUQ7RUFDbkQsMkNBQTJDO0VBQzNDLCtDQUErQztFQUMvQyxvREFBb0Q7RUFDcEQsZ0RBQWdEO0VBQ2hELGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUEsMEZBQTBGOztBQUMxRjtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSxrR0FBa0c7O0FBQ2xHO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLDhEQUE4RDs7QUFDOUQ7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsb0dBQW9HOztBQUNwRztFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7O0FBRUEsa0ZBQWtGOztBQUNsRjtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0VBQXdFO0FBQzFFOztBQUVBLG9HQUFvRzs7QUFDcEc7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBLHFGQUFxRjs7QUFDckY7RUFDRSxxQkFBcUI7RUFDckIsNERBQTREO0VBQzVELHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSw4REFBOEQ7O0FBQzlEO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwrREFBK0Q7QUFDakU7O0FBRUE7Ozs7O0VBS0U7O0FBQ0Y7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHNDQUFzQztFQUN0Qyx3Q0FBd0M7RUFDeEMsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs0R0FDNEc7O0FBQzVHO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQkFBbUI7QUFDckI7O0FBRUEsNkRBQTZEOztBQUM3RDtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1ZGdldHMvYnVkZ2V0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pbi13LTAge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi8qIFJvd3M6IGxpbmVzIGJldHdlZW4gcm93cyBvbmx5LCBjb25zaXN0ZW50IHZlcnRpY2FsIHBhZGRpbmcuICovXG4uYXR0ZW50aW9uLWxpc3QgbGkge1xuICBwYWRkaW5nOiAwLjc1cmVtIDA7XG59XG5cbi5hdHRlbnRpb24tbGlzdCBsaTpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYXR0ZW50aW9uLWxpc3QgbGk6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uYXR0ZW50aW9uLWxpc3QgbGkgKyBsaSB7XG4gIGJvcmRlci10b3A6IHZhcigtLWJzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtYm9yZGVyLWNvbG9yKTtcbn1cblxuLyogU2FtZSAxMHB4IGRvdCBhcyB0aGUgT3ZlcnZpZXcgXCJCdWRnZXQgYnkgY2F0ZWdvcnlcIiBjYXJkLiAqL1xuLmNhdGVnb3J5LWRvdCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFwiVmlldyB0cmFuc2FjdGlvbnNcIjogdGhpbiBvdXRsaW5lLCBhY2NlbnQgdGV4dCAodGludCBpbiBkYXJrIG1vZGUpLCBhY2NlbnQtdGludGVkIGhvdmVyLiAqL1xuLnZpZXctdHhuLWJ0biB7XG4gIC0tYnMtYnRuLWNvbG9yOiB2YXIoLS1icy1saW5rLWNvbG9yKTtcbiAgLS1icy1idG4tYmc6IHRyYW5zcGFyZW50O1xuICAtLWJzLWJ0bi1ib3JkZXItY29sb3I6IHZhcigtLWJzLWJvcmRlci1jb2xvcik7XG4gIC0tYnMtYnRuLWhvdmVyLWNvbG9yOiB2YXIoLS1icy1saW5rLWNvbG9yKTtcbiAgLS1icy1idG4taG92ZXItYmc6IHZhcigtLWJzLXByaW1hcnktYmctc3VidGxlKTtcbiAgLS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1ib3JkZXItY29sb3IpO1xuICAtLWJzLWJ0bi1hY3RpdmUtY29sb3I6IHZhcigtLWJzLWxpbmstY29sb3IpO1xuICAtLWJzLWJ0bi1hY3RpdmUtYmc6IHZhcigtLWJzLXByaW1hcnktYmctc3VidGxlKTtcbiAgLS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjogdmFyKC0tYnMtYm9yZGVyLWNvbG9yKTtcbiAgLS1icy1idG4tZm9jdXMtc2hhZG93LXJnYjogdmFyKC0tYnMtcHJpbWFyeS1yZ2IpO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vKiBBZGQgY2F0ZWdvcnkgbW9kYWw6IHNhbWUgNTIwcHggYXMgQWRkIHRyYW5zYWN0aW9uIChzaGVsbCBmcm9tIHRoZSBzaGFyZWQgLmFwcC1tb2RhbCkuICovXG4uYWRkLWNhdGVnb3J5LW1vZGFsIHtcbiAgLS1icy1tb2RhbC13aWR0aDogNTIwcHg7XG59XG5cbi8qIEVkaXQgbW9kZSBpcyB3aWRlciBmb3IgaXRzIHRocmVlLWJ1dHRvbiBmb290ZXIsIGxpa2UgRWRpdCB0cmFuc2FjdGlvbiAoYWRkIG1vZGUgc3RheXMgNTIwcHgpLiAqL1xuLmFkZC1jYXRlZ29yeS1tb2RhbC5pcy1lZGl0IHtcbiAgLS1icy1tb2RhbC13aWR0aDogNTgwcHg7XG59XG5cbi8qIERlbGV0ZSBjYXRlZ29yeSBkaWFsb2c6IHNhbWUgNTIwcHggYXMgRGVsZXRlIHRyYW5zYWN0aW9uLiAqL1xuLmRlbGV0ZS1jYXRlZ29yeS1tb2RhbCB7XG4gIC0tYnMtbW9kYWwtd2lkdGg6IDUyMHB4O1xufVxuXG4vKiBMaW1pdCBoaW50OiBtdXRlZCwgb3IgYW1iZXIgKC0tc3RhdHVzLXdhcm4tZmcpIHdoZW4gYnVkZ2V0cyBleGNlZWQgaW5jb21lLiBOZXZlciBibG9ja3Mgc2F2aW5nLiAqL1xuLmxpbWl0LWhpbnQuaXMtd2FybiB7XG4gIGNvbG9yOiB2YXIoLS1zdGF0dXMtd2Fybi1mZyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi8qIENvbG91ciBzd2F0Y2hlcyAobmF0aXZlIHJhZGlvcyk7IHNlbGVjdGVkID0gcmluZyB3aXRoIGEgc3VyZmFjZS1jb2xvdXJlZCBnYXAuICovXG4uY29sb3Itc3dhdGNoIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1jaGVjazpjaGVja2VkICsgLmNvbG9yLXN3YXRjaCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS1hcHAtc3VyZmFjZSksIDAgMCAwIDRweCB2YXIoLS1icy1ib2R5LWNvbG9yKTtcbn1cblxuLyogS2V5Ym9hcmQgZm9jdXM6IHRoZSBhcHAncyBmb2N1cyByaW5nLCBkcmF3biBvdXRzaWRlIHRoZSBzZWxlY3Rpb24gcmluZyAod2hpY2ggcmVhY2hlcyA0cHggb3V0KS4gKi9cbi5idG4tY2hlY2s6Zm9jdXMtdmlzaWJsZSArIC5jb2xvci1zd2F0Y2gge1xuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tZm9jdXMtcmluZyk7XG4gIG91dGxpbmUtb2Zmc2V0OiA2cHg7XG59XG5cbi8qIFByZXZpZXcgb2YgdGhlIG5ldyByb3c6IGRhc2hlZCBib3gsIGVtcHR5IDZweCBiYXIgbGlrZSB0aGUgT3ZlcnZpZXcgYnVkZ2V0IGNhcmQuICovXG4uY2F0ZWdvcnktcHJldmlldyB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyOiB2YXIoLS1icy1ib3JkZXItd2lkdGgpIGRhc2hlZCB2YXIoLS1icy1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1icy1ib3JkZXItcmFkaXVzLWxnKTtcbn1cblxuLnByZXZpZXctYmFyIHtcbiAgaGVpZ2h0OiA2cHg7XG59XG5cbi8qIENhdGVnb3J5IGNhcmRzIChtZCspIGFuZCB0aGUgc2luZ2xlLWNhcmQgbGlzdCAoYmVsb3cgbWQpLiAqL1xuLmJ1ZGdldC1hbW91bnQge1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4uYnVkZ2V0LWJhciB7XG4gIGhlaWdodDogNnB4O1xufVxuXG4uY2F0ZWdvcnktbGlzdC1tb2JpbGUgbGkge1xuICBwYWRkaW5nOiAwLjc1cmVtIDA7XG59XG5cbi5jYXRlZ29yeS1saXN0LW1vYmlsZSBsaTpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uY2F0ZWdvcnktbGlzdC1tb2JpbGUgbGk6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uY2F0ZWdvcnktbGlzdC1tb2JpbGUgbGkgKyBsaSB7XG4gIGJvcmRlci10b3A6IHZhcigtLWJzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtYm9yZGVyLWNvbG9yKTtcbn1cblxuLypcbiAqIE5ldyBtb250aDogbGltaXRzIGNhcmQgKHR3byB0aGlyZHMgd2lkZSBmcm9tIGxnIHVwKSwgdGhlIGNsZWFuIHRhYmxlIGxvb2sgb2YgVHJhbnNhY3Rpb25zLlxuICogTGluZXMgKC0taGFpcmxpbmUpIHVuZGVyIHRoZSBoZWFkZXIgYW5kIHVuZGVyIGV2ZXJ5IHJvdywgaW5zZXQ6IHRoZSBjYXJkIGtlZXBzIDFyZW0gc2lkZSBwYWRkaW5nXG4gKiAoYXBwLWNhcmQncyB0b3AvYm90dG9tIHBhZGRpbmcgaXMgcmVtb3ZlZCB3aXRoIHB5LTApIHNvIHRoZXkgbmV2ZXIgdG91Y2ggdGhlIGNhcmQgZWRnZXMuXG4gKiBUZXh0IHNpdHMgd2hlcmUgaXQgZGlkIGJlZm9yZTogbmFtZXMvbm90ZXMgMS4yNXJlbSBmcm9tIHRoZSBjYXJkIGVkZ2UsIHBlbmNpbHMgMXJlbS5cbiAqL1xuLmxpbWl0cy1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuXG4ubGltaXRzLXRhYmxlIHtcbiAgLS1icy10YWJsZS1iZzogdHJhbnNwYXJlbnQ7XG4gIC0tYnMtdGFibGUtY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IpO1xuICAtLWJzLXRhYmxlLWJvcmRlci1jb2xvcjogdmFyKC0taGFpcmxpbmUpO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG4ubGltaXRzLXRhYmxlIHRoLFxuLmxpbWl0cy10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59XG5cbi5saW1pdHMtdGFibGUgdGg6Zmlyc3QtY2hpbGQsXG4ubGltaXRzLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xufVxuXG4ubGltaXRzLXRhYmxlIHRoOmxhc3QtY2hpbGQsXG4ubGltaXRzLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubGltaXRzLXRhYmxlIHRoIHtcbiAgY29sb3I6IHZhcigtLWJzLXNlY29uZGFyeS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubGltaXRzLXRhYmxlIC5jb2wtbGltaXQge1xuICB3aWR0aDogOC41cmVtO1xufVxuXG4ubGltaXRzLXRhYmxlIC5jb2wtYWN0aW9uIHtcbiAgd2lkdGg6IDMuMjVyZW07XG59XG5cbi8qIFBob25lczogbm8gY29sdW1uIGhlYWRpbmdzICh0aGUgbGlzdCBzdGFydHMgd2l0aCB0aGUgZmlyc3QgY2F0ZWdvcnkpLCBhbmQgYSBuYXJyb3dlciBsaW1pdCBjb2x1bW5cbiAgIHNvIG5vcm1hbCBjYXRlZ29yeSBuYW1lcyBmaXQgKGxvbmcgb25lcyB0cnVuY2F0ZSkuIEJvb3RzdHJhcCBoYXMgbm8gdGFibGUtaGVhZGVyLWdyb3VwIGRpc3BsYXkgdXRpbGl0eS4gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAubGltaXRzLWhlYWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubGltaXRzLXRhYmxlIC5jb2wtbGltaXQge1xuICAgIHdpZHRoOiA2LjVyZW07XG4gIH1cbn1cblxuLmxpbWl0LWFtb3VudCB7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8qIE5vdGUgdW5kZXIgdGhlIGxpc3Q7IHRoZSBsYXN0IHJvdydzIGxpbmUgaXMgaXRzIGRpdmlkZXIuICovXG4ubGltaXRzLWZvb3RlciB7XG4gIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDAuMjVyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/budgets/budgets.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/budgets/budgets.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"view$ | async as view\">\n  <!-- Stacks below md like Overview: title row, month selector, then a full-width button (current month).\n       Past months: no add button; \"View only\" sits left of the selector (md+) or on its own line below it (below md). -->\n  <header class=\"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3\">\n    <div class=\"min-w-0\">\n      <h1 class=\"h3 mb-1\">Budgets</h1>\n      <p class=\"text-body-secondary small mb-0\">\n        <ng-container *ngIf=\"view.isNewMonth\"><ng-container *ngIf=\"view.limits.length; else noCategoriesYet\">{{ view.totalBudget | money }} for {{ view.monthName }}<span class=\"meta-dot\" aria-hidden=\"true\"></span><span class=\"text-nowrap\">carried over from {{ view.previousMonthName }}</span></ng-container><ng-template #noCategoriesYet>No categories yet for {{ view.monthName }}</ng-template></ng-container>\n        <ng-container *ngIf=\"!view.isNewMonth && (view.canAddCategory || view.hasTransactions)\">{{ view.totalBudget | money }} budgeted for {{ view.canAddCategory ? view.monthName : view.monthYear }}<ng-container *ngIf=\"view.incomePercent !== null\"><span class=\"meta-dot\" aria-hidden=\"true\"></span><span class=\"text-nowrap\">{{ view.incomePercent }}% of your income</span></ng-container></ng-container>\n        <ng-container *ngIf=\"!view.canAddCategory && !view.hasTransactions\">Nothing spent in {{ view.monthYear }}<span class=\"meta-dot\" aria-hidden=\"true\"></span><span class=\"text-nowrap\">no income recorded</span></ng-container>\n      </p>\n    </div>\n\n    <div class=\"d-flex flex-column flex-md-row align-items-stretch align-items-md-center gap-2 gap-md-3\">\n      <app-view-only-badge class=\"order-1 order-md-0 align-self-start align-self-md-auto\" *ngIf=\"!view.canAddCategory\"></app-view-only-badge>\n      <app-month-selector></app-month-selector>\n\n      <button #addCategoryButton type=\"button\" class=\"btn btn-add btn-add-secondary\" *ngIf=\"view.canAddCategory\"\n              (click)=\"openAddCategory()\">\n        <i class=\"bi bi-plus-lg\" aria-hidden=\"true\"></i>\n        <span>Add category</span>\n      </button>\n    </div>\n  </header>\n\n  <!-- Months with transactions: Needs attention + category cards. Past months with none: the standard empty card. -->\n  <ng-container *ngIf=\"!view.isNewMonth; else newMonth\">\n    <ng-container *ngIf=\"view.canAddCategory || view.hasTransactions; else pastEmpty\">\n      <section class=\"app-card mt-4\" aria-labelledby=\"needs-attention-title\">\n        <h2 class=\"h5 mb-1\" id=\"needs-attention-title\">Needs attention</h2>\n\n        <ng-container *ngIf=\"view.attention.length; else allOnTrack\">\n          <p class=\"text-body-secondary small mb-0\" [ngPlural]=\"view.attention.length\">\n            <ng-template ngPluralCase=\"=1\">1 category is at or near its limit.</ng-template>\n            <ng-template ngPluralCase=\"other\">{{ view.attention.length }} categories are at or near their limit.</ng-template>\n          </p>\n\n          <ul class=\"attention-list list-unstyled mb-0 mt-3\">\n            <li class=\"d-flex flex-column flex-md-row align-items-md-center gap-2 gap-md-3\"\n                *ngFor=\"let budget of view.attention; trackBy: trackByName\">\n              <!-- Dot, name and badge on one line (badge pushed right). -->\n              <div class=\"d-flex align-items-center gap-2 flex-grow-1 min-w-0\">\n                <span class=\"category-dot\" [style.background-color]=\"budget.color\" aria-hidden=\"true\"></span>\n                <span class=\"fw-semibold text-truncate\">{{ budget.name }}</span>\n                <span class=\"status-badge ms-auto\" [ngClass]=\"'status-' + budget.status\" [ngSwitch]=\"budget.status\">\n                  <ng-container *ngSwitchCase=\"'close'\">Close to limit</ng-container>\n                  <ng-container *ngSwitchCase=\"'at-limit'\">At limit</ng-container>\n                  <ng-container *ngSwitchCase=\"'over'\">Over by {{ budget.overBy | money }}</ng-container>\n                </span>\n              </div>\n              <a class=\"btn btn-sm view-txn-btn\" routerLink=\"/transactions\" [queryParams]=\"{ category: budget.name }\"\n                 [attr.aria-label]=\"'View ' + budget.name + ' transactions'\">\n                <i class=\"bi bi-list-ul me-1\" aria-hidden=\"true\"></i>View transactions\n              </a>\n            </li>\n          </ul>\n        </ng-container>\n\n        <ng-template #allOnTrack>\n          <p class=\"text-body-secondary mb-0 mt-3\">All categories are on track.</p>\n        </ng-template>\n      </section>\n\n      <!-- Category cards: one per expense category, in category order. -->\n      <section class=\"mt-4\" aria-labelledby=\"categories-title\">\n        <!-- tabindex -1: focus target after a delete when \"+ Add category\" is hidden (past months). -->\n        <h2 class=\"visually-hidden\" id=\"categories-title\" #categoriesTitle tabindex=\"-1\">Categories</h2>\n\n        <!-- md and up: grid of cards (2 per row, 3 from xl) -->\n        <div class=\"row g-3 d-none d-md-flex\">\n          <div class=\"col-md-6 col-xl-4\" *ngFor=\"let budget of view.budgets; trackBy: trackByName\">\n            <div class=\"app-card h-100 d-flex flex-column gap-3\">\n              <div class=\"d-flex align-items-center gap-2 min-w-0\">\n                <span class=\"category-dot\" [style.background-color]=\"budget.color\" aria-hidden=\"true\"></span>\n                <span class=\"fw-bold text-truncate\">{{ budget.name }}</span>\n                <span class=\"status-badge ms-auto\" [ngClass]=\"'status-' + budget.status\" [ngSwitch]=\"budget.status\">\n                  <ng-container *ngSwitchCase=\"'on-track'\">On track</ng-container>\n                  <ng-container *ngSwitchCase=\"'close'\">Close to limit</ng-container>\n                  <ng-container *ngSwitchCase=\"'at-limit'\">At limit</ng-container>\n                  <ng-container *ngSwitchCase=\"'over'\">Over by {{ budget.overBy | money }}</ng-container>\n                </span>\n              </div>\n\n              <div class=\"d-flex flex-wrap align-items-baseline column-gap-2\">\n                <span class=\"budget-amount fs-4 fw-bold\">{{ budget.spent | money }}</span>\n                <span class=\"text-body-secondary small\">spent of {{ budget.limit | money }}</span>\n              </div>\n\n              <div class=\"progress budget-bar\" role=\"progressbar\"\n                   [attr.aria-label]=\"budget.name + ': ' + budget.percentUsed + '% of budget used'\"\n                   [attr.aria-valuenow]=\"budget.barPercent\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                <div class=\"progress-bar\" [ngClass]=\"'bar-' + budget.status\" [style.width.%]=\"budget.barPercent\"></div>\n              </div>\n\n              <div class=\"d-flex align-items-center gap-2 mt-auto\">\n                <span class=\"text-body-secondary small me-auto\">\n                  <ng-container *ngIf=\"budget.status === 'over'\">{{ budget.overBy | money }} over</ng-container>\n                  <ng-container *ngIf=\"budget.status !== 'over'\">{{ leftAmount(budget) | money }} left</ng-container>\n                </span>\n                <a class=\"icon-btn\" routerLink=\"/transactions\" [queryParams]=\"{ category: budget.name }\"\n                   [attr.aria-label]=\"'View ' + budget.name + ' transactions'\">\n                  <i class=\"bi bi-list-ul\" aria-hidden=\"true\"></i>\n                </a>\n                <!-- Past months are read-only: no edit pencil. -->\n                <button type=\"button\" class=\"icon-btn\" *ngIf=\"view.canAddCategory\" [attr.data-category]=\"budget.name\"\n                        [attr.aria-label]=\"'Edit ' + budget.name + ' budget'\"\n                        (click)=\"editCategory(budget.name)\">\n                  <i class=\"bi bi-pencil\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Below md: all categories in one card -->\n        <div class=\"app-card d-md-none\">\n          <ul class=\"category-list-mobile list-unstyled mb-0\">\n            <li *ngFor=\"let budget of view.budgets; trackBy: trackByName\">\n              <div class=\"d-flex align-items-center gap-2 min-w-0\">\n                <span class=\"category-dot\" [style.background-color]=\"budget.color\" aria-hidden=\"true\"></span>\n                <span class=\"fw-bold text-truncate\">{{ budget.name }}</span>\n                <span class=\"status-badge ms-auto\" [ngClass]=\"'status-' + budget.status\" [ngSwitch]=\"budget.status\">\n                  <ng-container *ngSwitchCase=\"'on-track'\">On track</ng-container>\n                  <ng-container *ngSwitchCase=\"'close'\">Close to limit</ng-container>\n                  <ng-container *ngSwitchCase=\"'at-limit'\">At limit</ng-container>\n                  <ng-container *ngSwitchCase=\"'over'\">Over by {{ budget.overBy | money }}</ng-container>\n                </span>\n              </div>\n\n              <div class=\"progress budget-bar mt-2\" role=\"progressbar\"\n                   [attr.aria-label]=\"budget.name + ': ' + budget.percentUsed + '% of budget used'\"\n                   [attr.aria-valuenow]=\"budget.barPercent\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                <div class=\"progress-bar\" [ngClass]=\"'bar-' + budget.status\" [style.width.%]=\"budget.barPercent\"></div>\n              </div>\n\n              <div class=\"d-flex align-items-center gap-1 mt-1\">\n                <span class=\"text-body-secondary small flex-grow-1 min-w-0\">\n                  {{ budget.spent | money }} of {{ budget.limit | money }}<span class=\"text-nowrap\"><span class=\"meta-dot\" aria-hidden=\"true\"></span><ng-container *ngIf=\"budget.status === 'over'\">{{ budget.overBy | money }} over</ng-container><ng-container *ngIf=\"budget.status !== 'over'\">{{ leftAmount(budget) | money }} left</ng-container></span>\n                </span>\n                <a class=\"icon-btn\" routerLink=\"/transactions\" [queryParams]=\"{ category: budget.name }\"\n                   [attr.aria-label]=\"'View ' + budget.name + ' transactions'\">\n                  <i class=\"bi bi-list-ul\" aria-hidden=\"true\"></i>\n                </a>\n                <!-- Past months are read-only: no edit pencil. -->\n                <button type=\"button\" class=\"icon-btn\" *ngIf=\"view.canAddCategory\" [attr.data-category]=\"budget.name\"\n                        [attr.aria-label]=\"'Edit ' + budget.name + ' budget'\"\n                        (click)=\"editCategory(budget.name)\">\n                  <i class=\"bi bi-pencil\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </section>\n    </ng-container>\n  </ng-container>\n\n  <!-- Past month with no transactions (view only): same standard card as the Overview / Transactions past cards. -->\n  <ng-template #pastEmpty>\n    <app-empty-state [heading]=\"'No budget activity in ' + view.monthYear\"\n                     text=\"No spending was recorded this month, so there's nothing to compare against your limits. Use the arrows above to view another month.\">\n      <svg emptyIcon class=\"text-body-secondary\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M3 10h18M8 3v4M16 3v4\"/></svg>\n    </app-empty-state>\n  </ng-template>\n\n  <!-- New month (current month, no transactions yet): the limits carried over, highest first, in one card. -->\n  <ng-template #newMonth>\n    <div class=\"row mt-4\">\n      <div class=\"col-12 col-lg-8\">\n        <section class=\"app-card limits-card py-0\" aria-labelledby=\"limits-title\">\n          <h2 class=\"visually-hidden\" id=\"limits-title\">Monthly limits</h2>\n          <table class=\"table align-middle mb-0 limits-table\">\n            <colgroup>\n              <col>\n              <col class=\"col-limit\">\n              <col class=\"col-action\">\n            </colgroup>\n            <!-- Column headings from md up; phones start straight with the first category. -->\n            <thead class=\"limits-head\">\n              <tr>\n                <th scope=\"col\">Category</th>\n                <th scope=\"col\" class=\"text-end\">Monthly limit</th>\n                <th scope=\"col\"><span class=\"visually-hidden\">Edit</span></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let category of view.limits; trackBy: trackByCategoryName\">\n                <td>\n                  <div class=\"d-flex align-items-center gap-2 min-w-0\">\n                    <span class=\"category-dot\" [style.background-color]=\"category.color\" aria-hidden=\"true\"></span>\n                    <span class=\"text-truncate\">{{ category.name }}</span>\n                  </div>\n                </td>\n                <td class=\"text-end limit-amount\">{{ category.monthlyLimit | money }}</td>\n                <td class=\"text-end\">\n                  <button type=\"button\" class=\"icon-btn\" [attr.data-category]=\"category.name\"\n                          [attr.aria-label]=\"'Edit ' + category.name + ' budget'\"\n                          (click)=\"editCategory(category.name)\">\n                    <i class=\"bi bi-pencil\" aria-hidden=\"true\"></i>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <p class=\"limits-footer text-body-secondary small mb-0\">Spending progress appears here once you add transactions.</p>\n        </section>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n\n<!-- \"Add category\" modal: same shell, header, fields and footer as Add transaction. -->\n<div #categoryModalEl class=\"modal fade app-modal add-category-modal\" [class.is-edit]=\"categoryMode === 'edit'\" tabindex=\"-1\" [attr.aria-labelledby]=\"ids.title\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <form class=\"modal-content p-4 border\" [formGroup]=\"categoryForm\" (ngSubmit)=\"saveCategory()\" novalidate>\n      <div class=\"d-flex justify-content-between align-items-center\">\n        <h2 class=\"h4 fw-bold mb-0\" [id]=\"ids.title\">{{ categoryMode === 'edit' ? 'Edit category' : 'Add category' }}</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n\n      <!-- Dividers separate header, content and footer (shared .modal-divider, same spacing as the delete dialogs). -->\n      <div class=\"modal-divider my-4\" aria-hidden=\"true\"></div>\n\n      <ng-container>\n        <!-- Category name (duplicate error shows live) -->\n        <div class=\"mb-3\">\n          <label class=\"form-label fw-semibold\" [for]=\"ids.name\">Category name</label>\n          <input #nameInput type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Gym\" autocomplete=\"off\"\n                 [attr.maxlength]=\"nameMaxLength\" formControlName=\"name\" [id]=\"ids.name\"\n                 [class.is-invalid]=\"nameErrorText\" [attr.aria-invalid]=\"!!nameErrorText\"\n                 [attr.aria-describedby]=\"nameErrorText ? ids.nameError : null\">\n          <div class=\"invalid-feedback fw-semibold\" [id]=\"ids.nameError\">{{ nameErrorText }}</div>\n        </div>\n\n        <!-- Monthly limit -->\n        <div class=\"mb-3\">\n          <label class=\"form-label fw-semibold\" [for]=\"ids.limit\">Monthly limit</label>\n          <div class=\"input-group input-group-lg has-validation\">\n            <span class=\"input-group-text text-body-secondary\">{{ currencySymbol }}</span>\n            <input type=\"number\" class=\"form-control fs-3 fw-bold\" [attr.placeholder]=\"limitPlaceholder\"\n                   inputmode=\"decimal\" [attr.step]=\"limitStep\" min=\"0\" formControlName=\"limit\" [id]=\"ids.limit\"\n                   [class.is-invalid]=\"limitInvalid\" [attr.aria-invalid]=\"limitInvalid\"\n                   [attr.aria-describedby]=\"limitDescribedBy\">\n            <div class=\"invalid-feedback fw-semibold\" [id]=\"ids.limitError\">{{ limitErrorText }}</div>\n          </div>\n          <div class=\"form-text limit-hint\" [id]=\"ids.limitHint\" aria-live=\"polite\" [class.is-warn]=\"limitHint.warn\"\n               [ngSwitch]=\"limitHint.kind\">\n            <ng-container *ngSwitchCase=\"'unbudgeted'\">{{ limitHint.amount | money }} of your income isn't budgeted yet.</ng-container>\n            <ng-container *ngSwitchCase=\"'remaining'\">{{ limitHint.amount | money }} of your income will still be unbudgeted after this.</ng-container>\n            <ng-container *ngSwitchCase=\"'over'\">This puts your budgets {{ limitHint.amount | money }} above your monthly income.</ng-container>\n            <ng-container *ngSwitchCase=\"'already-over'\">Your budgets are already {{ limitHint.amount | money }} above your monthly income.</ng-container>\n          </div>\n        </div>\n\n        <!-- Color -->\n        <div class=\"mb-3\">\n          <div class=\"form-label fw-semibold\" [id]=\"ids.colorLabel\">Color</div>\n          <div class=\"d-flex flex-wrap gap-2\" role=\"radiogroup\" [attr.aria-labelledby]=\"ids.colorLabel\">\n            <ng-container *ngFor=\"let color of swatches; let i = index\">\n              <input type=\"radio\" class=\"btn-check\" name=\"color\" formControlName=\"color\" [value]=\"color.value\" [id]=\"ids.color + i\">\n              <label class=\"color-swatch\" [for]=\"ids.color + i\" [style.background-color]=\"color.value\">\n                <span class=\"visually-hidden\">{{ color.name }}</span>\n              </label>\n            </ng-container>\n          </div>\n        </div>\n\n        <!-- Preview: how the category will look in the Budgets list -->\n        <div>\n          <div class=\"small text-body-secondary mb-1\">Preview</div>\n          <div class=\"category-preview\">\n            <div class=\"d-flex align-items-center gap-2 min-w-0\">\n              <span class=\"category-dot\" [style.background-color]=\"selectedColor\" aria-hidden=\"true\"></span>\n              <span class=\"fw-semibold text-truncate\" [class.text-body-secondary]=\"!trimmedName\">{{ trimmedName || 'New category' }}</span>\n              <span class=\"status-badge ms-auto\" [ngClass]=\"'status-' + preview.status\" [ngSwitch]=\"preview.status\">\n                <ng-container *ngSwitchCase=\"'on-track'\">On track</ng-container>\n                <ng-container *ngSwitchCase=\"'close'\">Close to limit</ng-container>\n                <ng-container *ngSwitchCase=\"'at-limit'\">At limit</ng-container>\n                <ng-container *ngSwitchCase=\"'over'\">Over by {{ preview.overBy | money }}</ng-container>\n              </span>\n            </div>\n            <div class=\"text-body-secondary small mt-1\">{{ preview.spent | money }} spent of {{ preview.limit | money }}</div>\n            <div class=\"progress preview-bar mt-2\" aria-hidden=\"true\">\n              <div class=\"progress-bar\" [ngClass]=\"'bar-' + preview.status\" [style.width.%]=\"preview.barPercent\"></div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"modal-divider mt-4\" aria-hidden=\"true\"></div>\n\n        <!-- Add mode footer: stacked full width below sm (Add category, Cancel); from sm up right-aligned Cancel + Add category. -->\n        <div class=\"d-flex flex-column flex-sm-row justify-content-sm-end gap-2 mt-4\" *ngIf=\"categoryMode === 'add'\">\n          <button type=\"submit\" class=\"btn btn-primary btn-lg order-1 order-sm-2\">Add category</button>\n          <button type=\"button\" class=\"btn btn-outline-secondary btn-lg order-2 order-sm-1\" data-bs-dismiss=\"modal\">Cancel</button>\n        </div>\n\n        <!-- Edit mode footer, same as Edit transaction: DOM order Save, Cancel, Delete (phone stack order).\n             From sm up the order utilities place Delete left and Cancel + Save right. -->\n        <div class=\"d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 mt-4\"\n             *ngIf=\"categoryMode === 'edit'\">\n          <button type=\"submit\" class=\"btn btn-primary btn-lg order-1 order-sm-3\">Save changes</button>\n          <button type=\"button\" class=\"btn btn-outline-secondary btn-lg order-2 order-sm-2 ms-sm-auto\"\n                  data-bs-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-link text-danger text-decoration-none fw-semibold delete-link order-3 order-sm-1\"\n                  (click)=\"requestDeleteCategory()\">\n            <i class=\"bi bi-trash3 me-1\" aria-hidden=\"true\"></i>Delete category\n          </button>\n        </div>\n      </ng-container>\n    </form>\n  </div>\n</div>\n\n<!-- \"Delete this category?\": same shell, header, dividers and footer as the delete transaction dialog. -->\n<div #deleteCategoryModalEl class=\"modal fade app-modal delete-category-modal\" tabindex=\"-1\"\n     [attr.aria-labelledby]=\"ids.deleteTitle\" [attr.aria-describedby]=\"ids.deleteDescription\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content p-4 border\">\n      <!-- × counts as Cancel. -->\n      <div class=\"d-flex justify-content-between align-items-center\">\n        <h2 class=\"h4 fw-bold mb-0\" [id]=\"ids.deleteTitle\">Delete this category?</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n\n      <div class=\"modal-divider mt-4\" aria-hidden=\"true\"></div>\n\n      <div class=\"py-4\" [id]=\"ids.deleteDescription\">\n        <p class=\"d-flex align-items-center gap-2 min-w-0 mb-0\" *ngIf=\"deletingCategory\">\n          <span class=\"category-dot\" [style.background-color]=\"deletingCategory.color\" aria-hidden=\"true\"></span>\n          <span class=\"text-break\">{{ deletingCategory.name }} · {{ deletingCategory.monthlyLimit | money }} a month</span>\n        </p>\n      </div>\n\n      <div class=\"modal-divider\" aria-hidden=\"true\"></div>\n\n      <!-- Stacked below sm (Delete, Cancel); from sm up right-aligned Cancel + Delete. -->\n      <div class=\"d-flex flex-column flex-sm-row justify-content-sm-end gap-2 mt-4\">\n        <button type=\"button\" class=\"btn btn-lg btn-delete order-1 order-sm-2\" (click)=\"confirmDeleteCategory()\">Delete</button>\n        <button #deleteCancelButton type=\"button\" class=\"btn btn-outline-secondary btn-lg order-2 order-sm-1\" data-bs-dismiss=\"modal\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/budgets/budgets.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/budgets/budgets.component.ts ***!
  \****************************************************/
/*! exports provided: BudgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetsComponent", function() { return BudgetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/alert.service */ "./src/app/core/services/alert.service.ts");
/* harmony import */ var _core_services_currency_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/currency.service */ "./src/app/core/services/currency.service.ts");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_services_today_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/services/today.service */ "./src/app/core/services/today.service.ts");
/* harmony import */ var _core_utils_budget_hint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/utils/budget-hint */ "./src/app/core/utils/budget-hint.ts");
/* harmony import */ var _core_utils_category_budgets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/utils/category-budgets */ "./src/app/core/utils/category-budgets.ts");
/* harmony import */ var _core_utils_date_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/utils/date-format */ "./src/app/core/utils/date-format.ts");
/* harmony import */ var _core_utils_money__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/utils/money */ "./src/app/core/utils/money.ts");
/* harmony import */ var _core_utils_validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/utils/validators */ "./src/app/core/utils/validators.ts");














/** Colours offered for a new category; the first (Teal) is the default. */
var CATEGORY_COLORS = [
    { name: 'Teal', value: '#2a9d8f' },
    { name: 'Blue', value: '#3e93db' },
    { name: 'Indigo', value: '#5b6cf0' },
    { name: 'Purple', value: '#8a6fdf' },
    { name: 'Pink', value: '#c2557a' },
    { name: 'Orange', value: '#e0812f' },
    { name: 'Gold', value: '#c9a227' },
    { name: 'Slate', value: '#6b7280' }
];
/** Name must have text after trimming and be at most 24 characters once trimmed. */
function categoryName(control) {
    var name = (control.value || '').trim();
    if (!name) {
        return { required: true };
    }
    return name.length > _core_services_data_service__WEBPACK_IMPORTED_MODULE_7__["CATEGORY_NAME_MAX_LENGTH"] ? { maxlength: true } : null;
}
var nextId = 0;
var BudgetsComponent = /** @class */ (function () {
    function BudgetsComponent(dataService, fb, host, alertService, today, currencyService) {
        var _this = this;
        this.dataService = dataService;
        this.fb = fb;
        this.host = host;
        this.alertService = alertService;
        this.today = today;
        this.currencyService = currencyService;
        this.colors = CATEGORY_COLORS;
        this.nameMaxLength = _core_services_data_service__WEBPACK_IMPORTED_MODULE_7__["CATEGORY_NAME_MAX_LENGTH"];
        /** Unique per instance so ids never clash. */
        this.uid = 'add-cat-' + (++nextId);
        this.ids = {
            title: this.uid + '-title',
            name: this.uid + '-name',
            nameError: this.uid + '-name-error',
            limit: this.uid + '-limit',
            limitError: this.uid + '-limit-error',
            limitHint: this.uid + '-limit-hint',
            colorLabel: this.uid + '-color-label',
            color: this.uid + '-color-',
            deleteTitle: this.uid + '-delete-title',
            deleteDescription: this.uid + '-delete-description'
        };
        this.submitted = false;
        this.categoryMode = 'add';
        /** Original (stored) name of the category being edited. */
        this.editingName = null;
        /** Stored colour when it is not one of the 8 swatches: shown as an extra, selected swatch for this edit. */
        this.extraSwatch = null;
        /** Selected month's income and the current total of all limits, for the limit hint. */
        this.hintIncome = 0;
        /** Total of all limits; in edit mode it EXCLUDES the edited category's stored limit. */
        this.hintCurrentTotal = 0;
        /** Edit mode: the category's real spending this month (paise) and its stored limit. */
        this.editingSpentPaise = 0;
        this.editingStoredLimit = 0;
        /** Edit mode: the value the limit field was prefilled with (in formCurrency), for round-trip-safe saves. */
        this.prefilledLimit = null;
        /** Name after the last successful edit, to find its card's pencil again if it re-rendered. */
        this.lastSavedName = null;
        /** Set after a successful add: the form is reset once the modal has faded out. */
        this.resetWhenHidden = false;
        this.isShown = false;
        this.returnFocusTo = null;
        /** A valid category save has started: repeat clicks/Enter are ignored until the modal opens again. */
        this.saving = false;
        /** Delete category confirmed: repeat clicks are ignored until the dialog opens again. */
        this.deleting = false;
        /** Category shown in the "Delete this category?" dialog. */
        this.deletingCategory = null;
        /** Set by "Delete category" in the edit modal; handled once that modal has fully closed (see onHidden). */
        this.pendingDeleteName = null;
        this.isDeleteShown = false;
        this.categoryWasDeleted = false;
        this.deleteReturnFocusTo = null;
        this.onDeleteShown = function () {
            _this.isDeleteShown = true;
            // Safe default for a destructive confirm.
            if (_this.deleteCancelButton) {
                _this.deleteCancelButton.nativeElement.focus();
            }
        };
        this.onDeleteHidden = function () {
            _this.isDeleteShown = false;
            _this.deleting = false;
            var name = _this.deletingCategory ? _this.deletingCategory.name : null;
            var target = null;
            if (!_this.categoryWasDeleted) {
                // Cancel / × / Esc: back to the card's pencil.
                target = _this.deleteReturnFocusTo && document.body.contains(_this.deleteReturnFocusTo)
                    ? _this.deleteReturnFocusTo
                    : (name ? _this.findPencil(name) : null);
            }
            // After a delete the card is gone: "+ Add category", or the Categories heading while it is disabled.
            target = target || _this.addCategoryOrHeading();
            if (target) {
                target.focus();
            }
            _this.categoryWasDeleted = false;
            _this.deleteReturnFocusTo = null;
        };
        this.onShown = function () {
            _this.isShown = true;
            _this.focusName();
        };
        this.onHidden = function () {
            _this.isShown = false;
            _this.saving = false;
            if (_this.resetWhenHidden) {
                _this.resetWhenHidden = false;
                _this.resetCategoryForm();
            }
            // Opened programmatically, so Bootstrap doesn't restore focus itself. After a rename the card
            // (and its pencil) re-renders, so look the pencil up again by the new name.
            var target = _this.returnFocusTo && document.body.contains(_this.returnFocusTo)
                ? _this.returnFocusTo
                : null;
            if (!target && _this.lastSavedName) {
                target = _this.findPencil(_this.lastSavedName);
            }
            if (!target && _this.addCategoryButton) {
                target = _this.addCategoryButton.nativeElement;
            }
            if (target) {
                target.focus();
            }
            _this.lastSavedName = null;
            if (_this.pendingDeleteName) {
                var name_1 = _this.pendingDeleteName;
                _this.pendingDeleteName = null;
                _this.handleDeleteRequest(name_1);
            }
        };
        this.formCurrency = this.currencyService.currency;
        // Income, spending and categories can change (transactions edited, categories added).
        this.view$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.dataService.selectedMonth$, this.dataService.dataChanged$, this.currencyService.currency$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var selected = _a[0], currency = _a[2];
            var summary = _this.dataService.getMonthSummary(selected.year, selected.month);
            // Overspends that show as zero in the selected currency read 'At limit' (cards, list, Needs attention).
            var budgets = _this.dataService.getCategoryBudgets(selected.year, selected.month)
                .map(function (b) { return Object(_core_utils_category_budgets__WEBPACK_IMPORTED_MODULE_10__["adjustStatusForCurrency"])(b, currency); });
            var isCurrent = _this.today.isCurrentMonth(selected);
            var hasTransactions = _this.dataService.getTransactionsForMonth(selected.year, selected.month).length > 0;
            return {
                totalBudget: summary.totalBudget,
                monthName: new Date(selected.year, selected.month - 1, 1).toLocaleDateString('en-US', { month: 'long' }),
                incomePercent: summary.income > 0 ? Math.round(summary.totalBudget / summary.income * 100) : null,
                attention: Object(_core_utils_category_budgets__WEBPACK_IMPORTED_MODULE_10__["needsAttention"])(budgets),
                budgets: budgets,
                canAddCategory: isCurrent,
                monthYear: Object(_core_utils_date_format__WEBPACK_IMPORTED_MODULE_11__["formatMonthYear"])(selected.year, selected.month),
                hasTransactions: hasTransactions,
                isNewMonth: isCurrent && !hasTransactions,
                limits: _this.sortByLimit(_this.dataService.getCategories()),
                // Month 0 rolls back to December of the previous year.
                previousMonthName: new Date(selected.year, selected.month - 2, 1).toLocaleDateString('en-US', { month: 'long' })
            };
        }));
        this.categoryForm = this.fb.group({
            name: ['', categoryName],
            limit: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_core_utils_validators__WEBPACK_IMPORTED_MODULE_13__["positiveAmountIn"])(function () { return _this.formCurrency; }), Object(_core_utils_validators__WEBPACK_IMPORTED_MODULE_13__["amountDecimalsIn"])(function () { return _this.formCurrency; })]],
            color: [CATEGORY_COLORS[0].value]
        });
    }
    Object.defineProperty(BudgetsComponent.prototype, "currencySymbol", {
        /** Prefix of the limit field, e.g. '$': the limit is typed in this currency and saved in rupees. */
        get: function () {
            return Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_12__["getCurrency"])(this.formCurrency).symbol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BudgetsComponent.prototype, "limitStep", {
        /** 1 for whole-unit currencies (JPY), else 0.01. */
        get: function () {
            return Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_12__["getCurrency"])(this.formCurrency).decimals === 0 && this.formCurrency !== 'INR' ? '1' : '0.01';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BudgetsComponent.prototype, "limitPlaceholder", {
        /** Example limit in the form's currency, e.g. '2,000' or '25.00'. */
        get: function () {
            return Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_12__["getCurrency"])(this.formCurrency).limitPlaceholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BudgetsComponent.prototype, "trimmedName", {
        /** Trimmed name as typed. */
        get: function () {
            return (this.categoryForm.get('name').value || '').trim();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BudgetsComponent.prototype, "duplicateOf", {
        /** Stored name of an existing category with the same name (case-insensitive), shown live. */
        get: function () {
            // In edit mode the category's own current name (any case) is not a clash.
            return this.dataService.findCategoryName(this.trimmedName, this.categoryMode === 'edit' ? this.editingName : undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BudgetsComponent.prototype, "nameErrorText", {
        get: function () {
            var duplicate = this.duplicateOf;
            if (duplicate) {
                return 'You already have a category called ' + duplicate + '.';
            }
            var control = this.categoryForm.get('name');
            if (!this.submitted || control.valid) {
                return null;
            }
            return control.hasError('maxlength')
                ? 'Keep the name to ' + _core_services_data_service__WEBPACK_IMPORTED_MODULE_7__["CATEGORY_NAME_MAX_LENGTH"] + ' characters or fewer.'
                : 'Enter a category name.';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BudgetsComponent.prototype, "limitErrorText", {
        /** 'Enter a limit greater than 0.', or the decimals rule ('Use at most 2 decimal places.' / whole yen). */
        get: function () {
            return Object(_core_utils_validators__WEBPACK_IMPORTED_MODULE_13__["amountErrorText"])(this.categoryForm.get('limit'), 'limit') || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BudgetsComponent.prototype, "limitInvalid", {
        get: function () {
            return this.submitted && this.categoryForm.get('limit').invalid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BudgetsComponent.prototype, "validLimit", {
        /**
         * The typed limit in rupees (converted from formCurrency, rounded to paise), or null while empty or invalid.
         * An untouched edit gives back the stored limit exactly. The hint and preview compare in rupees.
         */
        get: function () {
            var control = this.categoryForm.get('limit');
            return control.valid
                ? Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_12__["inputToInr"])(control.value, this.formCurrency, this.prefilledLimit, this.categoryMode === 'edit' ? this.editingStoredLimit : null)
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BudgetsComponent.prototype, "limitHint", {
        get: function () {
            // Edit mode with nothing valid typed: the stored limit still counts.
            var limit = this.validLimit !== null ? this.validLimit
                : (this.categoryMode === 'edit' ? this.editingStoredLimit : null);
            return Object(_core_utils_budget_hint__WEBPACK_IMPORTED_MODULE_9__["budgetHint"])(this.hintIncome, this.hintCurrentTotal, limit);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BudgetsComponent.prototype, "preview", {
        /**
         * Live preview row: real spending in edit mode (0 when adding), the typed limit (or the stored
         * limit while the field is empty/invalid in edit mode, 0 in add mode), status via budgetStatus.
         */
        get: function () {
            var limit = this.validLimit !== null ? this.validLimit
                : (this.categoryMode === 'edit' ? this.editingStoredLimit : 0);
            var spentPaise = this.categoryMode === 'edit' ? this.editingSpentPaise : 0;
            return Object(_core_utils_category_budgets__WEBPACK_IMPORTED_MODULE_10__["adjustStatusForCurrency"])(Object(_core_utils_category_budgets__WEBPACK_IMPORTED_MODULE_10__["toCategoryBudget"])({ name: this.trimmedName, color: this.selectedColor, monthlyLimit: limit }, spentPaise), this.formCurrency);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BudgetsComponent.prototype, "swatches", {
        /** The 8 swatches, plus the stored colour when editing a category whose colour is not one of them. */
        get: function () {
            return this.extraSwatch ? CATEGORY_COLORS.concat([this.extraSwatch]) : CATEGORY_COLORS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BudgetsComponent.prototype, "limitDescribedBy", {
        /** Error (when shown) and hint (unless hidden) ids for the limit input, or null. */
        get: function () {
            var ids = [];
            if (this.limitInvalid) {
                ids.push(this.ids.limitError);
            }
            if (this.limitHint.kind !== 'hidden') {
                ids.push(this.ids.limitHint);
            }
            return ids.length ? ids.join(' ') : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BudgetsComponent.prototype, "selectedColor", {
        get: function () {
            return this.categoryForm.get('color').value;
        },
        enumerable: true,
        configurable: true
    });
    BudgetsComponent.prototype.ngAfterViewInit = function () {
        if (typeof bootstrap === 'undefined') {
            return;
        }
        var element = this.categoryModalEl.nativeElement;
        this.modal = new bootstrap.Modal(element);
        element.addEventListener('shown.bs.modal', this.onShown);
        element.addEventListener('hidden.bs.modal', this.onHidden);
        var deleteElement = this.deleteCategoryModalEl.nativeElement;
        this.deleteModal = new bootstrap.Modal(deleteElement);
        deleteElement.addEventListener('shown.bs.modal', this.onDeleteShown);
        deleteElement.addEventListener('hidden.bs.modal', this.onDeleteHidden);
    };
    BudgetsComponent.prototype.ngOnDestroy = function () {
        if (!this.modal) {
            return;
        }
        var element = this.categoryModalEl.nativeElement;
        element.removeEventListener('shown.bs.modal', this.onShown);
        element.removeEventListener('hidden.bs.modal', this.onHidden);
        this.modal.dispose();
        var deleteElement = this.deleteCategoryModalEl.nativeElement;
        deleteElement.removeEventListener('shown.bs.modal', this.onDeleteShown);
        deleteElement.removeEventListener('hidden.bs.modal', this.onDeleteHidden);
        this.deleteModal.dispose();
        if (this.isShown || this.isDeleteShown) {
            // Destroyed while open (e.g. browser back): undo what Bootstrap did to <body>.
            document.body.classList.remove('modal-open');
            document.body.style.removeProperty('overflow');
            document.body.style.removeProperty('padding-right');
        }
    };
    BudgetsComponent.prototype.trackByName = function (index, budget) {
        return budget.name;
    };
    BudgetsComponent.prototype.trackByCategoryName = function (index, category) {
        return category.name;
    };
    /** "… left": the displayed limit minus the displayed spending, so the card's numbers agree (0 when at or over). */
    BudgetsComponent.prototype.leftAmount = function (budget) {
        return Object(_core_utils_category_budgets__WEBPACK_IMPORTED_MODULE_10__["displayedLeft"])(budget, this.currencyService.currency);
    };
    /** Card pencil (desktop grid and mobile list): opens the modal in edit mode for this category. */
    BudgetsComponent.prototype.editCategory = function (name) {
        var category = this.dataService.getCategories().filter(function (c) { return c.name === name; })[0];
        if (!category) {
            return;
        }
        this.rememberFocus();
        this.categoryMode = 'edit';
        this.editingName = category.name;
        this.submitted = false;
        var color = category.color.toLowerCase();
        this.extraSwatch = CATEGORY_COLORS.some(function (c) { return c.value === color; }) ? null : { name: 'Current colour', value: color };
        this.formCurrency = this.currencyService.currency;
        this.prefilledLimit = Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_12__["inrToInputValue"])(category.monthlyLimit, this.formCurrency);
        this.categoryForm.reset({ name: category.name, limit: this.prefilledLimit, color: color });
        var selected = this.dataService.getSelectedMonth();
        var summary = this.dataService.getMonthSummary(selected.year, selected.month);
        var budget = this.dataService.getCategoryBudgets(selected.year, selected.month).filter(function (b) { return b.name === category.name; })[0];
        this.hintIncome = summary.income;
        this.hintCurrentTotal = Math.round((summary.totalBudget - category.monthlyLimit) * 100) / 100;
        this.editingStoredLimit = category.monthlyLimit;
        this.editingSpentPaise = budget ? Math.round(budget.spent * 100) : 0;
        this.show();
    };
    /** "+ Add category": opens the modal with a fresh form. */
    BudgetsComponent.prototype.openAddCategory = function () {
        this.rememberFocus();
        this.resetCategoryForm();
        this.show();
    };
    BudgetsComponent.prototype.closeAddCategory = function () {
        if (this.modal) {
            this.modal.hide();
        }
    };
    BudgetsComponent.prototype.saveCategory = function () {
        if (this.saving) {
            return;
        }
        this.submitted = true;
        if (this.categoryForm.invalid || this.duplicateOf) {
            return;
        }
        this.saving = true;
        var input = {
            name: this.trimmedName,
            monthlyLimit: this.validLimit,
            color: this.selectedColor
        };
        if (this.categoryMode === 'edit') {
            // Saved, or the category no longer exists (null): either way close; no success view.
            var updated = this.dataService.updateCategory(this.editingName, input);
            this.lastSavedName = updated ? updated.name : null;
            this.closeAddCategory();
            if (updated) {
                this.alertService.show('Category updated');
            }
            return;
        }
        var category = this.dataService.addCategory(input);
        if (!category) {
            return;
        }
        // Add mode: close straight away (form reset once hidden), then the shared alert.
        this.resetWhenHidden = true;
        this.closeAddCategory();
        this.alertService.show('Category added');
    };
    /** Edit mode "Delete category": closes the edit modal, then checks and confirms (see onHidden). */
    BudgetsComponent.prototype.requestDeleteCategory = function () {
        var name = this.editingName;
        if (!name) {
            return;
        }
        if (!this.modal) {
            this.handleDeleteRequest(name);
            return;
        }
        this.pendingDeleteName = name;
        this.closeAddCategory();
    };
    /** "Delete" in the confirm dialog. Refused (e.g. transactions were added meanwhile): just closes. */
    BudgetsComponent.prototype.confirmDeleteCategory = function () {
        if (!this.deletingCategory || this.deleting) {
            return;
        }
        this.deleting = true;
        this.categoryWasDeleted = this.dataService.deleteCategory(this.deletingCategory.name);
        if (this.deleteModal) {
            this.deleteModal.hide();
        }
        if (this.categoryWasDeleted) {
            this.alertService.show('Category deleted');
        }
    };
    /**
     * Categories used by any transaction (any month) can't be deleted: say so in the danger alert
     * (focus is already back on the card's pencil). Otherwise ask for confirmation.
     */
    BudgetsComponent.prototype.handleDeleteRequest = function (name) {
        var category = this.dataService.getCategories().filter(function (c) { return c.name === name; })[0];
        if (!category) {
            return;
        }
        if (this.dataService.categoryHasTransactions(name)) {
            this.alertService.show('This category has transactions, so it can\'t be deleted.', 'danger');
            return;
        }
        this.deletingCategory = category;
        this.categoryWasDeleted = false;
        this.deleting = false;
        var active = document.activeElement;
        this.deleteReturnFocusTo = active && active !== document.body ? active : null;
        if (this.deleteModal) {
            this.deleteModal.show();
        }
    };
    /** The visible pencil of a category's card (desktop grid or mobile list), or null. */
    BudgetsComponent.prototype.findPencil = function (name) {
        // Compared, not put in a selector: names may contain quotes or backslashes.
        var pencils = this.host.nativeElement.querySelectorAll('[data-category]');
        return Array.prototype.filter.call(pencils, function (el) {
            return el.getAttribute('data-category') === name && el.offsetParent !== null;
        })[0] || null;
    };
    /** "+ Add category", or the Categories heading when that button isn't shown (past months); null if neither is. */
    BudgetsComponent.prototype.addCategoryOrHeading = function () {
        if (this.addCategoryButton) {
            return this.addCategoryButton.nativeElement;
        }
        return this.categoriesTitle ? this.categoriesTitle.nativeElement : null;
    };
    /** Highest monthly limit first; equal limits keep the category order. */
    BudgetsComponent.prototype.sortByLimit = function (categories) {
        return categories
            .map(function (category, index) { return ({ category: category, index: index }); })
            .sort(function (a, b) { return b.category.monthlyLimit - a.category.monthlyLimit || a.index - b.index; })
            .map(function (entry) { return entry.category; });
    };
    BudgetsComponent.prototype.rememberFocus = function () {
        var active = document.activeElement;
        this.returnFocusTo = active && active !== document.body ? active : null;
    };
    BudgetsComponent.prototype.show = function () {
        this.saving = false;
        if (this.modal) {
            this.modal.show();
        }
    };
    /** Add mode with a fresh form. */
    BudgetsComponent.prototype.resetCategoryForm = function () {
        this.categoryMode = 'add';
        this.editingName = null;
        this.extraSwatch = null;
        this.editingSpentPaise = 0;
        this.editingStoredLimit = 0;
        this.prefilledLimit = null;
        this.formCurrency = this.currencyService.currency;
        this.submitted = false;
        this.categoryForm.reset({ name: '', limit: null, color: CATEGORY_COLORS[0].value });
        // Hint inputs: the selected month's income and the current total (it grows after each add).
        var selected = this.dataService.getSelectedMonth();
        var summary = this.dataService.getMonthSummary(selected.year, selected.month);
        this.hintIncome = summary.income;
        this.hintCurrentTotal = summary.totalBudget;
    };
    BudgetsComponent.prototype.focusName = function () {
        if (this.nameInput) {
            this.nameInput.nativeElement.focus();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('categoryModalEl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BudgetsComponent.prototype, "categoryModalEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nameInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BudgetsComponent.prototype, "nameInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addCategoryButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BudgetsComponent.prototype, "addCategoryButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('categoriesTitle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BudgetsComponent.prototype, "categoriesTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteCategoryModalEl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BudgetsComponent.prototype, "deleteCategoryModalEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteCancelButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BudgetsComponent.prototype, "deleteCancelButton", void 0);
    BudgetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-budgets',
            template: __webpack_require__(/*! ./budgets.component.html */ "./src/app/pages/budgets/budgets.component.html"),
            styles: [__webpack_require__(/*! ./budgets.component.css */ "./src/app/pages/budgets/budgets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _core_services_today_service__WEBPACK_IMPORTED_MODULE_8__["TodayService"], _core_services_currency_service__WEBPACK_IMPORTED_MODULE_6__["CurrencyService"]])
    ], BudgetsComponent);
    return BudgetsComponent;
}());



/***/ }),

/***/ "./src/app/pages/overview/overview.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/overview/overview.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Summary cards; .category-card and .recent-card share the same card surface. */\n.summary-card,\n.category-card,\n.recent-card {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 1.25rem;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius-lg);\n  background-color: var(--app-surface);\n}\n.summary-label,\n.summary-caption {\n  color: var(--bs-secondary-color);\n  font-size: 0.875rem;\n}\n/* Amounts never break (nor \"Over by\" from its amount): one line, a little smaller where the cards are narrow.\n   Below md the cards are half the screen; md has three cards across; from lg the 260px sidebar takes its share.\n   Each step stays at 1.75rem once there's room (e.g. from ~1280px with the sidebar). */\n.summary-value {\n  font-size: 1.75rem;\n  font-weight: 700;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n@media (max-width: 767.98px) {\n  .summary-value {\n    font-size: clamp(1.0625rem, 4.4vw + 0.2rem, 1.75rem);\n  }\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .summary-value {\n    font-size: clamp(1.25rem, 2.6vw, 1.75rem);\n  }\n}\n/* From lg each card's text box is about (100vw - 512px) / 3 wide; \"Over by ₹1,00,107\" needs ~8.9em. */\n@media (min-width: 992px) {\n  .summary-value {\n    font-size: clamp(1rem, calc(3.75vw - 19.5px), 1.75rem);\n  }\n}\n/* Accent text: #4338CA in light mode, the lighter tint in dark mode (see styles.css). */\n.summary-value-left {\n  margin-bottom: 0.5rem;\n  color: var(--bs-link-color);\n}\n/* Pushed to the bottom so it lines up with the captions in the other cards. */\n.budget-bar {\n  height: 6px;\n  margin-top: auto;\n}\n.budget-bar .progress-bar {\n  background-color: var(--bs-primary);\n}\n/* Over budget: warning colours readable in both themes. */\n.is-over .summary-value-left {\n  color: var(--bs-danger-text-emphasis);\n}\n.is-over .budget-bar .progress-bar {\n  background-color: var(--bs-danger);\n}\n/* Budget by category */\n.edit-link {\n  color: var(--bs-link-color);\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-decoration: none;\n}\n.edit-link:hover {\n  text-decoration: underline;\n}\n.category-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.category-dot {\n  flex-shrink: 0;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.category-name {\n  font-weight: 600;\n}\n.category-amount {\n  color: var(--bs-secondary-color);\n  font-size: 0.875rem;\n  white-space: nowrap;\n}\n.category-bar {\n  height: 6px;\n  margin-top: 0.5rem;\n}\n/* md and up: more breathing room between rows and above each bar (mobile keeps the values above). */\n@media (min-width: 768px) {\n  .category-list {\n    gap: 1.5rem;\n  }\n\n  .category-bar {\n    margin-top: 0.75rem;\n  }\n}\n/* Recent transactions */\n.recent-list li {\n  padding: 0.75rem 0;\n}\n.recent-list li:first-child {\n  padding-top: 0.25rem;\n}\n.recent-list li:last-child {\n  padding-bottom: 0;\n}\n.txn-empty {\n  color: var(--bs-secondary-color);\n  font-size: 0.875rem;\n}\n/* Mobile: divider under both card headers; category rows get dividers and the amount moves below the bar.\n   Kept last so it overrides the base .recent-list padding. */\n@media (max-width: 767.98px) {\n  .category-card-header,\n  .recent-card-header {\n    padding-bottom: 0.75rem;\n    border-bottom: var(--bs-border-width) solid var(--bs-border-color);\n  }\n\n  .category-list {\n    gap: 0;\n  }\n\n  .category-list li {\n    padding: 0.75rem 0;\n  }\n\n  /* The card's 0.25rem gap plus this matches the header's bottom padding. */\n  .category-list li:first-child,\n  .recent-list li:first-child {\n    padding-top: 0.5rem;\n  }\n\n  .category-list li:last-child {\n    padding-bottom: 0;\n  }\n\n  .category-list li + li {\n    border-top: var(--bs-border-width) solid var(--bs-border-color);\n  }\n\n  .category-amount-below {\n    margin-top: 0.375rem;\n  }\n}\n/* \"Amounts shown in $ USD at approximate rates\": soft grey pill under the subtitle (converted currencies only).\n   Below md the header is a column, so the row's gap is pulled in to keep the pill close to the subtitle. */\n.rate-note-row {\n  margin-top: -0.5rem;\n}\n.rate-note {\n  padding: 0.25rem 0.625rem;\n  background-color: var(--view-only-bg);\n  color: var(--bs-secondary-color);\n  font-size: 0.75rem;\n  line-height: 1.35;\n  white-space: normal;\n}\n.rate-note .bi {\n  flex-shrink: 0;\n  line-height: inherit;\n}\n/* From md the title and actions share the first line (the title block takes the free space, so the actions\n   never wrap) and the pill wraps onto its own full-width line, 0.5rem under the subtitle. */\n@media (min-width: 768px) {\n  .overview-header {\n    flex-wrap: wrap;\n    row-gap: 0.5rem !important;\n  }\n\n  .overview-header > div:first-child {\n    flex: 1 1 0;\n    min-width: 0;\n  }\n\n  .rate-note-row {\n    order: 2;\n    flex-basis: 100%;\n    margin-top: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnRkFBZ0Y7QUFDaEY7OztFQUdFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwyREFBMkQ7RUFDM0QseUNBQXlDO0VBQ3pDLG9DQUFvQztBQUN0QztBQUVBOztFQUVFLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7QUFFQTs7dUZBRXVGO0FBQ3ZGO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRTtJQUNFLG9EQUFvRDtFQUN0RDtBQUNGO0FBRUE7RUFDRTtJQUNFLHlDQUF5QztFQUMzQztBQUNGO0FBRUEsc0dBQXNHO0FBQ3RHO0VBQ0U7SUFDRSxzREFBc0Q7RUFDeEQ7QUFDRjtBQUVBLHdGQUF3RjtBQUN4RjtFQUNFLHFCQUFxQjtFQUNyQiwyQkFBMkI7QUFDN0I7QUFFQSw4RUFBOEU7QUFDOUU7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQSwwREFBMEQ7QUFDMUQ7RUFDRSxxQ0FBcUM7QUFDdkM7QUFFQTtFQUNFLGtDQUFrQztBQUNwQztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUEsb0dBQW9HO0FBQ3BHO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7QUFFQTs2REFDNkQ7QUFDN0Q7RUFDRTs7SUFFRSx1QkFBdUI7SUFDdkIsa0VBQWtFO0VBQ3BFOztFQUVBO0lBQ0UsTUFBTTtFQUNSOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBLDBFQUEwRTtFQUMxRTs7SUFFRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSwrREFBK0Q7RUFDakU7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRjtBQUVBOzJHQUMyRztBQUMzRztFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFDQUFxQztFQUNyQyxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7QUFFQTs0RkFDNEY7QUFDNUY7RUFDRTtJQUNFLGVBQWU7SUFDZiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdW1tYXJ5IGNhcmRzOyAuY2F0ZWdvcnktY2FyZCBhbmQgLnJlY2VudC1jYXJkIHNoYXJlIHRoZSBzYW1lIGNhcmQgc3VyZmFjZS4gKi9cbi5zdW1tYXJ5LWNhcmQsXG4uY2F0ZWdvcnktY2FyZCxcbi5yZWNlbnQtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC4yNXJlbTtcbiAgcGFkZGluZzogMS4yNXJlbTtcbiAgYm9yZGVyOiB2YXIoLS1icy1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJzLWJvcmRlci1yYWRpdXMtbGcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtc3VyZmFjZSk7XG59XG5cbi5zdW1tYXJ5LWxhYmVsLFxuLnN1bW1hcnktY2FwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1icy1zZWNvbmRhcnktY29sb3IpO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuXG4vKiBBbW91bnRzIG5ldmVyIGJyZWFrIChub3IgXCJPdmVyIGJ5XCIgZnJvbSBpdHMgYW1vdW50KTogb25lIGxpbmUsIGEgbGl0dGxlIHNtYWxsZXIgd2hlcmUgdGhlIGNhcmRzIGFyZSBuYXJyb3cuXG4gICBCZWxvdyBtZCB0aGUgY2FyZHMgYXJlIGhhbGYgdGhlIHNjcmVlbjsgbWQgaGFzIHRocmVlIGNhcmRzIGFjcm9zczsgZnJvbSBsZyB0aGUgMjYwcHggc2lkZWJhciB0YWtlcyBpdHMgc2hhcmUuXG4gICBFYWNoIHN0ZXAgc3RheXMgYXQgMS43NXJlbSBvbmNlIHRoZXJlJ3Mgcm9vbSAoZS5nLiBmcm9tIH4xMjgwcHggd2l0aCB0aGUgc2lkZWJhcikuICovXG4uc3VtbWFyeS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5zdW1tYXJ5LXZhbHVlIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDEuMDYyNXJlbSwgNC40dncgKyAwLjJyZW0sIDEuNzVyZW0pO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5zdW1tYXJ5LXZhbHVlIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDEuMjVyZW0sIDIuNnZ3LCAxLjc1cmVtKTtcbiAgfVxufVxuXG4vKiBGcm9tIGxnIGVhY2ggY2FyZCdzIHRleHQgYm94IGlzIGFib3V0ICgxMDB2dyAtIDUxMnB4KSAvIDMgd2lkZTsgXCJPdmVyIGJ5IOKCuTEsMDAsMTA3XCIgbmVlZHMgfjguOWVtLiAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5zdW1tYXJ5LXZhbHVlIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIGNhbGMoMy43NXZ3IC0gMTkuNXB4KSwgMS43NXJlbSk7XG4gIH1cbn1cblxuLyogQWNjZW50IHRleHQ6ICM0MzM4Q0EgaW4gbGlnaHQgbW9kZSwgdGhlIGxpZ2h0ZXIgdGludCBpbiBkYXJrIG1vZGUgKHNlZSBzdHlsZXMuY3NzKS4gKi9cbi5zdW1tYXJ5LXZhbHVlLWxlZnQge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1icy1saW5rLWNvbG9yKTtcbn1cblxuLyogUHVzaGVkIHRvIHRoZSBib3R0b20gc28gaXQgbGluZXMgdXAgd2l0aCB0aGUgY2FwdGlvbnMgaW4gdGhlIG90aGVyIGNhcmRzLiAqL1xuLmJ1ZGdldC1iYXIge1xuICBoZWlnaHQ6IDZweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLmJ1ZGdldC1iYXIgLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLXByaW1hcnkpO1xufVxuXG4vKiBPdmVyIGJ1ZGdldDogd2FybmluZyBjb2xvdXJzIHJlYWRhYmxlIGluIGJvdGggdGhlbWVzLiAqL1xuLmlzLW92ZXIgLnN1bW1hcnktdmFsdWUtbGVmdCB7XG4gIGNvbG9yOiB2YXIoLS1icy1kYW5nZXItdGV4dC1lbXBoYXNpcyk7XG59XG5cbi5pcy1vdmVyIC5idWRnZXQtYmFyIC5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1kYW5nZXIpO1xufVxuXG4vKiBCdWRnZXQgYnkgY2F0ZWdvcnkgKi9cbi5lZGl0LWxpbmsge1xuICBjb2xvcjogdmFyKC0tYnMtbGluay1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmVkaXQtbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uY2F0ZWdvcnktbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLmNhdGVnb3J5LWRvdCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jYXRlZ29yeS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhdGVnb3J5LWFtb3VudCB7XG4gIGNvbG9yOiB2YXIoLS1icy1zZWNvbmRhcnktY29sb3IpO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2F0ZWdvcnktYmFyIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLyogbWQgYW5kIHVwOiBtb3JlIGJyZWF0aGluZyByb29tIGJldHdlZW4gcm93cyBhbmQgYWJvdmUgZWFjaCBiYXIgKG1vYmlsZSBrZWVwcyB0aGUgdmFsdWVzIGFib3ZlKS4gKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY2F0ZWdvcnktbGlzdCB7XG4gICAgZ2FwOiAxLjVyZW07XG4gIH1cblxuICAuY2F0ZWdvcnktYmFyIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICB9XG59XG5cbi8qIFJlY2VudCB0cmFuc2FjdGlvbnMgKi9cbi5yZWNlbnQtbGlzdCBsaSB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMDtcbn1cblxuLnJlY2VudC1saXN0IGxpOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG59XG5cbi5yZWNlbnQtbGlzdCBsaTpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi50eG4tZW1wdHkge1xuICBjb2xvcjogdmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cblxuLyogTW9iaWxlOiBkaXZpZGVyIHVuZGVyIGJvdGggY2FyZCBoZWFkZXJzOyBjYXRlZ29yeSByb3dzIGdldCBkaXZpZGVycyBhbmQgdGhlIGFtb3VudCBtb3ZlcyBiZWxvdyB0aGUgYmFyLlxuICAgS2VwdCBsYXN0IHNvIGl0IG92ZXJyaWRlcyB0aGUgYmFzZSAucmVjZW50LWxpc3QgcGFkZGluZy4gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAuY2F0ZWdvcnktY2FyZC1oZWFkZXIsXG4gIC5yZWNlbnQtY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtYm9yZGVyLWNvbG9yKTtcbiAgfVxuXG4gIC5jYXRlZ29yeS1saXN0IHtcbiAgICBnYXA6IDA7XG4gIH1cblxuICAuY2F0ZWdvcnktbGlzdCBsaSB7XG4gICAgcGFkZGluZzogMC43NXJlbSAwO1xuICB9XG5cbiAgLyogVGhlIGNhcmQncyAwLjI1cmVtIGdhcCBwbHVzIHRoaXMgbWF0Y2hlcyB0aGUgaGVhZGVyJ3MgYm90dG9tIHBhZGRpbmcuICovXG4gIC5jYXRlZ29yeS1saXN0IGxpOmZpcnN0LWNoaWxkLFxuICAucmVjZW50LWxpc3QgbGk6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIH1cblxuICAuY2F0ZWdvcnktbGlzdCBsaTpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5jYXRlZ29yeS1saXN0IGxpICsgbGkge1xuICAgIGJvcmRlci10b3A6IHZhcigtLWJzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtYm9yZGVyLWNvbG9yKTtcbiAgfVxuXG4gIC5jYXRlZ29yeS1hbW91bnQtYmVsb3cge1xuICAgIG1hcmdpbi10b3A6IDAuMzc1cmVtO1xuICB9XG59XG5cbi8qIFwiQW1vdW50cyBzaG93biBpbiAkIFVTRCBhdCBhcHByb3hpbWF0ZSByYXRlc1wiOiBzb2Z0IGdyZXkgcGlsbCB1bmRlciB0aGUgc3VidGl0bGUgKGNvbnZlcnRlZCBjdXJyZW5jaWVzIG9ubHkpLlxuICAgQmVsb3cgbWQgdGhlIGhlYWRlciBpcyBhIGNvbHVtbiwgc28gdGhlIHJvdydzIGdhcCBpcyBwdWxsZWQgaW4gdG8ga2VlcCB0aGUgcGlsbCBjbG9zZSB0byB0aGUgc3VidGl0bGUuICovXG4ucmF0ZS1ub3RlLXJvdyB7XG4gIG1hcmdpbi10b3A6IC0wLjVyZW07XG59XG5cbi5yYXRlLW5vdGUge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12aWV3LW9ubHktYmcpO1xuICBjb2xvcjogdmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLnJhdGUtbm90ZSAuYmkge1xuICBmbGV4LXNocmluazogMDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi8qIEZyb20gbWQgdGhlIHRpdGxlIGFuZCBhY3Rpb25zIHNoYXJlIHRoZSBmaXJzdCBsaW5lICh0aGUgdGl0bGUgYmxvY2sgdGFrZXMgdGhlIGZyZWUgc3BhY2UsIHNvIHRoZSBhY3Rpb25zXG4gICBuZXZlciB3cmFwKSBhbmQgdGhlIHBpbGwgd3JhcHMgb250byBpdHMgb3duIGZ1bGwtd2lkdGggbGluZSwgMC41cmVtIHVuZGVyIHRoZSBzdWJ0aXRsZS4gKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAub3ZlcnZpZXctaGVhZGVyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcm93LWdhcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAub3ZlcnZpZXctaGVhZGVyID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICBmbGV4OiAxIDEgMDtcbiAgICBtaW4td2lkdGg6IDA7XG4gIH1cblxuICAucmF0ZS1ub3RlLXJvdyB7XG4gICAgb3JkZXI6IDI7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/overview/overview.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/overview/overview.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"state$ | async as state\">\n<!-- Past months: \"View only\" left of the selector (md+) or on its own line below it (below md), no add button.\n     Current month with no transactions yet: no header button (the \"Fresh start\" card has one). -->\n<header class=\"overview-header d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3\">\n  <div>\n    <h1 class=\"h3 mb-1\">Overview</h1>\n    <p class=\"text-body-secondary small mb-0\">\n      <ng-container *ngIf=\"!state.isCurrent\">Here's how your money did in {{ state.monthYear }}.</ng-container>\n      <ng-container *ngIf=\"state.isCurrent && state.hasTransactions\">Here's how your money is doing this month.</ng-container>\n      <ng-container *ngIf=\"state.isCurrent && !state.hasTransactions\">A new month has started.</ng-container>\n    </p>\n  </div>\n\n  <!-- Converted currencies only. Below md it sits under the subtitle (above the month selector); from md it wraps\n       to its own line under the title block, so the title row keeps its alignment. -->\n  <div class=\"rate-note-row\" *ngIf=\"rateNote$ | async as rate\">\n    <p class=\"rate-note d-inline-flex align-items-start gap-1 rounded-pill mb-0\">\n      <i class=\"bi bi-info-circle\" aria-hidden=\"true\"></i>\n      <span>Amounts shown in {{ rate.symbol }} {{ rate.code }} at approximate rates</span>\n    </p>\n  </div>\n\n  <div class=\"header-actions d-flex flex-column flex-md-row align-items-stretch align-items-md-center gap-2 gap-md-3\">\n    <app-view-only-badge class=\"order-1 order-md-0 align-self-start align-self-md-auto\" *ngIf=\"!state.isCurrent\"></app-view-only-badge>\n    <app-month-selector></app-month-selector>\n\n    <button type=\"button\" class=\"btn btn-primary btn-add\" *ngIf=\"state.isCurrent && state.hasTransactions\" (click)=\"addTxn.open()\">\n      <i class=\"bi bi-plus-lg\" aria-hidden=\"true\"></i>\n      <span>Add transaction</span>\n    </button>\n  </div>\n</header>\n\n<!-- Normal layout when the month has transactions; otherwise one centred empty-state card. -->\n<ng-container *ngIf=\"state.hasTransactions; else emptyMonth\">\n  <section class=\"summary-cards row g-3 mt-4\" *ngIf=\"summary$ | async as summary\" aria-label=\"Monthly summary\">\n    <div class=\"col-6 col-md-4\">\n      <div class=\"summary-card h-100\">\n        <div class=\"summary-label\">Income</div>\n        <div class=\"summary-value\">{{ summary.income | money }}</div>\n        <div class=\"summary-caption d-none d-md-block\" [ngPlural]=\"summary.incomeCount\">\n          <ng-template ngPluralCase=\"=0\">No payments this month</ng-template>\n          <ng-template ngPluralCase=\"=1\">1 payment this month</ng-template>\n          <ng-template ngPluralCase=\"other\">{{ summary.incomeCount }} payments this month</ng-template>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-6 col-md-4\">\n      <div class=\"summary-card h-100\">\n        <div class=\"summary-label\">Spent</div>\n        <div class=\"summary-value\">{{ summary.spent | money }}</div>\n        <div class=\"summary-caption d-none d-md-block\">of {{ summary.totalBudget | money }} total budget</div>\n      </div>\n    </div>\n\n    <div class=\"col-12 col-md-4\">\n      <div class=\"summary-card h-100\" [class.is-over]=\"summary.isOverBudget\">\n        <div class=\"d-flex flex-wrap align-items-baseline justify-content-between column-gap-2\">\n          <div class=\"summary-label\">Left to spend</div>\n          <!-- Mobile only: replaces the hidden Spent caption. -->\n          <span class=\"summary-caption d-md-none\">of {{ summary.totalBudget | money }}</span>\n        </div>\n        <div class=\"summary-value summary-value-left\">\n          <ng-container *ngIf=\"!summary.isOverBudget\">{{ summary.left | money }}</ng-container>\n          <ng-container *ngIf=\"summary.isOverBudget\">Over by {{ summary.overBy | money }}</ng-container>\n        </div>\n        <div class=\"progress budget-bar\" role=\"progressbar\"\n             [attr.aria-label]=\"'Spent ' + summary.spentPercent + '% of total budget'\"\n             [attr.aria-valuenow]=\"summary.barPercent\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          <div class=\"progress-bar\" [style.width.%]=\"summary.barPercent\"></div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"row g-3 mt-4 align-items-lg-start\">\n    <div class=\"col-12 col-lg-6\">\n      <div class=\"category-card\" *ngIf=\"categoryBudgets$ | async as budgets\">\n        <div class=\"category-card-header d-flex align-items-center justify-content-between gap-2 mb-0 mb-md-3\">\n          <h2 class=\"h5 mb-0\">Budget by category</h2>\n          <a class=\"edit-link\" routerLink=\"/budgets\">Edit budgets</a>\n        </div>\n\n        <ul class=\"category-list list-unstyled mb-0\">\n          <li *ngFor=\"let budget of budgets\">\n            <div class=\"d-flex flex-wrap align-items-center justify-content-between column-gap-3 row-gap-1\">\n              <div class=\"d-flex align-items-center gap-2\">\n                <span class=\"category-dot\" [style.background-color]=\"budget.color\" aria-hidden=\"true\"></span>\n                <span class=\"category-name\">{{ budget.name }}</span>\n              </div>\n              <div class=\"d-flex flex-wrap align-items-center justify-content-end gap-2 ms-auto\">\n                <span class=\"category-amount d-none d-md-inline\">{{ budget.spent | money }} of {{ budget.limit | money }}</span>\n                <span class=\"status-badge\" [ngClass]=\"'status-' + budget.status\" [ngSwitch]=\"budget.status\">\n                  <ng-container *ngSwitchCase=\"'on-track'\">On track</ng-container>\n                  <ng-container *ngSwitchCase=\"'close'\">Close to limit</ng-container>\n                  <ng-container *ngSwitchCase=\"'at-limit'\">At limit</ng-container>\n                  <ng-container *ngSwitchCase=\"'over'\">Over by {{ budget.overBy | money }}</ng-container>\n                </span>\n              </div>\n            </div>\n            <div class=\"progress category-bar\" role=\"progressbar\"\n                 [attr.aria-label]=\"budget.name + ': ' + budget.percentUsed + '% of budget used'\"\n                 [attr.aria-valuenow]=\"budget.barPercent\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n              <div class=\"progress-bar\" [ngClass]=\"'bar-' + budget.status\" [style.width.%]=\"budget.barPercent\"></div>\n            </div>\n            <!-- Mobile only: the amount moves below the bar. -->\n            <div class=\"category-amount category-amount-below d-md-none\">{{ budget.spent | money }} of {{ budget.limit | money }}</div>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"col-12 col-lg-6\">\n      <div class=\"recent-card\" *ngIf=\"recentTransactions$ | async as recent\">\n        <div class=\"recent-card-header d-flex align-items-center justify-content-between gap-2 mb-0 mb-md-2\">\n          <h2 class=\"h5 mb-0\">Recent transactions</h2>\n          <a class=\"edit-link\" routerLink=\"/transactions\">View all</a>\n        </div>\n\n        <ul class=\"recent-list txn-list list-unstyled mb-0\" *ngIf=\"recent.length; else noTransactions\">\n          <li class=\"d-flex align-items-center gap-3\" *ngFor=\"let t of recent\">\n            <span class=\"txn-badge\" [style.background-color]=\"t.color\" aria-hidden=\"true\">{{ t.letter }}</span>\n            <div class=\"txn-text\">\n              <div class=\"txn-description\">{{ t.description }}</div>\n              <div class=\"txn-meta\">{{ t.category }} · {{ t.dateLabel }}</div>\n            </div>\n            <span class=\"txn-amount\" [class.is-income]=\"t.isIncome\">{{ t.amount | money:t.sign }}</span>\n          </li>\n        </ul>\n\n        <ng-template #noTransactions>\n          <p class=\"txn-empty mb-0\">No transactions this month</p>\n        </ng-template>\n      </div>\n    </div>\n  </section>\n</ng-container>\n\n<ng-template #emptyMonth>\n  <!-- Past month with nothing recorded. -->\n  <app-empty-state *ngIf=\"!state.isCurrent\" [heading]=\"'Nothing was recorded in ' + state.monthYear\"\n                   text=\"There are no income or expenses recorded for this month. Use the arrows above to view another month.\">\n    <svg emptyIcon class=\"text-body-secondary\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M3 10h18M8 3v4M16 3v4\"/></svg>\n  </app-empty-state>\n\n  <!-- Current month with no transactions yet (\"Fresh start\"). -->\n  <app-empty-state *ngIf=\"state.isCurrent\" [heading]=\"'Fresh start for ' + state.monthName\" [hasActions]=\"true\"\n                   [compactMobile]=\"true\">\n    <svg emptyIcon class=\"icon-accent\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6\"/></svg>\n    <span emptyText>You have <strong class=\"fw-bold\">{{ state.totalBudget | money }}</strong> to spend across\n      <ng-container [ngPlural]=\"state.categoryCount\"><ng-template ngPluralCase=\"=1\">1 category</ng-template><ng-template ngPluralCase=\"other\">{{ state.categoryCount }} categories</ng-template></ng-container>.\n      Your limits carried over from {{ state.previousMonthName }}.</span>\n    <!-- Same size and look as the header \"+ Add transaction\" (.btn-add). Stacked full width below sm (Add on top),\n         side by side and centred from sm up. -->\n    <div emptyActions class=\"d-grid d-sm-flex justify-content-sm-center gap-2\">\n      <button type=\"button\" class=\"btn btn-primary btn-add\" (click)=\"addTxn.open()\">\n        <i class=\"bi bi-plus-lg\" aria-hidden=\"true\"></i>\n        <span>Add transaction</span>\n      </button>\n      <a class=\"btn btn-outline-neutral btn-add\" routerLink=\"/budgets\">Review budgets</a>\n    </div>\n  </app-empty-state>\n</ng-template>\n</ng-container>\n\n<app-add-transaction-modal #addTxn></app-add-transaction-modal>\n"

/***/ }),

/***/ "./src/app/pages/overview/overview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/overview/overview.component.ts ***!
  \******************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_currency_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/currency.service */ "./src/app/core/services/currency.service.ts");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_services_today_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/today.service */ "./src/app/core/services/today.service.ts");
/* harmony import */ var _core_utils_amount_sign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/utils/amount-sign */ "./src/app/core/utils/amount-sign.ts");
/* harmony import */ var _core_utils_category_budgets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/utils/category-budgets */ "./src/app/core/utils/category-budgets.ts");
/* harmony import */ var _core_utils_date_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/utils/date-format */ "./src/app/core/utils/date-format.ts");
/* harmony import */ var _core_utils_money__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/utils/money */ "./src/app/core/utils/money.ts");
/* harmony import */ var _core_utils_month_summary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/utils/month-summary */ "./src/app/core/utils/month-summary.ts");












var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(dataService, today, currencyService) {
        var _this = this;
        this.dataService = dataService;
        this.today = today;
        this.currencyService = currencyService;
        // Recompute the cards when the month changes and when transactions are added.
        var monthData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.dataService.selectedMonth$, this.dataService.dataChanged$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var selected = _a[0];
            return selected;
        }));
        this.state$ = monthData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (selected) { return _this.toState(selected); }));
        this.rateNote$ = this.currencyService.currency$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (code) { return code === _core_utils_money__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_CURRENCY"] ? null : Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_10__["getCurrency"])(code); }));
        // Overspends that show as zero in the selected currency read as at limit / on budget (display only).
        this.summary$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(monthData$, this.currencyService.currency$).pipe(
        // Adjusted first, so the bar/percentage follow the displayed totals (equal totals read 100%).
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var selected = _a[0], currency = _a[1];
            return _this.toSummaryView(Object(_core_utils_month_summary__WEBPACK_IMPORTED_MODULE_11__["adjustSummaryForCurrency"])(_this.dataService.getMonthSummary(selected.year, selected.month), currency));
        }));
        this.categoryBudgets$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(monthData$, this.currencyService.currency$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var selected = _a[0], currency = _a[1];
            return _this.dataService.getCategoryBudgets(selected.year, selected.month)
                .map(function (b) { return Object(_core_utils_category_budgets__WEBPACK_IMPORTED_MODULE_8__["adjustStatusForCurrency"])(b, currency); });
        }));
        this.recentTransactions$ = monthData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (selected) { return _this.dataService.getRecentTransactions(selected.year, selected.month)
            .map(function (t) { return _this.toRecentView(t); }); }));
    }
    OverviewComponent.prototype.toState = function (selected) {
        var longMonth = function (year, month) {
            return new Date(year, month - 1, 1).toLocaleDateString('en-US', { month: 'long' });
        };
        return {
            isCurrent: this.today.isCurrentMonth(selected),
            hasTransactions: this.dataService.getTransactionsForMonth(selected.year, selected.month).length > 0,
            monthYear: Object(_core_utils_date_format__WEBPACK_IMPORTED_MODULE_9__["formatMonthYear"])(selected.year, selected.month),
            monthName: longMonth(selected.year, selected.month),
            totalBudget: this.dataService.getMonthSummary(selected.year, selected.month).totalBudget,
            categoryCount: this.dataService.getCategories().length,
            // Month 0 rolls back to December of the previous year.
            previousMonthName: longMonth(selected.year, selected.month - 1)
        };
    };
    OverviewComponent.prototype.toSummaryView = function (summary) {
        var spentPercent = Math.round(summary.spentRatio * 100);
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, summary, { spentPercent: spentPercent, barPercent: Math.min(100, Math.max(0, spentPercent)) });
    };
    OverviewComponent.prototype.toRecentView = function (t) {
        var isIncome = t.type === 'income';
        return {
            id: t.id,
            description: t.description,
            category: t.category,
            dateLabel: Object(_core_utils_date_format__WEBPACK_IMPORTED_MODULE_9__["formatDayMonth"])(t.date),
            letter: t.category.charAt(0).toUpperCase(),
            color: this.dataService.getTransactionColor(t),
            isIncome: isIncome,
            sign: Object(_core_utils_amount_sign__WEBPACK_IMPORTED_MODULE_7__["amountSign"])(t.type),
            amount: t.amount
        };
    };
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/pages/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.css */ "./src/app/pages/overview/overview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _core_services_today_service__WEBPACK_IMPORTED_MODULE_6__["TodayService"], _core_services_currency_service__WEBPACK_IMPORTED_MODULE_4__["CurrencyService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/reports/monthly-bar-chart.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/reports/monthly-bar-chart.ts ***!
  \****************************************************/
/*! exports provided: readBarChartColors, registerRoundedBar, BAR_LABEL_PADDING, fitBarLabels, monthlyLabelsPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBarChartColors", function() { return readBarChartColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRoundedBar", function() { return registerRoundedBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BAR_LABEL_PADDING", function() { return BAR_LABEL_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitBarLabels", function() { return fitBarLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthlyLabelsPlugin", function() { return monthlyLabelsPlugin; });
/* harmony import */ var _core_utils_money__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/utils/money */ "./src/app/core/utils/money.ts");

function readBarChartColors() {
    var style = getComputedStyle(document.documentElement);
    var get = function (name, fallback) { return (style.getPropertyValue(name) || '').trim() || fallback; };
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
var BAR_RADIUS = 6;
var NO_DATA_TEXT = 'No data';
/** Used when "No data" can't fit at the smallest size (e.g. 12 months on a phone): the usual "no value" mark. */
var NO_DATA_SHORT = '—';
/**
 * Registers a 'roundedBar' chart type once: a bar chart whose bars have rounded TOP corners.
 * Chart.js 2.x has no bar border radius, so this controller draws the rectangles itself.
 * Scoped to charts of this type; Chart.elements.Rectangle is not patched.
 */
function registerRoundedBar() {
    if (Chart.controllers.roundedBar) {
        return;
    }
    Chart.defaults.roundedBar = Chart.helpers.clone(Chart.defaults.bar);
    Chart.controllers.roundedBar = Chart.controllers.bar.extend({
        draw: function drawRoundedBars() {
            var chart = this.chart;
            var ctx = chart.ctx;
            Chart.helpers.canvas.clipArea(ctx, chart.chartArea);
            this.getMeta().data.forEach(function (rect) {
                var vm = rect._view;
                var left = vm.x - vm.width / 2;
                var right = vm.x + vm.width / 2;
                var top = Math.min(vm.y, vm.base);
                var bottom = Math.max(vm.y, vm.base);
                var height = bottom - top;
                if (!(height >= 0.5)) {
                    return; // a 0 month draws no bar, only its label
                }
                // Clamp so short or narrow bars still get a clean shape.
                var r = Math.min(BAR_RADIUS, vm.width / 2, height);
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
var BAR_LABEL_PADDING = { top: 22, bottom: 26 };
var AMOUNT_SIZES = [12, 11, 10, 9, 8];
var MONTH_SIZES = [12, 11, 10, 9, 8];
var AMOUNT_STYLES = ['full', 'no-symbol', 'shortest'];
/** Mobile (compact): smaller text, and amounts never carry the currency symbol ('38.2k'). */
var COMPACT_SIZES = [10, 9, 8];
var COMPACT_AMOUNT_STYLES = ['no-symbol', 'shortest'];
function font(size, weight, family) {
    return weight + ' ' + size + 'px ' + family;
}
/** Largest size at which every text fits in maxWidth, or null. */
function fitSize(ctx, texts, maxWidth, sizes, weight, family) {
    for (var _i = 0, sizes_1 = sizes; _i < sizes_1.length; _i++) {
        var size = sizes_1[_i];
        ctx.font = font(size, weight, family);
        var widest = texts.reduce(function (w, t) { return Math.max(w, ctx.measureText(t).width); }, 0);
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
function fitBarLabels(ctx, values, noData, maxWidth, family, compact, currency) {
    if (compact === void 0) { compact = false; }
    if (currency === void 0) { currency = _core_utils_money__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY"]; }
    var sizes = compact ? COMPACT_SIZES : AMOUNT_SIZES;
    var styles = compact ? COMPACT_AMOUNT_STYLES : AMOUNT_STYLES;
    var _loop_1 = function (noDataText) {
        var _loop_2 = function (style) {
            var texts = values.map(function (v, i) { return noData[i] ? noDataText : Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_0__["formatShortMoney"])(v, currency, style); });
            var size = fitSize(ctx, texts, maxWidth, sizes, 500, family);
            if (size !== null) {
                return { value: { texts: texts, size: size } };
            }
        };
        for (var _i = 0, styles_1 = styles; _i < styles_1.length; _i++) {
            var style = styles_1[_i];
            var state_2 = _loop_2(style);
            if (typeof state_2 === "object")
                return state_2;
        }
    };
    for (var _i = 0, _a = [NO_DATA_TEXT, NO_DATA_SHORT]; _i < _a.length; _i++) {
        var noDataText = _a[_i];
        var state_1 = _loop_1(noDataText);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return {
        texts: values.map(function (v, i) { return noData[i] ? NO_DATA_SHORT : Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_0__["formatShortMoney"])(v, currency, 'shortest'); }),
        size: sizes[sizes.length - 1]
    };
}
/**
 * Per-chart plugin: a thin baseline under the bars, the short amount above each bar ('$0' just
 * above the baseline for empty months) and the month name below; the last bar is the selected
 * month (bold, body colour). Font sizes shrink with the space per bar so labels never overlap;
 * in compact (mobile) mode text starts smaller and amounts drop the symbol. Amounts use getCurrency() at draw time.
 * Months with no transactions (dataset.noData[i]) get a dashed outline the full height of the plot area
 * (rounded top, open bottom on the baseline) with "No data" above it: strong gray, or the accent for the
 * selected month. A month with transactions but no expenses is a real 0 (no bar, '$0' label).
 */
function monthlyLabelsPlugin(getColors, family, isCompact, getCurrency) {
    if (isCompact === void 0) { isCompact = function () { return false; }; }
    if (getCurrency === void 0) { getCurrency = function () { return _core_utils_money__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY"]; }; }
    return {
        beforeDatasetsDraw: function (chart) {
            var area = chart.chartArea;
            var ctx = chart.ctx;
            ctx.save();
            ctx.strokeStyle = getColors().border;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(area.left, Math.round(area.bottom) + 0.5);
            ctx.lineTo(area.right, Math.round(area.bottom) + 0.5);
            ctx.stroke();
            ctx.restore();
        },
        afterDatasetsDraw: function (chart) {
            var values = chart.data.datasets[0].data;
            var noData = chart.data.datasets[0].noData || [];
            var months = chart.data.labels;
            var rects = chart.getDatasetMeta(0).data;
            var count = values.length;
            if (!count) {
                return;
            }
            var ctx = chart.ctx;
            var area = chart.chartArea;
            var colors = getColors();
            var maxWidth = (area.right - area.left) / count - 4;
            var compact = isCompact();
            var amounts = fitBarLabels(ctx, values, values.map(function (v, i) { return !!noData[i]; }), maxWidth, family, compact, getCurrency());
            var monthSize = fitSize(ctx, months, maxWidth, compact ? COMPACT_SIZES : MONTH_SIZES, 700, family);
            var monthTexts = monthSize === null ? months.map(function (m) { return m.charAt(0); }) : months;
            monthSize = monthSize === null ? MONTH_SIZES[MONTH_SIZES.length - 1] : monthSize;
            ctx.save();
            ctx.textAlign = 'center';
            rects.forEach(function (rect, i) {
                var vm = rect._view;
                var selected = i === count - 1;
                var emptyBar = !!noData[i];
                if (emptyBar) {
                    drawDashedEmptyBar(ctx, vm.x, vm.width, area.top, area.bottom, selected ? colors.accentOutline : colors.strongOutline);
                }
                var top = emptyBar ? area.top : (values[i] > 0 ? Math.min(vm.y, vm.base) : area.bottom);
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
function drawDashedEmptyBar(ctx, x, width, top, bottom, color) {
    var left = Math.round(x - width / 2) + 0.5;
    var right = Math.round(x + width / 2) - 0.5;
    var base = Math.round(bottom);
    var r = Math.min(BAR_RADIUS, (right - left) / 2, base - top);
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


/***/ }),

/***/ "./src/app/pages/reports/reports.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/reports/reports.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".min-w-0 {\n  min-width: 0;\n}\n\n/* Compare field: fixed width beside the month selector from md up. Its trigger matches the selector\n   height (42px) so both boxes line up exactly. */\n\n@media (min-width: 768px) {\n  .compare-field {\n    width: 220px;\n  }\n\n  .compare-field .filter-select {\n    height: 42px;\n  }\n}\n\n/* Fixed-size doughnut (200px, 180px below md; size bound in the template) with an HTML label in the hole. */\n\n.chart-box {\n  position: relative;\n  flex-shrink: 0;\n}\n\n.chart-center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  white-space: nowrap;\n  pointer-events: none;\n}\n\n.category-dot {\n  flex-shrink: 0;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n\n/* Chart on top, list below. */\n\n.spending-body {\n  gap: 1.5rem;\n}\n\n/* List rows: even gap, no dividers; percentage and amount in fixed, right-aligned columns. */\n\n.spend-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n\n.spend-name {\n  flex: 1 1 auto;\n  min-width: 0;\n  font-weight: 500;\n}\n\n.spend-percent {\n  flex-shrink: 0;\n  min-width: 2.75rem;\n  text-align: right;\n}\n\n/* Wide enough for \"₹1,20,000\" so all amounts line up. */\n\n.spend-amount {\n  flex-shrink: 0;\n  min-width: 5.5rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  text-align: right;\n  white-space: nowrap;\n}\n\n/* Mobile in-card Compare: auto width, 40px, next to the heading. */\n\n.compare-inline {\n  width: auto;\n  height: 40px;\n  font-size: 0.875rem;\n}\n\n/* Monthly spending: full-width, fixed-height box; Chart.js (responsive) fills it. */\n\n.bar-box {\n  position: relative;\n  height: 230px;\n}\n\n/* Insight badges on the tiles; colours from the app status tokens, readable in both themes. */\n\n.insight-tile {\n  padding: 1rem 1.125rem;\n  border-radius: var(--bs-border-radius-lg);\n  background-color: var(--insight-tile-bg);\n}\n\n.insight-badge {\n  display: inline-block;\n}\n\n.tone-up,\n.tone-overspent {\n  background-color: var(--status-over-bg);\n  color: var(--status-over-fg);\n}\n\n.tone-down {\n  background-color: var(--status-ok-bg);\n  color: var(--status-ok-fg);\n}\n\n.tone-saved {\n  background-color: var(--bs-primary-bg-subtle);\n  color: var(--bs-primary-text-emphasis);\n}\n\n/* Neutral fallback: a thin inset outline keeps it visible on the gray tile and on the card surface. */\n\n.tone-neutral {\n  background-color: var(--bs-tertiary-bg);\n  color: var(--bs-secondary-color);\n  box-shadow: inset 0 0 0 1px var(--bs-border-color);\n}\n\n@media (max-width: 767.98px) {\n  /* Shorter bar chart on mobile. */\n  .bar-box {\n    height: 190px;\n  }\n\n  /* Slightly smaller heading so it fits beside the compact Compare (it may wrap below 360px). */\n  .monthly-title {\n    min-width: 0;\n    font-size: 1.125rem;\n  }\n\n  .compare-inline {\n    flex-shrink: 0;\n    padding: 0 0.625rem;\n  }\n\n  /* Insights: no outer card; each insight becomes its own card. */\n  .insights-panel {\n    padding: 0;\n    border: 0;\n    background-color: transparent;\n  }\n\n  .insight-tile {\n    padding: 1.25rem;\n    border: var(--bs-border-width) solid var(--bs-border-color);\n    background-color: var(--app-surface);\n  }\n}\n\n/* From 360px up the heading and the compact Compare always fit on one line. */\n\n@media (min-width: 360px) and (max-width: 767.98px) {\n  .monthly-title {\n    white-space: nowrap;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7aURBQ2lEOztBQUNqRDtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUEsNEdBQTRHOztBQUM1RztFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBLDhCQUE4Qjs7QUFDOUI7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsNkZBQTZGOztBQUM3RjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQSx3REFBd0Q7O0FBQ3hEO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUEsbUVBQW1FOztBQUNuRTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBLG9GQUFvRjs7QUFDcEY7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBLDhGQUE4Rjs7QUFDOUY7RUFDRSxzQkFBc0I7RUFDdEIseUNBQXlDO0VBQ3pDLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSx1Q0FBdUM7RUFDdkMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxzQ0FBc0M7QUFDeEM7O0FBRUEsc0dBQXNHOztBQUN0RztFQUNFLHVDQUF1QztFQUN2QyxnQ0FBZ0M7RUFDaEMsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDO0lBQ0UsYUFBYTtFQUNmOztFQUVBLDhGQUE4RjtFQUM5RjtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCOztFQUVBLGdFQUFnRTtFQUNoRTtJQUNFLFVBQVU7SUFDVixTQUFTO0lBQ1QsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLDJEQUEyRDtJQUMzRCxvQ0FBb0M7RUFDdEM7QUFDRjs7QUFFQSw4RUFBOEU7O0FBQzlFO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pbi13LTAge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi8qIENvbXBhcmUgZmllbGQ6IGZpeGVkIHdpZHRoIGJlc2lkZSB0aGUgbW9udGggc2VsZWN0b3IgZnJvbSBtZCB1cC4gSXRzIHRyaWdnZXIgbWF0Y2hlcyB0aGUgc2VsZWN0b3JcbiAgIGhlaWdodCAoNDJweCkgc28gYm90aCBib3hlcyBsaW5lIHVwIGV4YWN0bHkuICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbXBhcmUtZmllbGQge1xuICAgIHdpZHRoOiAyMjBweDtcbiAgfVxuXG4gIC5jb21wYXJlLWZpZWxkIC5maWx0ZXItc2VsZWN0IHtcbiAgICBoZWlnaHQ6IDQycHg7XG4gIH1cbn1cblxuLyogRml4ZWQtc2l6ZSBkb3VnaG51dCAoMjAwcHgsIDE4MHB4IGJlbG93IG1kOyBzaXplIGJvdW5kIGluIHRoZSB0ZW1wbGF0ZSkgd2l0aCBhbiBIVE1MIGxhYmVsIGluIHRoZSBob2xlLiAqL1xuLmNoYXJ0LWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5jaGFydC1jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY2F0ZWdvcnktZG90IHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogQ2hhcnQgb24gdG9wLCBsaXN0IGJlbG93LiAqL1xuLnNwZW5kaW5nLWJvZHkge1xuICBnYXA6IDEuNXJlbTtcbn1cblxuLyogTGlzdCByb3dzOiBldmVuIGdhcCwgbm8gZGl2aWRlcnM7IHBlcmNlbnRhZ2UgYW5kIGFtb3VudCBpbiBmaXhlZCwgcmlnaHQtYWxpZ25lZCBjb2x1bW5zLiAqL1xuLnNwZW5kLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNjI1cmVtO1xufVxuXG4uc3BlbmQtbmFtZSB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtaW4td2lkdGg6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zcGVuZC1wZXJjZW50IHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1pbi13aWR0aDogMi43NXJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi8qIFdpZGUgZW5vdWdoIGZvciBcIuKCuTEsMjAsMDAwXCIgc28gYWxsIGFtb3VudHMgbGluZSB1cC4gKi9cbi5zcGVuZC1hbW91bnQge1xuICBmbGV4LXNocmluazogMDtcbiAgbWluLXdpZHRoOiA1LjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vKiBNb2JpbGUgaW4tY2FyZCBDb21wYXJlOiBhdXRvIHdpZHRoLCA0MHB4LCBuZXh0IHRvIHRoZSBoZWFkaW5nLiAqL1xuLmNvbXBhcmUtaW5saW5lIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cblxuLyogTW9udGhseSBzcGVuZGluZzogZnVsbC13aWR0aCwgZml4ZWQtaGVpZ2h0IGJveDsgQ2hhcnQuanMgKHJlc3BvbnNpdmUpIGZpbGxzIGl0LiAqL1xuLmJhci1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjMwcHg7XG59XG5cbi8qIEluc2lnaHQgYmFkZ2VzIG9uIHRoZSB0aWxlczsgY29sb3VycyBmcm9tIHRoZSBhcHAgc3RhdHVzIHRva2VucywgcmVhZGFibGUgaW4gYm90aCB0aGVtZXMuICovXG4uaW5zaWdodC10aWxlIHtcbiAgcGFkZGluZzogMXJlbSAxLjEyNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnMtYm9yZGVyLXJhZGl1cy1sZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluc2lnaHQtdGlsZS1iZyk7XG59XG5cbi5pbnNpZ2h0LWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9uZS11cCxcbi50b25lLW92ZXJzcGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YXR1cy1vdmVyLWJnKTtcbiAgY29sb3I6IHZhcigtLXN0YXR1cy1vdmVyLWZnKTtcbn1cblxuLnRvbmUtZG93biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YXR1cy1vay1iZyk7XG4gIGNvbG9yOiB2YXIoLS1zdGF0dXMtb2stZmcpO1xufVxuXG4udG9uZS1zYXZlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLXByaW1hcnktYmctc3VidGxlKTtcbiAgY29sb3I6IHZhcigtLWJzLXByaW1hcnktdGV4dC1lbXBoYXNpcyk7XG59XG5cbi8qIE5ldXRyYWwgZmFsbGJhY2s6IGEgdGhpbiBpbnNldCBvdXRsaW5lIGtlZXBzIGl0IHZpc2libGUgb24gdGhlIGdyYXkgdGlsZSBhbmQgb24gdGhlIGNhcmQgc3VyZmFjZS4gKi9cbi50b25lLW5ldXRyYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy10ZXJ0aWFyeS1iZyk7XG4gIGNvbG9yOiB2YXIoLS1icy1zZWNvbmRhcnktY29sb3IpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggdmFyKC0tYnMtYm9yZGVyLWNvbG9yKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC8qIFNob3J0ZXIgYmFyIGNoYXJ0IG9uIG1vYmlsZS4gKi9cbiAgLmJhci1ib3gge1xuICAgIGhlaWdodDogMTkwcHg7XG4gIH1cblxuICAvKiBTbGlnaHRseSBzbWFsbGVyIGhlYWRpbmcgc28gaXQgZml0cyBiZXNpZGUgdGhlIGNvbXBhY3QgQ29tcGFyZSAoaXQgbWF5IHdyYXAgYmVsb3cgMzYwcHgpLiAqL1xuICAubW9udGhseS10aXRsZSB7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIH1cblxuICAuY29tcGFyZS1pbmxpbmUge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHBhZGRpbmc6IDAgMC42MjVyZW07XG4gIH1cblxuICAvKiBJbnNpZ2h0czogbm8gb3V0ZXIgY2FyZDsgZWFjaCBpbnNpZ2h0IGJlY29tZXMgaXRzIG93biBjYXJkLiAqL1xuICAuaW5zaWdodHMtcGFuZWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLmluc2lnaHQtdGlsZSB7XG4gICAgcGFkZGluZzogMS4yNXJlbTtcbiAgICBib3JkZXI6IHZhcigtLWJzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtc3VyZmFjZSk7XG4gIH1cbn1cblxuLyogRnJvbSAzNjBweCB1cCB0aGUgaGVhZGluZyBhbmQgdGhlIGNvbXBhY3QgQ29tcGFyZSBhbHdheXMgZml0IG9uIG9uZSBsaW5lLiAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLm1vbnRobHktdGl0bGUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/reports/reports.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/reports/reports.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title top-aligned like the other pages; selector + Compare bottom-aligned with each other.\n     Below md: title, then the selector full width (Compare moves into the \"Monthly spending\" card).\n     Past months: \"View only\" left of the selector, centred with it (md+), or on its own line below it (below md).\n     Current month with no transactions: no Compare (and no charts). -->\n<header class=\"d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-3\">\n  <div class=\"min-w-0\">\n    <h1 class=\"h3 mb-1\">Reports</h1>\n    <p class=\"text-body-secondary small mb-0\">Where your money went in {{ monthLabel }}</p>\n  </div>\n\n  <div class=\"d-flex flex-column flex-md-row align-items-stretch align-items-md-end gap-2 gap-md-3\">\n    <div class=\"d-flex flex-column flex-md-row align-items-stretch align-items-md-center gap-2 gap-md-3\">\n      <app-view-only-badge class=\"order-1 order-md-0 align-self-start align-self-md-auto\" *ngIf=\"isPastMonth\"></app-view-only-badge>\n      <app-month-selector></app-month-selector>\n    </div>\n\n    <div class=\"compare-field d-none d-md-block\" *ngIf=\"!isCurrentEmpty\">\n      <label class=\"form-label small fw-semibold text-body-secondary\" for=\"reports-compare\">Compare</label>\n      <div class=\"dropdown\">\n        <button id=\"reports-compare\" type=\"button\" class=\"filter-control filter-select dropdown-toggle\"\n                data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n          <span class=\"text-truncate\">{{ compareLabel }}</span>\n        </button>\n        <ul class=\"dropdown-menu dropdown-menu-end filter-menu\" aria-labelledby=\"reports-compare\">\n          <ng-container *ngTemplateOutlet=\"compareItems\"></ng-container>\n        </ul>\n      </div>\n    </div>\n  </div>\n</header>\n\n<!-- Normal: both charts + Insights. Past month with no transactions: only Monthly spending (full width) and the\n     empty card below. Current month with no transactions: only the empty card. -->\n<section class=\"row g-3 mt-4 align-items-start\" *ngIf=\"!isCurrentEmpty\">\n  <div class=\"col-12 col-lg-6\" *ngIf=\"hasTransactions\">\n    <div class=\"app-card\">\n      <h2 class=\"h5 mb-3\">Spending by category</h2>\n\n      <!-- Always stacked: chart on top (centred on mobile, left-aligned from md), list full width below. -->\n      <div class=\"spending-body d-flex flex-column align-items-center align-items-md-start\"\n           [class.d-none]=\"!slices.length\">\n        <!-- One chart instance while this card is shown (created/destroyed with the canvas). -->\n        <div class=\"chart-box\" [style.width.px]=\"doughnutSize\" [style.height.px]=\"doughnutSize\">\n          <canvas #spendingCanvas role=\"img\" [attr.aria-label]=\"chartAriaLabel\"></canvas>\n          <div class=\"chart-center\" aria-hidden=\"true\">\n            <div class=\"small text-body-secondary\">Total spent</div>\n            <div class=\"fs-5 fw-bold\">{{ totalSpent | money }}</div>\n          </div>\n        </div>\n\n        <ul class=\"spend-list list-unstyled mb-0 w-100\">\n          <li class=\"d-flex align-items-center gap-2\" *ngFor=\"let slice of slices; trackBy: trackByName\">\n            <span class=\"category-dot\" [style.background-color]=\"slice.color\" aria-hidden=\"true\"></span>\n            <span class=\"spend-name text-truncate\">{{ slice.name }}</span>\n            <span class=\"text-body-secondary small spend-percent\">{{ slice.percentLabel }}</span>\n            <span class=\"spend-amount\">{{ slice.spent | money }}</span>\n          </li>\n        </ul>\n      </div>\n\n      <p class=\"text-body-secondary text-center py-5 mb-0\" *ngIf=\"!slices.length\">No spending this month.</p>\n    </div>\n  </div>\n\n  <div class=\"col-12\" [class.col-lg-6]=\"hasTransactions\">\n    <div class=\"app-card\">\n      <div class=\"d-flex align-items-center justify-content-between gap-2 mb-1\">\n        <h2 class=\"h5 mb-0 monthly-title\">Monthly spending</h2>\n        <!-- Mobile only: same state as the header Compare (which is hidden below md). -->\n        <div class=\"dropdown d-md-none\">\n          <button id=\"reports-compare-mobile\" type=\"button\" class=\"filter-control filter-select compare-inline dropdown-toggle\"\n                  data-bs-toggle=\"dropdown\" aria-expanded=\"false\" aria-label=\"Compare range\">\n            <span class=\"text-truncate\">{{ compareShortLabel }}</span>\n          </button>\n          <ul class=\"dropdown-menu dropdown-menu-end filter-menu\" aria-labelledby=\"reports-compare-mobile\">\n            <ng-container *ngTemplateOutlet=\"compareItems\"></ng-container>\n          </ul>\n        </div>\n      </div>\n      <p class=\"text-body-secondary small mb-3\">\n        <ng-container *ngIf=\"isPastEmpty\">{{ rangeNoDataText }}</ng-container>\n        <ng-container *ngIf=\"!isPastEmpty && monthlyAverage !== null\">Average {{ monthlyAverage | money }} a month</ng-container>\n        <ng-container *ngIf=\"!isPastEmpty && monthlyAverage === null\">No spending in this period</ng-container>\n      </p>\n\n      <!-- Bars, amounts above, months below (selected month = last bar, accent + bold label). -->\n      <div class=\"bar-box\">\n        <canvas #monthlyCanvas role=\"img\" [attr.aria-label]=\"monthlyAriaLabel\"></canvas>\n      </div>\n\n      <table class=\"visually-hidden\">\n        <caption>Monthly spending, last {{ monthBars.length }} months</caption>\n        <thead><tr><th scope=\"col\">Month</th><th scope=\"col\">Spent</th></tr></thead>\n        <tbody>\n          <tr *ngFor=\"let bar of monthBars\">\n            <th scope=\"row\">{{ bar.longName }}{{ bar.selected ? ' (selected)' : '' }}</th>\n            <td>{{ bar.hasData ? (bar.total | money) : 'No data' }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <!-- Insights: one card with gray tiles from md up; below md the wrapper loses its card look\n       and each insight is its own card. -->\n  <div class=\"col-12\" *ngIf=\"hasTransactions\">\n    <section class=\"app-card insights-panel\" aria-labelledby=\"insights-title\">\n      <h2 class=\"h5 mb-3\" id=\"insights-title\">Insights</h2>\n      <div class=\"row g-3\">\n        <div class=\"col-12 col-md-4\" *ngFor=\"let insight of insights\">\n          <div class=\"insight-tile h-100\">\n            <span class=\"status-badge insight-badge\" [ngClass]=\"'tone-' + insight.tone\">{{ insight.badge }}</span>\n            <p class=\"mt-2 mb-0\">{{ insight.text }}</p>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</section>\n\n<!-- Past month with no transactions: the standard past-month card under the chart. -->\n<app-empty-state *ngIf=\"isPastEmpty\" [heading]=\"'No spending recorded in ' + monthLabel\"\n                 text=\"The category breakdown and insights only appear for months with transactions. Use the arrows above to view another month.\">\n  <svg emptyIcon class=\"text-body-secondary\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M3 10h18M8 3v4M16 3v4\"/></svg>\n</app-empty-state>\n\n<!-- Current month with no transactions yet: only this card (same spacing as the other new-month cards). -->\n<!-- No \"View … report\" button at the earliest selectable month (January 2020, or the month of a pre-2020 dev date). -->\n<app-empty-state *ngIf=\"isCurrentEmpty\" [heading]=\"'No report for ' + monthName + ' yet'\" [hasActions]=\"canViewPrevious\" [compactMobile]=\"true\"\n                 text=\"Reports fill in as you add transactions. Last month's report is still available.\">\n  <svg emptyIcon class=\"icon-accent\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M4 20V10M10 20V4M16 20v-7M22 20H2\"/></svg>\n  <!-- Same as \"Review budgets\" on the Overview new-month card: full width below sm, centred from sm up. -->\n  <div emptyActions class=\"d-grid d-sm-flex justify-content-sm-center\">\n    <button type=\"button\" class=\"btn btn-outline-neutral btn-add\" (click)=\"viewPreviousMonth()\">View {{ previousMonthName }} report</button>\n  </div>\n</app-empty-state>\n\n<!-- Compare options, shared by both dropdowns. -->\n<ng-template #compareItems>\n  <li *ngFor=\"let option of compareOptions\">\n    <button type=\"button\" class=\"dropdown-item fw-semibold\" [class.active]=\"option.value === compareMonths\"\n            [attr.aria-current]=\"option.value === compareMonths ? 'true' : null\"\n            (click)=\"setCompareMonths(option.value)\">{{ option.label }}</button>\n  </li>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pages/reports/reports.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/reports/reports.component.ts ***!
  \****************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_currency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/currency.service */ "./src/app/core/services/currency.service.ts");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_services_today_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/today.service */ "./src/app/core/services/today.service.ts");
/* harmony import */ var _core_utils_date_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/utils/date-format */ "./src/app/core/utils/date-format.ts");
/* harmony import */ var _core_utils_month_range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/utils/month-range */ "./src/app/core/utils/month-range.ts");
/* harmony import */ var _core_utils_insights__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/utils/insights */ "./src/app/core/utils/insights.ts");
/* harmony import */ var _core_utils_percentages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/utils/percentages */ "./src/app/core/utils/percentages.ts");
/* harmony import */ var _core_utils_money__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/utils/money */ "./src/app/core/utils/money.ts");
/* harmony import */ var _monthly_bar_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./monthly-bar-chart */ "./src/app/pages/reports/monthly-bar-chart.ts");












/** Same stack as --bs-body-font-family, for the chart tooltips and drawn labels. */
var APP_FONT = '\'Plus Jakarta Sans\', system-ui, -apple-system, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, sans-serif';
/** Below md the charts use their compact (mobile) sizes and options. */
var MOBILE_QUERY = '(max-width: 767.98px)';
/** Bar spacing per layout: bars sit closer together on mobile. */
var BAR_SPACING = {
    desktop: { barPercentage: 0.7, categoryPercentage: 0.8 },
    mobile: { barPercentage: 0.8, categoryPercentage: 0.9 }
};
var CHART_MISSING_WARNING = 'Budgetly: Chart.js is not loaded, so the Reports charts are skipped. ' +
    'If angular.json "scripts" changed, restart `ng serve` (it does not reload angular.json).';
var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(dataService, host, cdr, today, currencyService) {
        var _this = this;
        this.dataService = dataService;
        this.host = host;
        this.cdr = cdr;
        this.today = today;
        this.currencyService = currencyService;
        this.compareOptions = [
            { value: 3, label: 'Last 3 months' },
            { value: 6, label: 'Last 6 months' },
            { value: 12, label: 'Last 12 months' }
        ];
        /** e.g. 'October 2026'. */
        this.monthLabel = '';
        /** Past months show the "View only" badge. */
        this.isPastMonth = false;
        /** Whether the selected month has any transactions (income or expense). */
        this.hasTransactions = true;
        /** Long name of the selected month / the month before it, e.g. 'November' / 'October'. */
        this.monthName = '';
        this.previousMonthName = '';
        /** False at the earliest selectable month: there is no previous month to view. */
        this.canViewPrevious = true;
        /** Categories with spending this month, highest first. */
        this.slices = [];
        this.totalSpent = 0;
        /** "Monthly spending": one bar per month in the compare range, oldest first. */
        this.monthBars = [];
        /** Mean expenses of the months in the range that have transactions (income-only months count as 0), or null if none do. */
        this.monthlyAverage = null;
        /** Biggest increase, biggest decrease and savings vs the previous month. */
        this.insights = [];
        /** True below md: 180px doughnut, shorter bars, compact labels and Compare trigger. */
        this.isMobile = false;
        /** Comparison range for "Monthly spending" (shared by the header and the in-card mobile dropdown). */
        this.compareSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](6);
        this.spendingCanvasRef = null;
        this.monthlyCanvasRef = null;
        /** Set once the view (and Chart.js) is ready; charts are only created after that. */
        this.chartsReady = false;
        this.chart = null;
        this.barChart = null;
        this.barColors = null;
        this.themeObserver = null;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.mobileQuery = null;
        this.onBreakpointChange = function () {
            var mobile = !!_this.mobileQuery && _this.mobileQuery.matches;
            if (mobile === _this.isMobile) {
                return;
            }
            _this.isMobile = mobile;
            _this.cdr.detectChanges();
            // Fixed-size doughnut: recreate it at the new size (works even while hidden for an empty month).
            if (_this.chart) {
                _this.chart.destroy();
                _this.chart = null;
                _this.createDoughnut();
            }
            _this.updateBarChart();
        };
    }
    Object.defineProperty(ReportsComponent.prototype, "spendingCanvas", {
        /**
         * The canvases come and go with the page state (cards hidden for empty months), so each chart is created
         * when its canvas appears and destroyed when it leaves (see syncCharts).
         */
        set: function (ref) {
            this.spendingCanvasRef = ref || null;
            this.syncCharts();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportsComponent.prototype, "monthlyCanvas", {
        set: function (ref) {
            this.monthlyCanvasRef = ref || null;
            this.syncCharts();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportsComponent.prototype, "isCurrentEmpty", {
        /** Current month with no transactions yet: only the empty-state card (no range selector or charts). */
        get: function () {
            return !this.isPastMonth && !this.hasTransactions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportsComponent.prototype, "isPastEmpty", {
        /** Past month with no transactions: the Monthly spending chart (dashed "No data" bar) + the empty card. */
        get: function () {
            return this.isPastMonth && !this.hasTransactions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportsComponent.prototype, "rangeNoDataText", {
        /** Past-empty subtitle, e.g. 'May to Oct 2026 · Oct has no data' (year on both ends across years). */
        get: function () {
            if (!this.monthBars.length) {
                return '';
            }
            var first = this.monthBars[0];
            var last = this.monthBars[this.monthBars.length - 1];
            var range = first.year === last.year
                ? first.shortName + ' to ' + last.shortName + ' ' + last.year
                : first.shortName + ' ' + first.year + ' to ' + last.shortName + ' ' + last.year;
            return range + ' · ' + last.shortName + ' has no data';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportsComponent.prototype, "doughnutSize", {
        /** Doughnut side length in px (canvas and its box). */
        get: function () {
            return this.isMobile ? 180 : 200;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportsComponent.prototype, "compareShortLabel", {
        /** Compact trigger text for the in-card mobile Compare, e.g. '6 months' (menu items keep the full text). */
        get: function () {
            return this.compareMonths + ' months';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportsComponent.prototype, "compareMonths", {
        get: function () {
            return this.compareSubject.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportsComponent.prototype, "compareLabel", {
        get: function () {
            var _this = this;
            var option = this.compareOptions.filter(function (o) { return o.value === _this.compareMonths; })[0];
            return option ? option.label : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportsComponent.prototype, "chartAriaLabel", {
        /** Text equivalent of the doughnut for screen readers. */
        get: function () {
            return 'Spending by category: ' + this.slices.map(function (s) { return s.name + ' ' + s.percentLabel; }).join(', ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportsComponent.prototype, "monthlyAriaLabel", {
        /** Text equivalent of the bar chart, e.g. 'Monthly spending, last 6 months: May $38,200, …, October $44,600 (selected)'. */
        get: function () {
            var currency = this.currencyService.currency;
            return 'Monthly spending, last ' + this.monthBars.length + ' months: ' +
                this.monthBars
                    .map(function (b) { return b.longName + ' ' + (b.hasData ? Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_10__["formatMoney"])(b.total, currency) : 'no data') + (b.selected ? ' (selected)' : ''); })
                    .join(', ');
        },
        enumerable: true,
        configurable: true
    });
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (typeof window.matchMedia === 'function') {
            this.mobileQuery = window.matchMedia(MOBILE_QUERY);
            this.isMobile = this.mobileQuery.matches;
        }
        // Spending and categories change with the month and with added/edited transactions or categories;
        // the currency only changes how amounts read (insights text, doughnut tooltip).
        this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.dataService.selectedMonth$, this.dataService.dataChanged$, this.currencyService.currency$)
            .subscribe(function (_a) {
            var selected = _a[0];
            _this.monthLabel = Object(_core_utils_date_format__WEBPACK_IMPORTED_MODULE_6__["formatMonthYear"])(selected.year, selected.month);
            _this.isPastMonth = !_this.today.isCurrentMonth(selected);
            _this.canViewPrevious = Object(_core_utils_month_range__WEBPACK_IMPORTED_MODULE_7__["monthIndex"])(selected) > Object(_core_utils_month_range__WEBPACK_IMPORTED_MODULE_7__["monthIndex"])(_this.dataService.getMinSelectableMonth());
            _this.hasTransactions = _this.dataService.getTransactionsForMonth(selected.year, selected.month).length > 0;
            _this.monthName = new Date(selected.year, selected.month - 1, 1).toLocaleDateString('en-US', { month: 'long' });
            // Month 0 rolls back to December of the previous year.
            _this.previousMonthName = new Date(selected.year, selected.month - 2, 1).toLocaleDateString('en-US', { month: 'long' });
            var spending = _this.dataService.getCategoryBudgets(selected.year, selected.month)
                .filter(function (b) { return b.spent > 0; })
                .sort(function (a, b) { return b.spent - a.spent; });
            var percents = Object(_core_utils_percentages__WEBPACK_IMPORTED_MODULE_9__["roundPercentages"])(spending.map(function (b) { return b.spent; }));
            _this.slices = spending.map(function (b, i) { return ({
                name: b.name,
                color: b.color,
                spent: b.spent,
                percent: percents[i],
                percentLabel: percents[i] === 0 ? '<1%' : percents[i] + '%'
            }); });
            _this.totalSpent = Math.round(spending.reduce(function (sum, b) { return sum + b.spent; }, 0) * 100) / 100;
            _this.updateChart();
            var previous = new Date(selected.year, selected.month - 2, 1);
            _this.insights = Object(_core_utils_insights__WEBPACK_IMPORTED_MODULE_8__["computeInsights"])(_this.dataService.getCategoryBudgets(selected.year, selected.month), _this.dataService.getCategoryBudgets(previous.getFullYear(), previous.getMonth() + 1), _this.dataService.getMonthSummary(selected.year, selected.month), previous.toLocaleDateString('en-US', { month: 'long' }), _this.currencyService.currency);
        }));
        // Monthly totals also depend on the compare range; a currency change redraws the bar labels.
        this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.dataService.selectedMonth$, this.dataService.dataChanged$, this.compareSubject, this.currencyService.currency$)
            .subscribe(function (_a) {
            var selected = _a[0], count = _a[2];
            var totals = _this.dataService.getMonthlyExpenseTotals(selected.year, selected.month, count);
            _this.monthBars = totals.map(function (t, i) {
                var date = new Date(t.year, t.month - 1, 1);
                return {
                    shortName: date.toLocaleDateString('en-US', { month: 'short' }),
                    year: t.year,
                    longName: date.toLocaleDateString('en-US', { month: 'long' }),
                    total: t.total,
                    hasData: t.hasData,
                    selected: i === totals.length - 1
                };
            });
            // Only months with transactions count (an income-only month counts as 0); no-data months are left out.
            var withData = totals.filter(function (t) { return t.hasData; });
            _this.monthlyAverage = withData.length
                ? Math.round(withData.reduce(function (sum, t) { return sum + t.total; }, 0) / withData.length)
                : null;
            _this.updateBarChart();
        }));
    };
    ReportsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Chart.js is a global script from angular.json; without it the page still shows the totals and lists.
        if (typeof Chart === 'undefined') {
            console.warn(CHART_MISSING_WARNING);
            return;
        }
        Object(_monthly_bar_chart__WEBPACK_IMPORTED_MODULE_11__["registerRoundedBar"])();
        this.barColors = Object(_monthly_bar_chart__WEBPACK_IMPORTED_MODULE_11__["readBarChartColors"])();
        this.chartsReady = true;
        this.syncCharts();
        if (this.mobileQuery) {
            this.toggleBreakpointListener(true);
        }
        // Re-colour the bar chart (whichever instance exists) when the light/dark toggle changes data-bs-theme.
        this.themeObserver = new MutationObserver(function () {
            _this.barColors = Object(_monthly_bar_chart__WEBPACK_IMPORTED_MODULE_11__["readBarChartColors"])();
            _this.updateBarChart();
        });
        this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme'] });
    };
    ReportsComponent.prototype.ngOnDestroy = function () {
        this.chartsReady = false;
        this.subscription.unsubscribe();
        if (this.mobileQuery) {
            this.toggleBreakpointListener(false);
            this.mobileQuery = null;
        }
        if (this.themeObserver) {
            this.themeObserver.disconnect();
            this.themeObserver = null;
        }
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
        if (this.barChart) {
            this.barChart.destroy();
            this.barChart = null;
        }
        // Bootstrap creates dropdown instances lazily on first click; release both with the page.
        if (typeof bootstrap === 'undefined') {
            return;
        }
        var toggles = this.host.nativeElement.querySelectorAll('[data-bs-toggle="dropdown"]');
        Array.prototype.forEach.call(toggles, function (toggle) {
            var instance = bootstrap.Dropdown.getInstance(toggle);
            if (instance) {
                instance.dispose();
            }
        });
    };
    ReportsComponent.prototype.setCompareMonths = function (value) {
        if (value !== this.compareMonths) {
            this.compareSubject.next(value);
        }
    };
    ReportsComponent.prototype.trackByName = function (index, slice) {
        return slice.name;
    };
    /** Current-empty card button: show last month's report (stays on /reports). */
    ReportsComponent.prototype.viewPreviousMonth = function () {
        this.dataService.previousMonth();
    };
    /** 'change' listener on the md media query; the old addListener API only for browsers without it (older Safari). */
    ReportsComponent.prototype.toggleBreakpointListener = function (add) {
        var query = this.mobileQuery;
        if (typeof query.addEventListener === 'function') {
            if (add) {
                query.addEventListener('change', this.onBreakpointChange);
            }
            else {
                query.removeEventListener('change', this.onBreakpointChange);
            }
        }
        else if (add) {
            query.addListener(this.onBreakpointChange);
        }
        else {
            query.removeListener(this.onBreakpointChange);
        }
    };
    /**
     * One chart per canvas that is in the DOM: destroys a chart whose canvas has gone (or been replaced)
     * and creates one for a canvas that has none. Safe to call any time; does nothing before the view is ready.
     */
    ReportsComponent.prototype.syncCharts = function () {
        if (!this.chartsReady) {
            return;
        }
        var spendingEl = this.spendingCanvasRef ? this.spendingCanvasRef.nativeElement : null;
        if (this.chart && this.chart.canvas !== spendingEl) {
            this.chart.destroy();
            this.chart = null;
        }
        if (!this.chart && spendingEl) {
            this.createDoughnut();
        }
        var monthlyEl = this.monthlyCanvasRef ? this.monthlyCanvasRef.nativeElement : null;
        if (this.barChart && this.barChart.canvas !== monthlyEl) {
            this.barChart.destroy();
            this.barChart = null;
        }
        if (!this.barChart && monthlyEl) {
            this.createBarChart();
        }
    };
    ReportsComponent.prototype.createDoughnut = function () {
        var _this = this;
        if (!this.spendingCanvasRef) {
            return;
        }
        // One instance per canvas, updated in place while the canvas exists.
        // Its fixed size comes from the canvas attributes, set here for the current breakpoint.
        var canvas = this.spendingCanvasRef.nativeElement;
        canvas.width = this.doughnutSize;
        canvas.height = this.doughnutSize;
        canvas.style.width = '';
        canvas.style.height = '';
        this.chart = new Chart(canvas, {
            type: 'doughnut',
            data: { labels: [], datasets: [{ data: [], backgroundColor: [], borderWidth: 0, hoverBorderWidth: 0 }] },
            options: {
                responsive: false,
                cutoutPercentage: 70,
                legend: { display: false },
                animation: { animateRotate: true, duration: 500 },
                tooltips: {
                    displayColors: true,
                    titleFontFamily: APP_FONT,
                    bodyFontFamily: APP_FONT,
                    callbacks: {
                        title: function () { return ''; },
                        label: function (item) {
                            var slice = _this.slices[item.index];
                            var amount = slice ? Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_10__["formatMoney"])(slice.spent, _this.currencyService.currency) : '';
                            return slice ? slice.name + ': ' + amount + ' (' + slice.percentLabel + ')' : '';
                        }
                    }
                }
            }
        });
        this.updateChart();
    };
    ReportsComponent.prototype.createBarChart = function () {
        var _this = this;
        if (!this.monthlyCanvasRef) {
            return;
        }
        this.barChart = new Chart(this.monthlyCanvasRef.nativeElement, {
            type: 'roundedBar',
            // Moderate, evenly spaced bars; capped so 3-month bars don't get huge.
            data: { labels: [], datasets: [{ data: [], backgroundColor: [], maxBarThickness: 36 }] },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: false },
                tooltips: { enabled: false },
                hover: { mode: null },
                animation: { duration: 400 },
                layout: { padding: { top: _monthly_bar_chart__WEBPACK_IMPORTED_MODULE_11__["BAR_LABEL_PADDING"].top, bottom: _monthly_bar_chart__WEBPACK_IMPORTED_MODULE_11__["BAR_LABEL_PADDING"].bottom, left: 0, right: 0 } },
                scales: {
                    xAxes: [{ display: false }],
                    yAxes: [{ display: false, ticks: { beginAtZero: true, min: 0 } }]
                }
            },
            // Baseline, amount labels, month labels and dashed "No data" bars (dataset.noData);
            // colours read at draw time so theme changes apply.
            plugins: [Object(_monthly_bar_chart__WEBPACK_IMPORTED_MODULE_11__["monthlyLabelsPlugin"])(function () { return _this.barColors || Object(_monthly_bar_chart__WEBPACK_IMPORTED_MODULE_11__["readBarChartColors"])(); }, APP_FONT, function () { return _this.isMobile; }, function () { return _this.currencyService.currency; })]
        });
        this.updateBarChart();
    };
    /** Updates the doughnut in place (labels, values, colours). */
    ReportsComponent.prototype.updateChart = function () {
        if (!this.chart) {
            return;
        }
        this.chart.data.labels = this.slices.map(function (s) { return s.name; });
        var dataset = this.chart.data.datasets[0];
        dataset.data = this.slices.map(function (s) { return s.spent; });
        dataset.backgroundColor = this.slices.map(function (s) { return s.color; });
        dataset.hoverBackgroundColor = this.slices.map(function (s) { return s.color; });
        this.chart.update();
    };
    /** Updates the bar chart in place: bar count (3/6/12), values, colours (selected month = accent) and mobile spacing. */
    ReportsComponent.prototype.updateBarChart = function () {
        if (!this.barChart) {
            return;
        }
        var colors = this.barColors || Object(_monthly_bar_chart__WEBPACK_IMPORTED_MODULE_11__["readBarChartColors"])();
        this.barChart.data.labels = this.monthBars.map(function (b) { return b.shortName; });
        var dataset = this.barChart.data.datasets[0];
        dataset.data = this.monthBars.map(function (b) { return b.total; });
        // Read by monthlyLabelsPlugin: months with no transactions get a dashed "No data" bar.
        dataset.noData = this.monthBars.map(function (b) { return !b.hasData; });
        dataset.backgroundColor = this.monthBars.map(function (b) { return b.selected ? colors.accent : colors.muted; });
        dataset.hoverBackgroundColor = dataset.backgroundColor;
        var spacing = this.isMobile ? BAR_SPACING.mobile : BAR_SPACING.desktop;
        dataset.barPercentage = spacing.barPercentage;
        dataset.categoryPercentage = spacing.categoryPercentage;
        this.barChart.update();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('spendingCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ReportsComponent.prototype, "spendingCanvas", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('monthlyCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ReportsComponent.prototype, "monthlyCanvas", null);
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/pages/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/pages/reports/reports.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _core_services_today_service__WEBPACK_IMPORTED_MODULE_5__["TodayService"], _core_services_currency_service__WEBPACK_IMPORTED_MODULE_3__["CurrencyService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/pages/transactions/transactions.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/transactions/transactions.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".min-w-0 {\n  min-width: 0;\n}\n\n/* Header button never shrinks; below md it becomes a 42x42 icon-only square. */\n\n.btn-add-responsive {\n  flex-shrink: 0;\n}\n\n@media (max-width: 767.98px) {\n  .btn-add-responsive {\n    width: 42px;\n    padding: 0;\n    font-size: 1.25rem;\n  }\n}\n\n/* Search: clear button on the right, inside the field. */\n\n.search-field {\n  position: relative;\n}\n\n/* Left padding matches the dropdown triggers; right leaves room for the clear button. */\n\n.search-input {\n  padding-left: 0.875rem;\n  padding-right: 2.75rem;\n}\n\n/* Hide the browser's own clear button so there is only one ×. */\n\n.search-input::-webkit-search-cancel-button,\n.search-input::-webkit-search-decoration {\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.search-clear {\n  position: absolute;\n  top: 50%;\n  right: 0.5rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: 0;\n  border-radius: 50%;\n  background: transparent;\n  color: var(--bs-secondary-color);\n  font-size: 0.75rem;\n  transform: translateY(-50%);\n}\n\n.search-clear:hover {\n  background-color: var(--bs-tertiary-bg);\n  color: var(--bs-body-color);\n}\n\n/* Category pills: wrap on wider screens, one sideways-scrolling row on mobile. */\n\n.pill-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.filter-pill {\n  flex-shrink: 0;\n  padding: 0.35rem 0.9rem;\n}\n\n.filter-pill-idle {\n  --bs-btn-color: var(--bs-secondary-color);\n  --bs-btn-border-color: var(--bs-border-color);\n  --bs-btn-hover-color: var(--bs-body-color);\n  --bs-btn-hover-bg: var(--bs-tertiary-bg);\n  --bs-btn-hover-border-color: var(--bs-border-color);\n  --bs-btn-active-color: var(--bs-body-color);\n  --bs-btn-active-bg: var(--bs-tertiary-bg);\n  --bs-btn-active-border-color: var(--bs-border-color);\n  --bs-btn-focus-shadow-rgb: var(--bs-primary-rgb);\n}\n\n@media (max-width: 767.98px) {\n  .pill-row {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    /* Room for focus rings and an 8px gap above the scrollbar, pulled back to keep alignment. */\n    padding: 4px 4px 8px;\n    margin: -4px -4px -8px;\n  }\n\n  /*\n   * Visible thin scrollbar hints that more pills are off-screen.\n   * Firefox: standard properties, limited to Firefox (-moz-appearance) because Chrome 121+\n   * ignores the ::-webkit-scrollbar rules below once scrollbar-width/color are set.\n   */\n  @supports (-moz-appearance: none) {\n    .pill-row {\n      scrollbar-width: thin;\n      scrollbar-color: rgba(var(--bs-emphasis-color-rgb), 0.25) transparent;\n    }\n  }\n\n  /* WebKit/Blink: 4px track, rounded muted thumb. */\n  .pill-row::-webkit-scrollbar {\n    height: 4px;\n  }\n\n  .pill-row::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  .pill-row::-webkit-scrollbar-thumb {\n    border-radius: 4px;\n    background-color: rgba(var(--bs-emphasis-color-rgb), 0.25);\n  }\n}\n\n/* Results card: no horizontal padding, so row hover tints span the card; the first/last\n   cells (and the mobile list) provide the same 1.25rem inset as .app-card. */\n\n.results-card {\n  padding: 0.5rem 0;\n}\n\n/* Table: transparent over the card surface, lines between rows only. */\n\n.txn-table {\n  --bs-table-bg: transparent;\n  --bs-table-color: var(--bs-body-color);\n  --bs-table-hover-color: var(--bs-body-color);\n  --bs-table-hover-bg: rgba(var(--bs-emphasis-color-rgb), 0.035);\n  --bs-table-border-color: var(--bs-border-color);\n}\n\n.txn-table th,\n.txn-table td {\n  padding: 0.75rem;\n}\n\n.txn-table th:first-child,\n.txn-table td:first-child {\n  padding-left: 1.25rem;\n}\n\n.txn-table th:last-child,\n.txn-table td:last-child {\n  padding-right: 1.25rem;\n}\n\n.txn-table th {\n  color: var(--bs-secondary-color);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n.txn-table tbody tr:last-child > td {\n  border-bottom-width: 0;\n}\n\n.cell-date {\n  color: var(--bs-secondary-color);\n  white-space: nowrap;\n}\n\n.cell-description {\n  font-weight: 600;\n}\n\n/*\n * Long descriptions and category names truncate (title tooltip) at these caps instead of widening the table.\n * The caps step down so the worst case (24-char category, long description, −₹99,99,999, Actions) still fits\n * the card at every width from 768 up; Date, Amount and Actions keep their natural width. Normal values stay\n * under the caps, so the even-gap column sizing below is unchanged for them.\n */\n\n.cell-description .text-truncate {\n  max-width: 15rem;\n}\n\n.category-cell {\n  display: flex;\n  align-items: center;\n  max-width: 12rem;\n}\n\n.category-name {\n  min-width: 0;\n}\n\n/* 1200-1399px with the sidebar. */\n\n@media (max-width: 1399.98px) {\n  .cell-description .text-truncate {\n    max-width: 13rem;\n  }\n\n  .category-cell {\n    max-width: 10.5rem;\n  }\n}\n\n/* 992-1199px with the sidebar: the least room for the table. */\n\n@media (max-width: 1199.98px) {\n  .cell-description .text-truncate {\n    max-width: 8rem;\n  }\n\n  .category-cell {\n    max-width: 8rem;\n  }\n}\n\n/* 768-991px: no sidebar, a little more room again. */\n\n@media (max-width: 991.98px) {\n  .cell-description .text-truncate {\n    max-width: 9.5rem;\n  }\n\n  .category-cell {\n    max-width: 8.5rem;\n  }\n}\n\n.cell-category {\n  white-space: nowrap;\n}\n\n.category-dot {\n  display: inline-block;\n  flex-shrink: 0;\n  width: 8px;\n  height: 8px;\n  margin-right: 0.5rem;\n  border-radius: 50%;\n  background-color: var(--bs-secondary-color);\n  vertical-align: middle;\n}\n\n.cell-amount {\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.cell-amount.is-income {\n  color: var(--amount-income);\n}\n\n.cell-actions {\n  white-space: nowrap;\n}\n\n/*\n * Even gaps between columns: every column is sized to its content (tiny % widths), and Chrome\n * hands the table's spare width to percentage columns in proportion to their percentages.\n * Each gap gets one share: Category and Amount get half a share each because they share one gap\n * (Amount is right-aligned, so its spare room sits on its left). Without the Actions column\n * (past months) the same shares give Date | Description | Category | Amount three even gaps.\n */\n\n.col-date,\n.col-description,\n.col-actions {\n  width: 1%;\n}\n\n.col-category,\n.col-amount {\n  width: 0.5%;\n}\n\n/* Icon-only row actions: muted, 32px hit area, tertiary hover (focus ring from styles.css). */\n\n.row-action {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  border: 0;\n  border-radius: var(--bs-border-radius);\n  background: transparent;\n  color: var(--bs-secondary-color);\n}\n\n.row-action:hover {\n  background-color: var(--bs-tertiary-bg);\n  color: var(--bs-body-color);\n}\n\n/* Mobile list: shared .txn-* row styles (styles.css); description semi-bold here. */\n\n.txn-mobile-list {\n  padding: 0 1.25rem;\n}\n\n/* Row spacing is split between the li (0.25rem) and the button (0.5rem) so it still totals 0.75rem. */\n\n.txn-mobile-list li {\n  padding: 0.25rem 0;\n}\n\n/* Full-row edit button: reset to look like plain row content. It extends 0.5rem past the\n   text on each side so the hover tint and the (inset) focus ring have room inside the card. */\n\n.txn-row-button {\n  width: calc(100% + 1rem);\n  margin: 0 -0.5rem;\n  padding: 0.5rem;\n  border: 0;\n  border-radius: var(--bs-border-radius);\n  background: transparent;\n  color: inherit;\n  font: inherit;\n}\n\n.txn-row-button:hover,\n.txn-row-button:active {\n  background-color: rgba(var(--bs-emphasis-color-rgb), 0.035);\n}\n\n/* The row sits flush inside the card list: its focus ring is drawn just inside the row. */\n\n.txn-row-button {\n  --focus-ring-offset: -2px;\n}\n\n/* Past months: the same row, as plain content (no hover or focus). */\n\n.txn-row-static {\n  padding: 0.5rem 0;\n}\n\n.txn-mobile-list .txn-description {\n  font-weight: 600;\n}\n\n/* Month selector: its own full-width line below md; between the title and the button from md up. */\n\n.header-month {\n  flex: 0 0 100%;\n}\n\n@media (min-width: 768px) {\n  .header-month {\n    flex: 0 0 auto;\n  }\n}\n\n/* \"View only\" (past months): own line below the selector below md, 8px under it (header gap is 16px). */\n\n.header-badge {\n  flex: 0 0 100%;\n  margin-top: -8px;\n}\n\n@media (min-width: 768px) {\n  .header-badge {\n    flex: 0 0 auto;\n    margin-top: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLCtFQUErRTs7QUFDL0U7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBLHlEQUF5RDs7QUFDekQ7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsd0ZBQXdGOztBQUN4RjtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUEsZ0VBQWdFOztBQUNoRTs7RUFFRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsMkJBQTJCO0FBQzdCOztBQUVBLGlGQUFpRjs7QUFDakY7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsNkNBQTZDO0VBQzdDLDBDQUEwQztFQUMxQyx3Q0FBd0M7RUFDeEMsbURBQW1EO0VBQ25ELDJDQUEyQztFQUMzQyx5Q0FBeUM7RUFDekMsb0RBQW9EO0VBQ3BELGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsNEZBQTRGO0lBQzVGLG9CQUFvQjtJQUNwQixzQkFBc0I7RUFDeEI7O0VBRUE7Ozs7SUFJRTtFQUNGO0lBQ0U7TUFDRSxxQkFBcUI7TUFDckIscUVBQXFFO0lBQ3ZFO0VBQ0Y7O0VBRUEsa0RBQWtEO0VBQ2xEO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLDBEQUEwRDtFQUM1RDtBQUNGOztBQUVBOzZFQUM2RTs7QUFDN0U7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsdUVBQXVFOztBQUN2RTtFQUNFLDBCQUEwQjtFQUMxQixzQ0FBc0M7RUFDdEMsNENBQTRDO0VBQzVDLDhEQUE4RDtFQUM5RCwrQ0FBK0M7QUFDakQ7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7OztFQUtFOztBQUNGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsa0NBQWtDOztBQUNsQztFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsK0RBQStEOztBQUMvRDtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxxREFBcUQ7O0FBQ3JEO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7Ozs7O0VBTUU7O0FBQ0Y7OztFQUdFLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUEsOEZBQThGOztBQUM5RjtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxzQ0FBc0M7RUFDdEMsdUJBQXVCO0VBQ3ZCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QywyQkFBMkI7QUFDN0I7O0FBRUEsb0ZBQW9GOztBQUNwRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxzR0FBc0c7O0FBQ3RHO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOzhGQUM4Rjs7QUFDOUY7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixTQUFTO0VBQ1Qsc0NBQXNDO0VBQ3RDLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBOztFQUVFLDJEQUEyRDtBQUM3RDs7QUFFQSwwRkFBMEY7O0FBQzFGO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLHFFQUFxRTs7QUFDckU7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsbUdBQW1HOztBQUNuRztFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQSx3R0FBd0c7O0FBQ3hHO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pbi13LTAge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi8qIEhlYWRlciBidXR0b24gbmV2ZXIgc2hyaW5rczsgYmVsb3cgbWQgaXQgYmVjb21lcyBhIDQyeDQyIGljb24tb25seSBzcXVhcmUuICovXG4uYnRuLWFkZC1yZXNwb25zaXZlIHtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAuYnRuLWFkZC1yZXNwb25zaXZlIHtcbiAgICB3aWR0aDogNDJweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuXG4vKiBTZWFyY2g6IGNsZWFyIGJ1dHRvbiBvbiB0aGUgcmlnaHQsIGluc2lkZSB0aGUgZmllbGQuICovXG4uc2VhcmNoLWZpZWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBMZWZ0IHBhZGRpbmcgbWF0Y2hlcyB0aGUgZHJvcGRvd24gdHJpZ2dlcnM7IHJpZ2h0IGxlYXZlcyByb29tIGZvciB0aGUgY2xlYXIgYnV0dG9uLiAqL1xuLnNlYXJjaC1pbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogMC44NzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDIuNzVyZW07XG59XG5cbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBvd24gY2xlYXIgYnV0dG9uIHNvIHRoZXJlIGlzIG9ubHkgb25lIMOXLiAqL1xuLnNlYXJjaC1pbnB1dDo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbi5zZWFyY2gtaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5zZWFyY2gtY2xlYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogMC41cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWJzLXNlY29uZGFyeS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uc2VhcmNoLWNsZWFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtdGVydGlhcnktYmcpO1xuICBjb2xvcjogdmFyKC0tYnMtYm9keS1jb2xvcik7XG59XG5cbi8qIENhdGVnb3J5IHBpbGxzOiB3cmFwIG9uIHdpZGVyIHNjcmVlbnMsIG9uZSBzaWRld2F5cy1zY3JvbGxpbmcgcm93IG9uIG1vYmlsZS4gKi9cbi5waWxsLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5maWx0ZXItcGlsbCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuOXJlbTtcbn1cblxuLmZpbHRlci1waWxsLWlkbGUge1xuICAtLWJzLWJ0bi1jb2xvcjogdmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgLS1icy1idG4tYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1ib3JkZXItY29sb3IpO1xuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogdmFyKC0tYnMtYm9keS1jb2xvcik7XG4gIC0tYnMtYnRuLWhvdmVyLWJnOiB2YXIoLS1icy10ZXJ0aWFyeS1iZyk7XG4gIC0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvcjogdmFyKC0tYnMtYm9yZGVyLWNvbG9yKTtcbiAgLS1icy1idG4tYWN0aXZlLWNvbG9yOiB2YXIoLS1icy1ib2R5LWNvbG9yKTtcbiAgLS1icy1idG4tYWN0aXZlLWJnOiB2YXIoLS1icy10ZXJ0aWFyeS1iZyk7XG4gIC0tYnMtYnRuLWFjdGl2ZS1ib3JkZXItY29sb3I6IHZhcigtLWJzLWJvcmRlci1jb2xvcik7XG4gIC0tYnMtYnRuLWZvY3VzLXNoYWRvdy1yZ2I6IHZhcigtLWJzLXByaW1hcnktcmdiKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5waWxsLXJvdyB7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgLyogUm9vbSBmb3IgZm9jdXMgcmluZ3MgYW5kIGFuIDhweCBnYXAgYWJvdmUgdGhlIHNjcm9sbGJhciwgcHVsbGVkIGJhY2sgdG8ga2VlcCBhbGlnbm1lbnQuICovXG4gICAgcGFkZGluZzogNHB4IDRweCA4cHg7XG4gICAgbWFyZ2luOiAtNHB4IC00cHggLThweDtcbiAgfVxuXG4gIC8qXG4gICAqIFZpc2libGUgdGhpbiBzY3JvbGxiYXIgaGludHMgdGhhdCBtb3JlIHBpbGxzIGFyZSBvZmYtc2NyZWVuLlxuICAgKiBGaXJlZm94OiBzdGFuZGFyZCBwcm9wZXJ0aWVzLCBsaW1pdGVkIHRvIEZpcmVmb3ggKC1tb3otYXBwZWFyYW5jZSkgYmVjYXVzZSBDaHJvbWUgMTIxK1xuICAgKiBpZ25vcmVzIHRoZSA6Oi13ZWJraXQtc2Nyb2xsYmFyIHJ1bGVzIGJlbG93IG9uY2Ugc2Nyb2xsYmFyLXdpZHRoL2NvbG9yIGFyZSBzZXQuXG4gICAqL1xuICBAc3VwcG9ydHMgKC1tb3otYXBwZWFyYW5jZTogbm9uZSkge1xuICAgIC5waWxsLXJvdyB7XG4gICAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gICAgICBzY3JvbGxiYXItY29sb3I6IHJnYmEodmFyKC0tYnMtZW1waGFzaXMtY29sb3ItcmdiKSwgMC4yNSkgdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgLyogV2ViS2l0L0JsaW5rOiA0cHggdHJhY2ssIHJvdW5kZWQgbXV0ZWQgdGh1bWIuICovXG4gIC5waWxsLXJvdzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogNHB4O1xuICB9XG5cbiAgLnBpbGwtcm93Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAucGlsbC1yb3c6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1icy1lbXBoYXNpcy1jb2xvci1yZ2IpLCAwLjI1KTtcbiAgfVxufVxuXG4vKiBSZXN1bHRzIGNhcmQ6IG5vIGhvcml6b250YWwgcGFkZGluZywgc28gcm93IGhvdmVyIHRpbnRzIHNwYW4gdGhlIGNhcmQ7IHRoZSBmaXJzdC9sYXN0XG4gICBjZWxscyAoYW5kIHRoZSBtb2JpbGUgbGlzdCkgcHJvdmlkZSB0aGUgc2FtZSAxLjI1cmVtIGluc2V0IGFzIC5hcHAtY2FyZC4gKi9cbi5yZXN1bHRzLWNhcmQge1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cblxuLyogVGFibGU6IHRyYW5zcGFyZW50IG92ZXIgdGhlIGNhcmQgc3VyZmFjZSwgbGluZXMgYmV0d2VlbiByb3dzIG9ubHkuICovXG4udHhuLXRhYmxlIHtcbiAgLS1icy10YWJsZS1iZzogdHJhbnNwYXJlbnQ7XG4gIC0tYnMtdGFibGUtY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IpO1xuICAtLWJzLXRhYmxlLWhvdmVyLWNvbG9yOiB2YXIoLS1icy1ib2R5LWNvbG9yKTtcbiAgLS1icy10YWJsZS1ob3Zlci1iZzogcmdiYSh2YXIoLS1icy1lbXBoYXNpcy1jb2xvci1yZ2IpLCAwLjAzNSk7XG4gIC0tYnMtdGFibGUtYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1ib3JkZXItY29sb3IpO1xufVxuXG4udHhuLXRhYmxlIHRoLFxuLnR4bi10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59XG5cbi50eG4tdGFibGUgdGg6Zmlyc3QtY2hpbGQsXG4udHhuLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xufVxuXG4udHhuLXRhYmxlIHRoOmxhc3QtY2hpbGQsXG4udHhuLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xufVxuXG4udHhuLXRhYmxlIHRoIHtcbiAgY29sb3I6IHZhcigtLWJzLXNlY29uZGFyeS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udHhuLXRhYmxlIHRib2R5IHRyOmxhc3QtY2hpbGQgPiB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5jZWxsLWRhdGUge1xuICBjb2xvcjogdmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNlbGwtZGVzY3JpcHRpb24ge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vKlxuICogTG9uZyBkZXNjcmlwdGlvbnMgYW5kIGNhdGVnb3J5IG5hbWVzIHRydW5jYXRlICh0aXRsZSB0b29sdGlwKSBhdCB0aGVzZSBjYXBzIGluc3RlYWQgb2Ygd2lkZW5pbmcgdGhlIHRhYmxlLlxuICogVGhlIGNhcHMgc3RlcCBkb3duIHNvIHRoZSB3b3JzdCBjYXNlICgyNC1jaGFyIGNhdGVnb3J5LCBsb25nIGRlc2NyaXB0aW9uLCDiiJLigrk5OSw5OSw5OTksIEFjdGlvbnMpIHN0aWxsIGZpdHNcbiAqIHRoZSBjYXJkIGF0IGV2ZXJ5IHdpZHRoIGZyb20gNzY4IHVwOyBEYXRlLCBBbW91bnQgYW5kIEFjdGlvbnMga2VlcCB0aGVpciBuYXR1cmFsIHdpZHRoLiBOb3JtYWwgdmFsdWVzIHN0YXlcbiAqIHVuZGVyIHRoZSBjYXBzLCBzbyB0aGUgZXZlbi1nYXAgY29sdW1uIHNpemluZyBiZWxvdyBpcyB1bmNoYW5nZWQgZm9yIHRoZW0uXG4gKi9cbi5jZWxsLWRlc2NyaXB0aW9uIC50ZXh0LXRydW5jYXRlIHtcbiAgbWF4LXdpZHRoOiAxNXJlbTtcbn1cblxuLmNhdGVnb3J5LWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEycmVtO1xufVxuXG4uY2F0ZWdvcnktbmFtZSB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLyogMTIwMC0xMzk5cHggd2l0aCB0aGUgc2lkZWJhci4gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzk5Ljk4cHgpIHtcbiAgLmNlbGwtZGVzY3JpcHRpb24gLnRleHQtdHJ1bmNhdGUge1xuICAgIG1heC13aWR0aDogMTNyZW07XG4gIH1cblxuICAuY2F0ZWdvcnktY2VsbCB7XG4gICAgbWF4LXdpZHRoOiAxMC41cmVtO1xuICB9XG59XG5cbi8qIDk5Mi0xMTk5cHggd2l0aCB0aGUgc2lkZWJhcjogdGhlIGxlYXN0IHJvb20gZm9yIHRoZSB0YWJsZS4gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmNlbGwtZGVzY3JpcHRpb24gLnRleHQtdHJ1bmNhdGUge1xuICAgIG1heC13aWR0aDogOHJlbTtcbiAgfVxuXG4gIC5jYXRlZ29yeS1jZWxsIHtcbiAgICBtYXgtd2lkdGg6IDhyZW07XG4gIH1cbn1cblxuLyogNzY4LTk5MXB4OiBubyBzaWRlYmFyLCBhIGxpdHRsZSBtb3JlIHJvb20gYWdhaW4uICovXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLmNlbGwtZGVzY3JpcHRpb24gLnRleHQtdHJ1bmNhdGUge1xuICAgIG1heC13aWR0aDogOS41cmVtO1xuICB9XG5cbiAgLmNhdGVnb3J5LWNlbGwge1xuICAgIG1heC13aWR0aDogOC41cmVtO1xuICB9XG59XG5cbi5jZWxsLWNhdGVnb3J5IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNhdGVnb3J5LWRvdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1zZWNvbmRhcnktY29sb3IpO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY2VsbC1hbW91bnQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2VsbC1hbW91bnQuaXMtaW5jb21lIHtcbiAgY29sb3I6IHZhcigtLWFtb3VudC1pbmNvbWUpO1xufVxuXG4uY2VsbC1hY3Rpb25zIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLypcbiAqIEV2ZW4gZ2FwcyBiZXR3ZWVuIGNvbHVtbnM6IGV2ZXJ5IGNvbHVtbiBpcyBzaXplZCB0byBpdHMgY29udGVudCAodGlueSAlIHdpZHRocyksIGFuZCBDaHJvbWVcbiAqIGhhbmRzIHRoZSB0YWJsZSdzIHNwYXJlIHdpZHRoIHRvIHBlcmNlbnRhZ2UgY29sdW1ucyBpbiBwcm9wb3J0aW9uIHRvIHRoZWlyIHBlcmNlbnRhZ2VzLlxuICogRWFjaCBnYXAgZ2V0cyBvbmUgc2hhcmU6IENhdGVnb3J5IGFuZCBBbW91bnQgZ2V0IGhhbGYgYSBzaGFyZSBlYWNoIGJlY2F1c2UgdGhleSBzaGFyZSBvbmUgZ2FwXG4gKiAoQW1vdW50IGlzIHJpZ2h0LWFsaWduZWQsIHNvIGl0cyBzcGFyZSByb29tIHNpdHMgb24gaXRzIGxlZnQpLiBXaXRob3V0IHRoZSBBY3Rpb25zIGNvbHVtblxuICogKHBhc3QgbW9udGhzKSB0aGUgc2FtZSBzaGFyZXMgZ2l2ZSBEYXRlIHwgRGVzY3JpcHRpb24gfCBDYXRlZ29yeSB8IEFtb3VudCB0aHJlZSBldmVuIGdhcHMuXG4gKi9cbi5jb2wtZGF0ZSxcbi5jb2wtZGVzY3JpcHRpb24sXG4uY29sLWFjdGlvbnMge1xuICB3aWR0aDogMSU7XG59XG5cbi5jb2wtY2F0ZWdvcnksXG4uY29sLWFtb3VudCB7XG4gIHdpZHRoOiAwLjUlO1xufVxuXG4vKiBJY29uLW9ubHkgcm93IGFjdGlvbnM6IG11dGVkLCAzMnB4IGhpdCBhcmVhLCB0ZXJ0aWFyeSBob3ZlciAoZm9jdXMgcmluZyBmcm9tIHN0eWxlcy5jc3MpLiAqL1xuLnJvdy1hY3Rpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnMtYm9yZGVyLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLnJvdy1hY3Rpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy10ZXJ0aWFyeS1iZyk7XG4gIGNvbG9yOiB2YXIoLS1icy1ib2R5LWNvbG9yKTtcbn1cblxuLyogTW9iaWxlIGxpc3Q6IHNoYXJlZCAudHhuLSogcm93IHN0eWxlcyAoc3R5bGVzLmNzcyk7IGRlc2NyaXB0aW9uIHNlbWktYm9sZCBoZXJlLiAqL1xuLnR4bi1tb2JpbGUtbGlzdCB7XG4gIHBhZGRpbmc6IDAgMS4yNXJlbTtcbn1cblxuLyogUm93IHNwYWNpbmcgaXMgc3BsaXQgYmV0d2VlbiB0aGUgbGkgKDAuMjVyZW0pIGFuZCB0aGUgYnV0dG9uICgwLjVyZW0pIHNvIGl0IHN0aWxsIHRvdGFscyAwLjc1cmVtLiAqL1xuLnR4bi1tb2JpbGUtbGlzdCBsaSB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMDtcbn1cblxuLyogRnVsbC1yb3cgZWRpdCBidXR0b246IHJlc2V0IHRvIGxvb2sgbGlrZSBwbGFpbiByb3cgY29udGVudC4gSXQgZXh0ZW5kcyAwLjVyZW0gcGFzdCB0aGVcbiAgIHRleHQgb24gZWFjaCBzaWRlIHNvIHRoZSBob3ZlciB0aW50IGFuZCB0aGUgKGluc2V0KSBmb2N1cyByaW5nIGhhdmUgcm9vbSBpbnNpZGUgdGhlIGNhcmQuICovXG4udHhuLXJvdy1idXR0b24ge1xuICB3aWR0aDogY2FsYygxMDAlICsgMXJlbSk7XG4gIG1hcmdpbjogMCAtMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnMtYm9yZGVyLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuLnR4bi1yb3ctYnV0dG9uOmhvdmVyLFxuLnR4bi1yb3ctYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tYnMtZW1waGFzaXMtY29sb3ItcmdiKSwgMC4wMzUpO1xufVxuXG4vKiBUaGUgcm93IHNpdHMgZmx1c2ggaW5zaWRlIHRoZSBjYXJkIGxpc3Q6IGl0cyBmb2N1cyByaW5nIGlzIGRyYXduIGp1c3QgaW5zaWRlIHRoZSByb3cuICovXG4udHhuLXJvdy1idXR0b24ge1xuICAtLWZvY3VzLXJpbmctb2Zmc2V0OiAtMnB4O1xufVxuXG4vKiBQYXN0IG1vbnRoczogdGhlIHNhbWUgcm93LCBhcyBwbGFpbiBjb250ZW50IChubyBob3ZlciBvciBmb2N1cykuICovXG4udHhuLXJvdy1zdGF0aWMge1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cblxuLnR4bi1tb2JpbGUtbGlzdCAudHhuLWRlc2NyaXB0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogTW9udGggc2VsZWN0b3I6IGl0cyBvd24gZnVsbC13aWR0aCBsaW5lIGJlbG93IG1kOyBiZXR3ZWVuIHRoZSB0aXRsZSBhbmQgdGhlIGJ1dHRvbiBmcm9tIG1kIHVwLiAqL1xuLmhlYWRlci1tb250aCB7XG4gIGZsZXg6IDAgMCAxMDAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlci1tb250aCB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gIH1cbn1cblxuLyogXCJWaWV3IG9ubHlcIiAocGFzdCBtb250aHMpOiBvd24gbGluZSBiZWxvdyB0aGUgc2VsZWN0b3IgYmVsb3cgbWQsIDhweCB1bmRlciBpdCAoaGVhZGVyIGdhcCBpcyAxNnB4KS4gKi9cbi5oZWFkZXItYmFkZ2Uge1xuICBmbGV4OiAwIDAgMTAwJTtcbiAgbWFyZ2luLXRvcDogLThweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXItYmFkZ2Uge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/transactions/transactions.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/transactions/transactions.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- One subscription: the header count and the table share the same filtered result.\n     The streams are BehaviorSubject-based, so this emits synchronously on first render. -->\n<ng-container *ngIf=\"view$ | async as view\">\n<!-- md and up: title | month selector | + Add transaction. Below md: title | square \"+\", then the selector on its own line.\n     Past months: no add button; \"View only\" left of the selector from md up, or on its own line below the selector below md. -->\n<header class=\"d-flex flex-wrap flex-md-nowrap align-items-center gap-3\">\n  <div class=\"min-w-0 me-auto\">\n    <h1 class=\"h3 mb-1\">Transactions</h1>\n    <p class=\"text-body-secondary small mb-0\">\n      {{ view.monthLabel }}<span class=\"meta-dot\" aria-hidden=\"true\"></span><span class=\"text-nowrap\" aria-live=\"polite\" [ngPlural]=\"view.rows.length\">\n        <ng-template ngPluralCase=\"=1\">1 transaction</ng-template>\n        <ng-template ngPluralCase=\"other\">{{ view.rows.length }} transactions</ng-template>\n      </span>\n    </p>\n  </div>\n\n  <app-view-only-badge class=\"header-badge order-last order-md-0\" *ngIf=\"!view.canAdd\"></app-view-only-badge>\n\n  <app-month-selector class=\"header-month order-5 order-md-0\"></app-month-selector>\n\n  <!-- Icon-only square below md; full label from md up. Current month with transactions only\n       (an empty current month has the button in its empty-state card instead). -->\n  <button type=\"button\" class=\"btn btn-primary btn-add btn-add-responsive\" aria-label=\"Add transaction\"\n          *ngIf=\"view.canAdd && view.monthHasTransactions\" (click)=\"addTxn.open()\">\n    <i class=\"bi bi-plus-lg\" aria-hidden=\"true\"></i>\n    <span class=\"d-none d-md-inline\">Add transaction</span>\n  </button>\n</header>\n\n<!-- Filters, list and the mobile hint only when the month has transactions; otherwise one empty-state card. -->\n<ng-container *ngIf=\"view.monthHasTransactions; else monthEmpty\">\n<section class=\"app-card mt-4\" aria-label=\"Filters\">\n  <div class=\"row g-3\">\n    <!-- Search -->\n    <div class=\"col-12 col-md-6\">\n      <label class=\"form-label small fw-semibold text-body-secondary\" for=\"txn-search\">Search</label>\n      <div class=\"search-field\">\n        <input #searchInput id=\"txn-search\" type=\"search\" class=\"form-control filter-control search-input\"\n               placeholder=\"Search description or category\" autocomplete=\"off\"\n               [value]=\"filters.query\" (input)=\"setQuery($event.target.value)\">\n        <button type=\"button\" class=\"search-clear\" aria-label=\"Clear search\"\n                *ngIf=\"filters.query\" (click)=\"clearSearch()\">\n          <i class=\"bi bi-x-lg\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n\n    <!-- Type -->\n    <div class=\"col-6 col-md-3\">\n      <label class=\"form-label small fw-semibold text-body-secondary\" for=\"txn-type\">Type</label>\n      <div class=\"dropdown\">\n        <button id=\"txn-type\" type=\"button\" class=\"filter-control filter-select dropdown-toggle\"\n                data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n          <span class=\"text-truncate\">{{ typeLabel }}</span>\n        </button>\n        <ul class=\"dropdown-menu filter-menu\" aria-labelledby=\"txn-type\">\n          <li *ngFor=\"let option of typeOptions\">\n            <button type=\"button\" class=\"dropdown-item\" [class.active]=\"option.value === filters.type\"\n                    [attr.aria-current]=\"option.value === filters.type ? 'true' : null\"\n                    (click)=\"setType(option.value)\">\n              <span class=\"d-block fw-semibold\">{{ option.label }}</span>\n              <small class=\"dropdown-item-desc\">{{ option.description }}</small>\n            </button>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <!-- Sort by -->\n    <div class=\"col-6 col-md-3\">\n      <label class=\"form-label small fw-semibold text-body-secondary\" for=\"txn-sort\">Sort by</label>\n      <div class=\"dropdown\">\n        <button id=\"txn-sort\" type=\"button\" class=\"filter-control filter-select dropdown-toggle\"\n                data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n          <span class=\"text-truncate\">{{ sortLabel }}</span>\n        </button>\n        <ul class=\"dropdown-menu dropdown-menu-end filter-menu\" aria-labelledby=\"txn-sort\">\n          <li *ngFor=\"let option of sortOptions\">\n            <button type=\"button\" class=\"dropdown-item fw-semibold\" [class.active]=\"option.value === filters.sort\"\n                    [attr.aria-current]=\"option.value === filters.sort ? 'true' : null\"\n                    (click)=\"setSort(option.value)\">{{ option.label }}</button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <!-- Category pills -->\n  <div class=\"pill-row mt-3\" role=\"group\" aria-label=\"Filter by category\" (focusin)=\"onPillFocus($event)\">\n    <button type=\"button\" class=\"btn btn-sm rounded-pill fw-semibold filter-pill\"\n            [ngClass]=\"!filters.category ? 'btn-primary' : 'filter-pill-idle'\"\n            [attr.aria-pressed]=\"!filters.category\" (click)=\"setCategory(null)\">All</button>\n    <button type=\"button\" *ngFor=\"let name of categoryNames\" class=\"btn btn-sm rounded-pill fw-semibold filter-pill\"\n            [ngClass]=\"filters.category === name ? 'btn-primary' : 'filter-pill-idle'\"\n            [attr.aria-pressed]=\"filters.category === name\" (click)=\"setCategory(name)\">{{ name }}</button>\n  </div>\n</section>\n\n<section #resultsCard class=\"app-card results-card mt-4\" aria-label=\"Transactions\" tabindex=\"-1\">\n  <ng-container *ngIf=\"view.rows.length; else emptyState\">\n    <!-- md and up: table. Past months are read-only: no Actions column (4 columns) and no row hover. -->\n    <div class=\"d-none d-md-block\">\n      <table class=\"table align-middle mb-0 txn-table\" [class.table-hover]=\"view.canAdd\">\n        <caption class=\"visually-hidden\">Transactions for {{ view.monthLabel }}</caption>\n        <thead>\n          <tr>\n            <th scope=\"col\" class=\"col-date\">Date</th>\n            <th scope=\"col\" class=\"col-description\">Description</th>\n            <th scope=\"col\" class=\"col-category\">Category</th>\n            <th scope=\"col\" class=\"col-amount text-end\">Amount</th>\n            <th scope=\"col\" class=\"col-actions text-end\" *ngIf=\"view.canAdd\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let row of view.rows; trackBy: trackById\">\n            <td class=\"cell-date\">{{ row.dateLabel }}</td>\n            <td class=\"cell-description\">\n              <div class=\"text-truncate\" [title]=\"row.description\">{{ row.description }}</div>\n            </td>\n            <td class=\"cell-category\">\n              <div class=\"category-cell\">\n                <span class=\"category-dot\" [style.background-color]=\"row.color\" aria-hidden=\"true\"></span>\n                <span class=\"category-name text-truncate\" [title]=\"row.category\">{{ row.category }}</span>\n              </div>\n            </td>\n            <td class=\"cell-amount text-end\" [class.is-income]=\"row.isIncome\">{{ row.amount | money:row.sign }}</td>\n            <td class=\"cell-actions text-end\" *ngIf=\"view.canAdd\">\n              <button type=\"button\" class=\"row-action\" [attr.data-edit-id]=\"row.id\" [attr.aria-label]=\"'Edit ' + row.description\"\n                      (click)=\"editTransaction(row)\">\n                <i class=\"bi bi-pencil\" aria-hidden=\"true\"></i>\n              </button>\n              <button type=\"button\" class=\"row-action\" [attr.aria-label]=\"'Delete ' + row.description\"\n                      (click)=\"deleteTransaction(row)\">\n                <i class=\"bi bi-trash3\" aria-hidden=\"true\"></i>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <!-- Below md: same rows as the Overview \"Recent transactions\" card. Current month: the whole row is the\n         edit button. Past months (read-only): plain list items, not buttons or tab stops. -->\n    <ul class=\"txn-list txn-mobile-list list-unstyled mb-0 d-md-none\">\n      <li *ngFor=\"let row of view.rows; trackBy: trackById\">\n        <button type=\"button\" class=\"txn-row-button d-flex align-items-center gap-3 text-start\" [attr.data-edit-id]=\"row.id\"\n                [attr.aria-label]=\"'Edit ' + row.description\" (click)=\"editTransaction(row)\" *ngIf=\"view.canAdd; else readOnlyRow\">\n          <ng-container *ngTemplateOutlet=\"rowContent; context: { $implicit: row }\"></ng-container>\n        </button>\n        <ng-template #readOnlyRow>\n          <div class=\"txn-row-static d-flex align-items-center gap-3\">\n            <ng-container *ngTemplateOutlet=\"rowContent; context: { $implicit: row }\"></ng-container>\n          </div>\n        </ng-template>\n      </li>\n    </ul>\n\n    <ng-template #rowContent let-row>\n      <span class=\"txn-badge\" [style.background-color]=\"row.color\" aria-hidden=\"true\">{{ row.letter }}</span>\n      <span class=\"txn-text\">\n        <span class=\"txn-description d-block\">{{ row.description }}</span>\n        <span class=\"txn-meta d-block\">{{ row.category }} · {{ row.dateLabel }}</span>\n      </span>\n      <span class=\"txn-amount\" [class.is-income]=\"row.isIncome\">{{ row.amount | money:row.sign }}</span>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #emptyState>\n    <p class=\"text-body-secondary text-center py-5 mb-0\">\n      {{ view.monthHasTransactions ? 'No transactions match these filters' : 'No transactions this month' }}\n    </p>\n  </ng-template>\n</section>\n\n<!-- Mobile only, and only when there are rows to tap (current month; not for the empty states or past months). -->\n<p class=\"small text-body-secondary text-center mt-3 mb-0 d-md-none\" *ngIf=\"view.rows.length && view.canAdd\">Tap a transaction to edit or delete it.</p>\n</ng-container>\n\n<ng-template #monthEmpty>\n  <!-- Current month, nothing added yet. -->\n  <app-empty-state *ngIf=\"view.canAdd\" heading=\"No transactions yet this month\" [hasActions]=\"true\" [compactMobile]=\"true\"\n                   text=\"Add income and expenses as they happen. Your budgets and reports update automatically.\">\n    <svg emptyIcon class=\"icon-accent\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"2\"/><path d=\"M8 8h8M8 12h8M8 16h5\"/></svg>\n    <!-- Same as the header \"+ Add transaction\" (.btn-add). Full width of the content column below sm,\n         natural width and centred from sm up. -->\n    <div emptyActions class=\"d-grid d-sm-flex justify-content-sm-center\">\n      <button type=\"button\" class=\"btn btn-primary btn-add\" (click)=\"addTxn.open()\">\n        <i class=\"bi bi-plus-lg\" aria-hidden=\"true\"></i>\n        <span>Add transaction</span>\n      </button>\n    </div>\n  </app-empty-state>\n\n  <!-- Past month with no transactions (view only). -->\n  <app-empty-state *ngIf=\"!view.canAdd\" [heading]=\"'No transactions in ' + view.monthLabel\"\n                   text=\"Nothing was logged this month. Use the arrows above to view another month.\">\n    <svg emptyIcon class=\"text-body-secondary\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M3 10h18M8 3v4M16 3v4\"/></svg>\n  </app-empty-state>\n</ng-template>\n</ng-container>\n\n<app-add-transaction-modal #addTxn (deleteRequested)=\"deleteModal.open($event)\"></app-add-transaction-modal>\n<app-delete-transaction-modal #deleteModal (deleted)=\"onTransactionDeleted()\"\n                              (cancelled)=\"onDeleteCancelled($event)\"></app-delete-transaction-modal>\n"

/***/ }),

/***/ "./src/app/pages/transactions/transactions.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/transactions/transactions.component.ts ***!
  \**************************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_services_today_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/today.service */ "./src/app/core/services/today.service.ts");
/* harmony import */ var _shared_components_add_transaction_modal_add_transaction_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/add-transaction-modal/add-transaction-modal.component */ "./src/app/shared/components/add-transaction-modal/add-transaction-modal.component.ts");
/* harmony import */ var _shared_components_delete_transaction_modal_delete_transaction_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/delete-transaction-modal/delete-transaction-modal.component */ "./src/app/shared/components/delete-transaction-modal/delete-transaction-modal.component.ts");
/* harmony import */ var _core_utils_amount_sign__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/utils/amount-sign */ "./src/app/core/utils/amount-sign.ts");
/* harmony import */ var _core_utils_date_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/utils/date-format */ "./src/app/core/utils/date-format.ts");
/* harmony import */ var _core_utils_filter_transactions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/utils/filter-transactions */ "./src/app/core/utils/filter-transactions.ts");












var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(dataService, host, route, router, today) {
        var _this = this;
        this.dataService = dataService;
        this.host = host;
        this.route = route;
        this.router = router;
        this.today = today;
        this.typeOptions = [
            { value: 'all', label: 'All types', description: 'Everything' },
            { value: 'expense', label: 'Expenses', description: 'Money spent' },
            { value: 'income', label: 'Income', description: 'Money coming in, e.g. salary' }
        ];
        this.sortOptions = [
            { value: 'newest', label: 'Newest first' },
            { value: 'oldest', label: 'Oldest first' },
            { value: 'amount', label: 'Highest amount' }
        ];
        /** Filter state lives in the component, so it resets when leaving the page. */
        this.filtersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _core_utils_filter_transactions__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_TRANSACTION_FILTERS"]));
        // Recomputes on month change, on added transactions and on any filter change.
        this.view$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.dataService.selectedMonth$, this.dataService.dataChanged$, this.filtersSubject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var selected = _a[0], filters = _a[2];
            var monthTransactions = _this.dataService.getTransactionsForMonth(selected.year, selected.month);
            return {
                monthLabel: Object(_core_utils_date_format__WEBPACK_IMPORTED_MODULE_10__["formatMonthYear"])(selected.year, selected.month),
                monthHasTransactions: monthTransactions.length > 0,
                canAdd: _this.today.isCurrentMonth(selected),
                rows: Object(_core_utils_filter_transactions__WEBPACK_IMPORTED_MODULE_11__["filterTransactions"])(monthTransactions, filters).map(function (t) { return _this.toRow(t); })
            };
        }));
    }
    Object.defineProperty(TransactionsComponent.prototype, "expenseCategoryNames", {
        /** Expense category names, read live because users can add categories. */
        get: function () {
            return this.dataService.getCategories().map(function (c) { return c.name; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransactionsComponent.prototype, "incomeCategoryNames", {
        get: function () {
            return this.dataService.getIncomeCategories().map(function (c) { return c.name; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Deep link from Budgets ("View transactions"): ?category=<name> preselects that category with
     * default filters otherwise. Matched trimmed and case-insensitively against expense and income names
     * (e.g. ?category=food), selecting the STORED name; unknown or empty values are ignored. The param is then
     * removed from the URL so later pill changes don't disagree with it and a refresh shows the default filters.
     */
    TransactionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var param = this.route.snapshot.queryParamMap.get('category');
        if (param === null) {
            return;
        }
        var category = this.dataService.findCategoryName(param);
        if (category) {
            this.filtersSubject.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _core_utils_filter_transactions__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_TRANSACTION_FILTERS"], { type: 'all', category: category }));
            // After render: bring the selected pill into view in the sideways-scrolling mobile row.
            setTimeout(function () {
                var pill = _this.host.nativeElement.querySelector('.pill-row [aria-pressed="true"]');
                if (pill) {
                    pill.scrollIntoView({ inline: 'nearest', block: 'nearest' });
                }
            });
        }
        this.router.navigate([], { relativeTo: this.route, queryParams: {}, replaceUrl: true });
    };
    Object.defineProperty(TransactionsComponent.prototype, "filters", {
        get: function () {
            return this.filtersSubject.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransactionsComponent.prototype, "typeLabel", {
        get: function () {
            return this.optionLabel(this.typeOptions, this.filters.type);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransactionsComponent.prototype, "sortLabel", {
        get: function () {
            return this.optionLabel(this.sortOptions, this.filters.sort);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransactionsComponent.prototype, "categoryNames", {
        /** Category pills for the current type: expense categories, income categories, or both. */
        get: function () {
            switch (this.filters.type) {
                case 'expense':
                    return this.expenseCategoryNames;
                case 'income':
                    return this.incomeCategoryNames;
                default:
                    return this.expenseCategoryNames.concat(this.incomeCategoryNames);
            }
        },
        enumerable: true,
        configurable: true
    });
    TransactionsComponent.prototype.setQuery = function (query) {
        this.update({ query: query });
    };
    TransactionsComponent.prototype.clearSearch = function () {
        this.update({ query: '' });
        if (this.searchInput) {
            this.searchInput.nativeElement.focus();
        }
    };
    TransactionsComponent.prototype.setType = function (type) {
        this.update({ type: type });
        // Drop a category that the new type doesn't offer.
        if (this.filters.category && this.categoryNames.indexOf(this.filters.category) === -1) {
            this.update({ category: null });
        }
    };
    TransactionsComponent.prototype.setCategory = function (category) {
        this.update({ category: category });
    };
    TransactionsComponent.prototype.setSort = function (sort) {
        this.update({ sort: sort });
    };
    /** Opens the shared modal in edit mode for this row (pencil on desktop, row tap on mobile). */
    TransactionsComponent.prototype.editTransaction = function (row) {
        var transaction = this.dataService.getTransactionById(row.id);
        if (transaction && this.addTxn) {
            this.addTxn.openForEdit(transaction);
        }
    };
    /** Table bin button: asks for confirmation in the delete dialog. */
    TransactionsComponent.prototype.deleteTransaction = function (row) {
        var transaction = this.dataService.getTransactionById(row.id);
        if (transaction && this.deleteModal) {
            this.deleteModal.open(transaction);
        }
    };
    /**
     * After a delete the trigger row is gone: focus the results card, or, when that was the current month's last
     * transaction, the "+ Add transaction" button in the empty-state card (once it has rendered).
     */
    TransactionsComponent.prototype.onTransactionDeleted = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.resultsCard) {
                _this.resultsCard.nativeElement.focus({ preventScroll: true });
                return;
            }
            var add = _this.host.nativeElement.querySelector('app-empty-state .btn-primary');
            if (add) {
                add.focus();
            }
        });
    };
    /**
     * After a cancelled delete, focus is normally back on the bin button. When the dialog came
     * from the edit modal there was nothing focused to return to, so focus that row's edit control.
     */
    TransactionsComponent.prototype.onDeleteCancelled = function (transaction) {
        if (document.activeElement && document.activeElement !== document.body) {
            return;
        }
        // Compared, not put in a selector: ids are any saved string (quotes, backslashes).
        var controls = this.host.nativeElement.querySelectorAll('[data-edit-id]');
        var visible = Array.prototype.filter.call(controls, function (el) {
            return el.getAttribute('data-edit-id') === transaction.id && el.offsetParent !== null;
        })[0];
        if (visible) {
            visible.focus({ preventScroll: true });
        }
        else if (this.resultsCard) {
            this.resultsCard.nativeElement.focus({ preventScroll: true });
        }
    };
    /**
     * Phones (sideways-scrolling pill row): when a pill gets KEYBOARD focus, scroll only the row so the whole pill
     * and its focus ring (4px each side) are visible. Never scrolls the page; nothing happens when the pill is
     * already fully visible, on mouse/touch focus, or when the row doesn't scroll (wrapping pills from md up).
     */
    TransactionsComponent.prototype.onPillFocus = function (event) {
        var pill = event.target;
        var row = event.currentTarget;
        if (!pill || !pill.classList || !pill.classList.contains('filter-pill') || row.scrollWidth <= row.clientWidth) {
            return;
        }
        try {
            if (!pill.matches(':focus-visible')) {
                return;
            }
        }
        catch (e) {
            // Browsers without :focus-visible: treat every focus as keyboard focus.
        }
        var ring = 4;
        var left = pill.getBoundingClientRect().left - row.getBoundingClientRect().left + row.scrollLeft - ring;
        var right = left + pill.offsetWidth + 2 * ring;
        var target = row.scrollLeft;
        if (left < row.scrollLeft) {
            target = left;
        }
        else if (right > row.scrollLeft + row.clientWidth) {
            target = right - row.clientWidth;
        }
        if (Math.abs(target - row.scrollLeft) < 1) {
            return;
        }
        var reduce = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (typeof row.scrollTo === 'function') {
            row.scrollTo({ left: target, behavior: reduce ? 'auto' : 'smooth' });
        }
        else {
            row.scrollLeft = target;
        }
    };
    TransactionsComponent.prototype.trackById = function (index, row) {
        return row.id;
    };
    TransactionsComponent.prototype.ngOnDestroy = function () {
        // Bootstrap creates dropdown instances lazily on first click; release them with the page.
        if (typeof bootstrap === 'undefined') {
            return;
        }
        var toggles = this.host.nativeElement.querySelectorAll('[data-bs-toggle="dropdown"]');
        Array.prototype.forEach.call(toggles, function (toggle) {
            var instance = bootstrap.Dropdown.getInstance(toggle);
            if (instance) {
                instance.dispose();
            }
        });
    };
    TransactionsComponent.prototype.update = function (changes) {
        this.filtersSubject.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.filters, changes));
    };
    TransactionsComponent.prototype.toRow = function (t) {
        return {
            id: t.id,
            dateLabel: Object(_core_utils_date_format__WEBPACK_IMPORTED_MODULE_10__["formatDayMonth"])(t.date),
            description: t.description,
            category: t.category,
            color: this.dataService.getTransactionColor(t),
            letter: t.category.charAt(0).toUpperCase(),
            isIncome: t.type === 'income',
            sign: Object(_core_utils_amount_sign__WEBPACK_IMPORTED_MODULE_9__["amountSign"])(t.type),
            amount: t.amount
        };
    };
    TransactionsComponent.prototype.optionLabel = function (options, value) {
        var option = options.filter(function (o) { return o.value === value; })[0];
        return option ? option.label : '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TransactionsComponent.prototype, "searchInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addTxn'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_components_add_transaction_modal_add_transaction_modal_component__WEBPACK_IMPORTED_MODULE_7__["AddTransactionModalComponent"])
    ], TransactionsComponent.prototype, "addTxn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_components_delete_transaction_modal_delete_transaction_modal_component__WEBPACK_IMPORTED_MODULE_8__["DeleteTransactionModalComponent"])
    ], TransactionsComponent.prototype, "deleteModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('resultsCard'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TransactionsComponent.prototype, "resultsCard", void 0);
    TransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__(/*! ./transactions.component.html */ "./src/app/pages/transactions/transactions.component.html"),
            styles: [__webpack_require__(/*! ./transactions.component.css */ "./src/app/pages/transactions/transactions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_today_service__WEBPACK_IMPORTED_MODULE_6__["TodayService"]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/add-transaction-modal/add-transaction-modal.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/components/add-transaction-modal/add-transaction-modal.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Shape, surface and error red come from the shared .app-modal class (styles.css). */\n.add-txn-modal {\n  --bs-modal-width: 520px;\n}\n/* Edit mode is a little wider so its three-button footer has room (add mode stays 520px). */\n.add-txn-modal.is-edit {\n  --bs-modal-width: 580px;\n}\n/* 8px dot; white by default (selected pill), category colour set inline otherwise. */\n.category-dot {\n  flex-shrink: 0;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRkLXRyYW5zYWN0aW9uLW1vZGFsL2FkZC10cmFuc2FjdGlvbi1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFGQUFxRjtBQUNyRjtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBLDRGQUE0RjtBQUM1RjtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBLHFGQUFxRjtBQUNyRjtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hZGQtdHJhbnNhY3Rpb24tbW9kYWwvYWRkLXRyYW5zYWN0aW9uLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTaGFwZSwgc3VyZmFjZSBhbmQgZXJyb3IgcmVkIGNvbWUgZnJvbSB0aGUgc2hhcmVkIC5hcHAtbW9kYWwgY2xhc3MgKHN0eWxlcy5jc3MpLiAqL1xuLmFkZC10eG4tbW9kYWwge1xuICAtLWJzLW1vZGFsLXdpZHRoOiA1MjBweDtcbn1cblxuLyogRWRpdCBtb2RlIGlzIGEgbGl0dGxlIHdpZGVyIHNvIGl0cyB0aHJlZS1idXR0b24gZm9vdGVyIGhhcyByb29tIChhZGQgbW9kZSBzdGF5cyA1MjBweCkuICovXG4uYWRkLXR4bi1tb2RhbC5pcy1lZGl0IHtcbiAgLS1icy1tb2RhbC13aWR0aDogNTgwcHg7XG59XG5cbi8qIDhweCBkb3Q7IHdoaXRlIGJ5IGRlZmF1bHQgKHNlbGVjdGVkIHBpbGwpLCBjYXRlZ29yeSBjb2xvdXIgc2V0IGlubGluZSBvdGhlcndpc2UuICovXG4uY2F0ZWdvcnktZG90IHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/add-transaction-modal/add-transaction-modal.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/add-transaction-modal/add-transaction-modal.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #modalEl class=\"modal fade app-modal add-txn-modal\" [class.is-edit]=\"mode === 'edit'\" tabindex=\"-1\" [attr.aria-labelledby]=\"ids.title\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <form class=\"modal-content p-4 border\" [formGroup]=\"form\" (ngSubmit)=\"save()\" novalidate>\n      <!-- Header row (kept in both views) -->\n      <div class=\"d-flex justify-content-between align-items-center\">\n        <h2 class=\"h4 fw-bold mb-0\" [id]=\"ids.title\">{{ mode === 'edit' ? 'Edit transaction' : 'Add transaction' }}</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n\n      <!-- Dividers separate header, content and footer (shared .modal-divider, same spacing as the delete dialogs). -->\n      <div class=\"modal-divider my-4\" aria-hidden=\"true\"></div>\n\n      <ng-container>\n        <!-- Type -->\n        <div class=\"d-flex w-100 p-1 gap-1 rounded-3 bg-body-secondary mb-4\" role=\"group\" aria-label=\"Transaction type\">\n          <button type=\"button\" class=\"btn flex-fill fw-semibold\"\n                  [ngClass]=\"type === 'expense' ? 'bg-body shadow-sm text-body' : 'text-body-secondary'\"\n                  [attr.aria-pressed]=\"type === 'expense'\" (click)=\"setType('expense')\">Expense</button>\n          <button type=\"button\" class=\"btn flex-fill fw-semibold\"\n                  [ngClass]=\"type === 'income' ? 'bg-body shadow-sm text-body' : 'text-body-secondary'\"\n                  [attr.aria-pressed]=\"type === 'income'\" (click)=\"setType('income')\">Income</button>\n        </div>\n\n        <!-- Amount -->\n        <div class=\"mb-3\">\n          <label class=\"form-label fw-semibold\" [for]=\"ids.amount\">Amount</label>\n          <div class=\"input-group input-group-lg has-validation\">\n            <span class=\"input-group-text text-body-secondary\">{{ currencySymbol }}</span>\n            <input #amountInput type=\"number\" class=\"form-control fs-3 fw-bold\" placeholder=\"0\"\n                   inputmode=\"decimal\" [attr.step]=\"amountStep\" min=\"0\" formControlName=\"amount\" [id]=\"ids.amount\"\n                   [class.is-invalid]=\"amountInvalid\" [attr.aria-invalid]=\"amountInvalid\"\n                   [attr.aria-describedby]=\"amountInvalid ? ids.amountError : null\">\n            <div class=\"invalid-feedback fw-semibold\" [id]=\"ids.amountError\">{{ amountErrorText }}</div>\n          </div>\n        </div>\n\n        <!-- Category -->\n        <div class=\"mb-3\">\n          <div class=\"form-label fw-semibold\" [id]=\"ids.categoryLabel\">Category</div>\n          <div class=\"d-flex flex-wrap gap-2\" role=\"group\" [attr.aria-labelledby]=\"ids.categoryLabel\"\n               [attr.aria-describedby]=\"categoryInvalid ? ids.categoryError : null\">\n            <button type=\"button\" *ngFor=\"let category of categories\"\n                    class=\"btn rounded-pill d-inline-flex align-items-center gap-2 fw-semibold\"\n                    [ngClass]=\"selectedCategory === category.name ? 'btn-primary' : 'btn-outline-secondary text-body'\"\n                    [class.border-danger]=\"categoryInvalid\"\n                    [attr.aria-pressed]=\"selectedCategory === category.name\"\n                    (click)=\"selectCategory(category.name)\">\n              <!-- White when selected (CSS default); category colour otherwise. -->\n              <span class=\"category-dot\" aria-hidden=\"true\"\n                    [style.background-color]=\"selectedCategory === category.name ? null : category.color\"></span>\n              {{ category.name }}\n            </button>\n          </div>\n          <div class=\"small text-danger fw-semibold mt-1\" [id]=\"ids.categoryError\" *ngIf=\"categoryInvalid\">Pick a category.</div>\n        </div>\n\n        <!-- Date -->\n        <div class=\"mb-3\">\n          <label class=\"form-label fw-semibold\" [for]=\"ids.date\">Date</label>\n          <input type=\"date\" class=\"form-control form-control-lg\" formControlName=\"date\" [id]=\"ids.date\"\n                 [attr.min]=\"dateMin\" [attr.max]=\"dateMax\"\n                 [class.is-invalid]=\"dateInvalid\" [attr.aria-invalid]=\"dateInvalid\"\n                 [attr.aria-describedby]=\"dateInvalid ? ids.dateError : null\">\n          <div class=\"invalid-feedback fw-semibold\" [id]=\"ids.dateError\">{{ dateErrorText }}</div>\n        </div>\n\n        <!-- Note -->\n        <div>\n          <label class=\"form-label fw-semibold\" [for]=\"ids.note\">Note <span class=\"text-body-secondary fw-normal\">(optional)</span></label>\n          <textarea class=\"form-control\" rows=\"2\" placeholder=\"Dinner with friends\" formControlName=\"note\" [id]=\"ids.note\"></textarea>\n        </div>\n\n        <div class=\"modal-divider mt-4\" aria-hidden=\"true\"></div>\n\n        <!-- Add mode footer: stacked full width below sm (Save, Cancel); from sm up right-aligned Cancel + Save. -->\n        <div class=\"d-flex flex-column flex-sm-row justify-content-sm-end gap-2 mt-4\" *ngIf=\"mode === 'add'\">\n          <button type=\"submit\" class=\"btn btn-primary btn-lg order-1 order-sm-2\">Save transaction</button>\n          <button type=\"button\" class=\"btn btn-outline-secondary btn-lg order-2 order-sm-1\" data-bs-dismiss=\"modal\">Cancel</button>\n        </div>\n\n        <!-- Edit mode footer: DOM order Save, Cancel, Delete (phone stack order).\n             From sm up the order utilities place Delete left and Cancel + Save right. -->\n        <div class=\"d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 mt-4\"\n             *ngIf=\"mode === 'edit'\">\n          <button type=\"submit\" class=\"btn btn-primary btn-lg order-1 order-sm-3\">Save changes</button>\n          <button type=\"button\" class=\"btn btn-outline-secondary btn-lg order-2 order-sm-2 ms-sm-auto\"\n                  data-bs-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-link text-danger text-decoration-none fw-semibold delete-link order-3 order-sm-1\"\n                  (click)=\"deleteTransaction()\">\n            <i class=\"bi bi-trash3 me-1\" aria-hidden=\"true\"></i>Delete transaction\n          </button>\n        </div>\n      </ng-container>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/add-transaction-modal/add-transaction-modal.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/add-transaction-modal/add-transaction-modal.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddTransactionModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTransactionModalComponent", function() { return AddTransactionModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/alert.service */ "./src/app/core/services/alert.service.ts");
/* harmony import */ var _core_services_currency_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/currency.service */ "./src/app/core/services/currency.service.ts");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_services_today_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/today.service */ "./src/app/core/services/today.service.ts");
/* harmony import */ var _core_utils_money__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/utils/money */ "./src/app/core/utils/money.ts");
/* harmony import */ var _core_utils_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/utils/validators */ "./src/app/core/utils/validators.ts");









var nextId = 0;
/**
 * Reusable add/edit transaction modal. Place `<app-add-transaction-modal #addTxn>` in a template,
 * then call `addTxn.open()` to add or `addTxn.openForEdit(transaction)` to edit.
 */
var AddTransactionModalComponent = /** @class */ (function () {
    function AddTransactionModalComponent(fb, dataService, alertService, today, currencyService) {
        var _this = this;
        this.fb = fb;
        this.dataService = dataService;
        this.alertService = alertService;
        this.today = today;
        this.currencyService = currencyService;
        /**
         * Edit mode "Delete transaction": emitted with the stored (unedited) transaction once this
         * modal has fully closed, so the host can open its own confirm dialog without stacked backdrops.
         */
        this.deleteRequested = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Unique per instance so ids and labels never clash if the modal is used twice on a page. */
        this.uid = 'add-txn-' + (++nextId);
        this.ids = {
            title: this.uid + '-title',
            amount: this.uid + '-amount',
            amountError: this.uid + '-amount-error',
            categoryLabel: this.uid + '-category-label',
            categoryError: this.uid + '-category-error',
            date: this.uid + '-date',
            dateError: this.uid + '-date-error',
            note: this.uid + '-note'
        };
        this.mode = 'add';
        /** Id of the transaction being edited (edit mode only). */
        this.editingId = null;
        /** Edit mode: the value the amount field was prefilled with, and the stored rupees it came from. */
        this.prefilledAmount = null;
        this.originalAmount = null;
        this.submitted = false;
        this.isShown = false;
        /** Set only by deleteTransaction(), so ordinary closes never emit deleteRequested. */
        this.pendingDelete = null;
        /** Set after a successful add: the form is reset once the modal has faded out (no visible flicker). */
        this.resetWhenHidden = false;
        /** Element focused when the modal opened (opened from code, so Bootstrap doesn't restore focus itself). */
        this.returnFocusTo = null;
        /**
         * Set once a valid save has started; further clicks/Enter are ignored until the modal is opened again,
         * so a double-click saves (and alerts) once. Validation failures never set it.
         */
        this.busy = false;
        /**
         * Add and edit: the date must be in the current month, up to today (typed dates can bypass the
         * input's min/max). Editing only happens in the current month (past months are read-only).
         */
        this.dateInRange = function (control) {
            var value = control.value;
            if (!value) {
                return null;
            }
            return value < _this.today.firstOfMonthIso() || value > _this.today.todayIso() ? { outsideCurrentMonth: true } : null;
        };
        this.onShown = function () {
            _this.isShown = true;
            _this.focusAmount();
        };
        this.onHidden = function () {
            _this.isShown = false;
            _this.busy = false;
            if (_this.resetWhenHidden) {
                _this.resetWhenHidden = false;
                _this.resetForm();
            }
            // Restore focus to the trigger (e.g. "+ Add transaction" or a row's pencil) if it still exists. When it has
            // gone (the first transaction of an empty month swaps the empty-state card for the normal layout), use the
            // page header's "+ Add transaction", else the month selector.
            if (_this.returnFocusTo && document.body.contains(_this.returnFocusTo)) {
                _this.returnFocusTo.focus();
            }
            else {
                var fallback = _this.visible('main header .btn-add') || _this.visible('main .month-toggle');
                if (fallback) {
                    fallback.focus();
                }
            }
            _this.returnFocusTo = null;
            if (_this.pendingDelete) {
                var transaction = _this.pendingDelete;
                _this.pendingDelete = null;
                _this.deleteRequested.emit(transaction);
            }
        };
        this.formCurrency = this.currencyService.currency;
        this.expenseCategories = this.readExpenseCategories();
        this.incomeCategories = this.dataService.getIncomeCategories().map(function (c) { return ({ name: c.name, color: c.color }); });
        this.form = this.fb.group({
            type: ['expense'],
            amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_core_utils_validators__WEBPACK_IMPORTED_MODULE_8__["positiveAmountIn"])(function () { return _this.formCurrency; }), Object(_core_utils_validators__WEBPACK_IMPORTED_MODULE_8__["amountDecimalsIn"])(function () { return _this.formCurrency; })]],
            category: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: [this.today.todayIso(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.dateInRange]],
            note: ['']
        });
        // Expense and income have different categories, so switching type clears the choice.
        this.typeSubscription = this.form.get('type').valueChanges.subscribe(function () {
            _this.form.get('category').setValue(null);
        });
    }
    Object.defineProperty(AddTransactionModalComponent.prototype, "currencySymbol", {
        /** Prefix of the amount field, e.g. '$': the amount is typed in this currency and saved in rupees. */
        get: function () {
            return Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_7__["getCurrency"])(this.formCurrency).symbol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTransactionModalComponent.prototype, "amountStep", {
        /** 1 for whole-unit currencies (JPY), else 0.01. */
        get: function () {
            return Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_7__["getCurrency"])(this.formCurrency).decimals === 0 && this.formCurrency !== 'INR' ? '1' : '0.01';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTransactionModalComponent.prototype, "type", {
        get: function () {
            return this.form.get('type').value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTransactionModalComponent.prototype, "selectedCategory", {
        get: function () {
            return this.form.get('category').value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTransactionModalComponent.prototype, "categories", {
        get: function () {
            return this.type === 'income' ? this.incomeCategories : this.expenseCategories;
        },
        enumerable: true,
        configurable: true
    });
    /** Type toggle; switching type clears the category (see the valueChanges subscription). */
    AddTransactionModalComponent.prototype.setType = function (type) {
        if (this.type !== type) {
            this.form.get('type').setValue(type);
        }
    };
    AddTransactionModalComponent.prototype.selectCategory = function (name) {
        this.form.get('category').setValue(name);
    };
    Object.defineProperty(AddTransactionModalComponent.prototype, "amountErrorText", {
        /** 'Enter an amount greater than 0.', or the decimals rule ('Use at most 2 decimal places.' / whole yen). */
        get: function () {
            return Object(_core_utils_validators__WEBPACK_IMPORTED_MODULE_8__["amountErrorText"])(this.form.get('amount'), 'amount') || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTransactionModalComponent.prototype, "amountInvalid", {
        get: function () {
            return this.submitted && this.form.get('amount').invalid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTransactionModalComponent.prototype, "categoryInvalid", {
        get: function () {
            return this.submitted && this.form.get('category').invalid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTransactionModalComponent.prototype, "dateInvalid", {
        get: function () {
            return this.submitted && this.form.get('date').invalid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTransactionModalComponent.prototype, "dateErrorText", {
        get: function () {
            return this.form.get('date').hasError('outsideCurrentMonth')
                ? 'Pick a date from this month, up to today.'
                : 'Pick a date.';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTransactionModalComponent.prototype, "dateMin", {
        /** Date input limits in add AND edit mode: 1st of the current month … today (TodayService). */
        get: function () {
            return this.today.firstOfMonthIso();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTransactionModalComponent.prototype, "dateMax", {
        get: function () {
            return this.today.todayIso();
        },
        enumerable: true,
        configurable: true
    });
    AddTransactionModalComponent.prototype.ngAfterViewInit = function () {
        if (typeof bootstrap === 'undefined') {
            return;
        }
        var element = this.modalEl.nativeElement;
        this.modal = new bootstrap.Modal(element);
        element.addEventListener('shown.bs.modal', this.onShown);
        element.addEventListener('hidden.bs.modal', this.onHidden);
    };
    AddTransactionModalComponent.prototype.ngOnDestroy = function () {
        this.typeSubscription.unsubscribe();
        if (!this.modal) {
            return;
        }
        var element = this.modalEl.nativeElement;
        element.removeEventListener('shown.bs.modal', this.onShown);
        element.removeEventListener('hidden.bs.modal', this.onHidden);
        this.modal.dispose();
        if (this.isShown) {
            // Destroyed while open (e.g. browser back): undo what Bootstrap did to <body>.
            document.body.classList.remove('modal-open');
            document.body.style.removeProperty('overflow');
            document.body.style.removeProperty('padding-right');
        }
    };
    /** Opens the modal in add mode with a fresh form (kept for existing callers). */
    AddTransactionModalComponent.prototype.open = function () {
        this.openForAdd();
    };
    AddTransactionModalComponent.prototype.openForAdd = function () {
        this.expenseCategories = this.readExpenseCategories();
        this.mode = 'add';
        this.editingId = null;
        this.resetForm();
        this.show();
    };
    /** Opens the modal in edit mode, pre-filled from the transaction. */
    AddTransactionModalComponent.prototype.openForEdit = function (transaction) {
        this.expenseCategories = this.readExpenseCategories();
        this.mode = 'edit';
        this.editingId = transaction.id;
        this.submitted = false;
        this.formCurrency = this.currencyService.currency;
        this.prefilledAmount = Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_7__["inrToInputValue"])(transaction.amount, this.formCurrency);
        this.originalAmount = transaction.amount;
        // emitEvent: false so the type subscription doesn't clear the category being set here.
        this.form.reset({
            type: transaction.type,
            amount: this.prefilledAmount,
            category: transaction.category,
            date: transaction.date,
            // The description is the note, or the category name when no note was given.
            note: transaction.description === transaction.category ? '' : transaction.description
        }, { emitEvent: false });
        this.show();
    };
    /** Edit-mode "Delete transaction": closes this modal, then emits deleteRequested (see onHidden). */
    AddTransactionModalComponent.prototype.deleteTransaction = function () {
        var transaction = this.editingId ? this.dataService.getTransactionById(this.editingId) : null;
        if (!transaction) {
            this.close();
            return;
        }
        if (!this.modal) {
            this.deleteRequested.emit(transaction);
            return;
        }
        this.pendingDelete = transaction;
        this.close();
    };
    AddTransactionModalComponent.prototype.close = function () {
        if (this.modal) {
            this.modal.hide();
        }
    };
    AddTransactionModalComponent.prototype.save = function () {
        if (this.busy) {
            return;
        }
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.busy = true;
        var value = this.form.value;
        var input = {
            type: value.type,
            // Typed in formCurrency, saved in rupees; an untouched edit keeps the stored rupees exactly.
            amount: Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_7__["inputToInr"])(value.amount, this.formCurrency, this.prefilledAmount, this.originalAmount),
            category: value.category,
            date: value.date,
            note: value.note
        };
        if (this.mode === 'edit') {
            // Close whether it saved or the transaction no longer exists (null): nothing is left to edit.
            var updated = this.dataService.updateTransaction(this.editingId, input);
            this.close();
            if (updated) {
                this.alertService.show('Transaction updated');
            }
            return;
        }
        // Add mode: save, close straight away (form reset once hidden), then the shared alert.
        this.dataService.addTransaction(input);
        this.resetWhenHidden = true;
        this.close();
        this.alertService.show('Transaction added');
    };
    /** Re-read on every open: users can add expense categories on the Budgets page. */
    AddTransactionModalComponent.prototype.readExpenseCategories = function () {
        return this.dataService.getCategories().map(function (c) { return ({ name: c.name, color: c.color }); });
    };
    /** First visible element matching `selector` in the page, or null. */
    AddTransactionModalComponent.prototype.visible = function (selector) {
        var matches = document.querySelectorAll(selector);
        return Array.prototype.filter.call(matches, function (el) { return el.offsetParent !== null; })[0] || null;
    };
    AddTransactionModalComponent.prototype.show = function () {
        this.busy = false;
        var active = document.activeElement;
        this.returnFocusTo = active && active !== document.body ? active : null;
        if (this.modal) {
            this.modal.show();
        }
    };
    AddTransactionModalComponent.prototype.resetForm = function () {
        this.submitted = false;
        this.formCurrency = this.currencyService.currency;
        this.prefilledAmount = null;
        this.originalAmount = null;
        this.form.reset({
            type: 'expense',
            amount: null,
            category: null,
            date: this.today.todayIso(),
            note: ''
        });
    };
    AddTransactionModalComponent.prototype.focusAmount = function () {
        if (this.amountInput) {
            this.amountInput.nativeElement.focus();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalEl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddTransactionModalComponent.prototype, "modalEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('amountInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddTransactionModalComponent.prototype, "amountInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddTransactionModalComponent.prototype, "deleteRequested", void 0);
    AddTransactionModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-transaction-modal',
            template: __webpack_require__(/*! ./add-transaction-modal.component.html */ "./src/app/shared/components/add-transaction-modal/add-transaction-modal.component.html"),
            styles: [__webpack_require__(/*! ./add-transaction-modal.component.css */ "./src/app/shared/components/add-transaction-modal/add-transaction-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _core_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _core_services_today_service__WEBPACK_IMPORTED_MODULE_6__["TodayService"], _core_services_currency_service__WEBPACK_IMPORTED_MODULE_4__["CurrencyService"]])
    ], AddTransactionModalComponent);
    return AddTransactionModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/app-alert/app-alert.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/app-alert/app-alert.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Fixed, top-centre, only as wide as its content; above modals (1055) and backdrops (1050). */\n.app-alert {\n  position: fixed;\n  top: 1.5rem;\n  left: 50%;\n  z-index: 1090;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: calc(100vw - 32px);\n  margin-bottom: 0;\n  transform: translateX(-50%);\n  animation: app-alert-in 150ms ease-out;\n  transition: opacity 300ms ease;\n}\n.app-alert svg {\n  fill: currentColor;\n}\n/* Fading out (removed from the DOM after the transition). */\n.app-alert.is-leaving {\n  opacity: 0;\n}\n@keyframes app-alert-in {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n/* Mobile: just below the sticky top bar (~57px) so the menu/theme buttons stay visible. */\n@media (max-width: 991.98px) {\n  .app-alert {\n    top: calc(57px + 0.75rem);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .app-alert {\n    animation: none;\n    transition: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYXBwLWFsZXJ0L2FwcC1hbGVydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhGQUE4RjtBQUM5RjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7RUFDYix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLHNDQUFzQztFQUN0Qyw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBLDREQUE0RDtBQUM1RDtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUVBLDBGQUEwRjtBQUMxRjtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYXBwLWFsZXJ0L2FwcC1hbGVydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRml4ZWQsIHRvcC1jZW50cmUsIG9ubHkgYXMgd2lkZSBhcyBpdHMgY29udGVudDsgYWJvdmUgbW9kYWxzICgxMDU1KSBhbmQgYmFja2Ryb3BzICgxMDUwKS4gKi9cbi5hcHAtYWxlcnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMS41cmVtO1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6IDEwOTA7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMzJweCk7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYW5pbWF0aW9uOiBhcHAtYWxlcnQtaW4gMTUwbXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZTtcbn1cblxuLmFwcC1hbGVydCBzdmcge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbi8qIEZhZGluZyBvdXQgKHJlbW92ZWQgZnJvbSB0aGUgRE9NIGFmdGVyIHRoZSB0cmFuc2l0aW9uKS4gKi9cbi5hcHAtYWxlcnQuaXMtbGVhdmluZyB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbkBrZXlmcmFtZXMgYXBwLWFsZXJ0LWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi8qIE1vYmlsZToganVzdCBiZWxvdyB0aGUgc3RpY2t5IHRvcCBiYXIgKH41N3B4KSBzbyB0aGUgbWVudS90aGVtZSBidXR0b25zIHN0YXkgdmlzaWJsZS4gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAuYXBwLWFsZXJ0IHtcbiAgICB0b3A6IGNhbGMoNTdweCArIDAuNzVyZW0pO1xuICB9XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5hcHAtYWxlcnQge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/app-alert/app-alert.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/app-alert/app-alert.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Icon sprite for the alerts (Bootstrap Icons check-circle-fill and exclamation-triangle-fill). -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display: none;\">\n  <symbol id=\"check-circle-fill\" viewBox=\"0 0 16 16\">\n    <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\"/>\n  </symbol>\n  <symbol id=\"exclamation-triangle-fill\" viewBox=\"0 0 16 16\">\n    <path d=\"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2\"/>\n  </symbol>\n</svg>\n\n<div *ngIf=\"alert\" class=\"app-alert alert d-flex align-items-center\" [ngClass]=\"'alert-' + alert.type\"\n     [class.is-leaving]=\"leaving\" role=\"alert\">\n  <svg class=\"bi flex-shrink-0 me-2\" width=\"24\" height=\"24\" aria-hidden=\"true\">\n    <use [attr.xlink:href]=\"iconHref\" [attr.href]=\"iconHref\"></use>\n  </svg>\n  <div>{{ alert.message }}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/app-alert/app-alert.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/app-alert/app-alert.component.ts ***!
  \********************************************************************/
/*! exports provided: AppAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAlertComponent", function() { return AppAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/alert.service */ "./src/app/core/services/alert.service.ts");



/** How long an alert stays before it fades out (danger and warning stay longer to read), and the fade-out duration (matches the CSS). */
var VISIBLE_MS = { success: 4000, danger: 6000, warning: 6000 };
var FADE_OUT_MS = 300;
/**
 * The app's single alert, placed once in the app shell (outside the router outlet).
 * Each show() renders a fresh element so role="alert" is announced, fades in, and fades out
 * after ~4s (success) or ~6s (danger, warning); a new show() while visible replaces the message and restarts the timer.
 */
var AppAlertComponent = /** @class */ (function () {
    function AppAlertComponent(alertService, cdr) {
        this.alertService = alertService;
        this.cdr = cdr;
        this.alert = null;
        this.leaving = false;
        /**
         * <use> reference to the sprite symbol. With <base href="/"> a bare "#id" resolves to "/#id",
         * which on other routes (/transactions…) points at a different document in some browsers, so the
         * reference includes the current path.
         */
        this.iconHref = '#check-circle-fill';
        this.hideTimer = null;
        this.removeTimer = null;
    }
    AppAlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.alerts$.subscribe(function (alert) { return _this.present(alert); });
        this.dismissSubscription = this.alertService.dismissed$.subscribe(function () { return _this.removeNow(); });
    };
    AppAlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.dismissSubscription.unsubscribe();
        this.clearTimers();
    };
    /** Removes the visible alert immediately (AlertService.dismiss()). */
    AppAlertComponent.prototype.removeNow = function () {
        this.clearTimers();
        if (this.alert) {
            this.alert = null;
            this.leaving = false;
            this.cdr.detectChanges();
        }
    };
    AppAlertComponent.prototype.present = function (alert) {
        var _this = this;
        this.clearTimers();
        // Remove any current alert first so the new element is inserted (and announced) fresh.
        this.alert = null;
        this.leaving = false;
        this.cdr.detectChanges();
        var symbol = alert.type === 'success' ? '#check-circle-fill' : '#exclamation-triangle-fill';
        this.iconHref = window.location.pathname + window.location.search + symbol;
        this.alert = alert;
        this.cdr.detectChanges();
        this.hideTimer = setTimeout(function () {
            _this.leaving = true;
            _this.cdr.detectChanges();
            _this.removeTimer = setTimeout(function () {
                _this.alert = null;
                _this.leaving = false;
                _this.cdr.detectChanges();
            }, FADE_OUT_MS);
        }, VISIBLE_MS[alert.type]);
    };
    AppAlertComponent.prototype.clearTimers = function () {
        clearTimeout(this.hideTimer);
        clearTimeout(this.removeTimer);
        this.hideTimer = null;
        this.removeTimer = null;
    };
    AppAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./app-alert.component.html */ "./src/app/shared/components/app-alert/app-alert.component.html"),
            styles: [__webpack_require__(/*! ./app-alert.component.css */ "./src/app/shared/components/app-alert/app-alert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AppAlertComponent);
    return AppAlertComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/delete-transaction-modal/delete-transaction-modal.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/components/delete-transaction-modal/delete-transaction-modal.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Shape, surface and scoped error red come from the shared .app-modal class (styles.css).\n   Same 520px width as the add modal. */\n.delete-txn-modal {\n  --bs-modal-width: 520px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGVsZXRlLXRyYW5zYWN0aW9uLW1vZGFsL2RlbGV0ZS10cmFuc2FjdGlvbi1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO3VDQUN1QztBQUN2QztFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RlbGV0ZS10cmFuc2FjdGlvbi1tb2RhbC9kZWxldGUtdHJhbnNhY3Rpb24tbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNoYXBlLCBzdXJmYWNlIGFuZCBzY29wZWQgZXJyb3IgcmVkIGNvbWUgZnJvbSB0aGUgc2hhcmVkIC5hcHAtbW9kYWwgY2xhc3MgKHN0eWxlcy5jc3MpLlxuICAgU2FtZSA1MjBweCB3aWR0aCBhcyB0aGUgYWRkIG1vZGFsLiAqL1xuLmRlbGV0ZS10eG4tbW9kYWwge1xuICAtLWJzLW1vZGFsLXdpZHRoOiA1MjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/delete-transaction-modal/delete-transaction-modal.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/shared/components/delete-transaction-modal/delete-transaction-modal.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #modalEl class=\"modal fade app-modal delete-txn-modal\" tabindex=\"-1\"\n     [attr.aria-labelledby]=\"ids.title\" [attr.aria-describedby]=\"ids.description\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content p-4 border\">\n      <!-- Header row: same as the add/edit modal. × counts as Cancel. -->\n      <div class=\"d-flex justify-content-between align-items-center\">\n        <h2 class=\"h4 fw-bold mb-0\" [id]=\"ids.title\">Delete this transaction?</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n\n      <!-- Dividers separate header, content and footer (shared .modal-divider). -->\n      <div class=\"modal-divider mt-4\" aria-hidden=\"true\"></div>\n\n      <div class=\"py-4\" [id]=\"ids.description\">\n        <p class=\"text-break mb-0\" *ngIf=\"transaction\">\n          {{ transaction.description }} · {{ transaction.amount | money }} · {{ dateLabel }}\n        </p>\n      </div>\n\n      <div class=\"modal-divider\" aria-hidden=\"true\"></div>\n\n      <!-- Footer: same pattern as the add modal. Stacked below sm (Delete, Cancel); from sm up right-aligned Cancel + Delete. -->\n      <div class=\"d-flex flex-column flex-sm-row justify-content-sm-end gap-2 mt-4\">\n        <button type=\"button\" class=\"btn btn-lg btn-delete order-1 order-sm-2\" (click)=\"confirmDelete()\">Delete</button>\n        <button #cancelButton type=\"button\" class=\"btn btn-outline-secondary btn-lg order-2 order-sm-1\" data-bs-dismiss=\"modal\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/delete-transaction-modal/delete-transaction-modal.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/delete-transaction-modal/delete-transaction-modal.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DeleteTransactionModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTransactionModalComponent", function() { return DeleteTransactionModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/alert.service */ "./src/app/core/services/alert.service.ts");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_utils_date_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/utils/date-format */ "./src/app/core/utils/date-format.ts");





var nextId = 0;
/**
 * Confirm dialog for deleting one transaction. Place `<app-delete-transaction-modal #deleteModal>`
 * in a template and call `deleteModal.open(transaction)`. Esc and backdrop clicks count as Cancel.
 */
var DeleteTransactionModalComponent = /** @class */ (function () {
    function DeleteTransactionModalComponent(dataService, alertService) {
        var _this = this;
        this.dataService = dataService;
        this.alertService = alertService;
        /** Emitted after the dialog has closed following a successful delete (the trigger row is gone). */
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emitted after the dialog has closed without deleting. Focus has already been returned to the
         * element that was focused when it opened, if that element still exists.
         */
        this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Unique per instance so ids never clash if the dialog is used twice on a page. */
        this.uid = 'delete-txn-' + (++nextId);
        this.ids = {
            title: this.uid + '-title',
            description: this.uid + '-description'
        };
        this.transaction = null;
        this.dateLabel = '';
        this.isShown = false;
        this.wasDeleted = false;
        /** Set once Delete is confirmed: repeat clicks are ignored until the dialog opens again. */
        this.busy = false;
        this.returnFocusTo = null;
        this.onShown = function () {
            _this.isShown = true;
            // Safe default for a destructive confirm.
            if (_this.cancelButton) {
                _this.cancelButton.nativeElement.focus();
            }
        };
        this.onHidden = function () {
            _this.isShown = false;
            _this.busy = false;
            var transaction = _this.transaction;
            if (_this.wasDeleted) {
                _this.deleted.emit(transaction);
                return;
            }
            // Opened programmatically, so Bootstrap doesn't restore focus itself.
            if (_this.returnFocusTo && document.body.contains(_this.returnFocusTo)) {
                _this.returnFocusTo.focus();
            }
            _this.cancelled.emit(transaction);
        };
    }
    DeleteTransactionModalComponent.prototype.ngAfterViewInit = function () {
        if (typeof bootstrap === 'undefined') {
            return;
        }
        var element = this.modalEl.nativeElement;
        this.modal = new bootstrap.Modal(element);
        element.addEventListener('shown.bs.modal', this.onShown);
        element.addEventListener('hidden.bs.modal', this.onHidden);
    };
    DeleteTransactionModalComponent.prototype.ngOnDestroy = function () {
        if (!this.modal) {
            return;
        }
        var element = this.modalEl.nativeElement;
        element.removeEventListener('shown.bs.modal', this.onShown);
        element.removeEventListener('hidden.bs.modal', this.onHidden);
        this.modal.dispose();
        if (this.isShown) {
            // Destroyed while open (e.g. browser back): undo what Bootstrap did to <body>.
            document.body.classList.remove('modal-open');
            document.body.style.removeProperty('overflow');
            document.body.style.removeProperty('padding-right');
        }
    };
    DeleteTransactionModalComponent.prototype.open = function (transaction) {
        this.transaction = transaction;
        this.dateLabel = Object(_core_utils_date_format__WEBPACK_IMPORTED_MODULE_4__["formatDayMonth"])(transaction.date);
        this.wasDeleted = false;
        this.busy = false;
        var active = document.activeElement;
        this.returnFocusTo = active && active !== document.body ? active : null;
        if (this.modal) {
            this.modal.show();
        }
    };
    DeleteTransactionModalComponent.prototype.confirmDelete = function () {
        if (!this.transaction || this.busy) {
            return;
        }
        this.busy = true;
        this.wasDeleted = this.dataService.deleteTransaction(this.transaction.id);
        if (this.wasDeleted) {
            this.alertService.show('Transaction deleted');
        }
        if (this.modal) {
            this.modal.hide();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalEl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DeleteTransactionModalComponent.prototype, "modalEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cancelButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DeleteTransactionModalComponent.prototype, "cancelButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeleteTransactionModalComponent.prototype, "deleted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeleteTransactionModalComponent.prototype, "cancelled", void 0);
    DeleteTransactionModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-transaction-modal',
            template: __webpack_require__(/*! ./delete-transaction-modal.component.html */ "./src/app/shared/components/delete-transaction-modal/delete-transaction-modal.component.html"),
            styles: [__webpack_require__(/*! ./delete-transaction-modal.component.css */ "./src/app/shared/components/delete-transaction-modal/delete-transaction-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _core_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], DeleteTransactionModalComponent);
    return DeleteTransactionModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/empty-state/empty-state.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/empty-state/empty-state.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- compactMobile: less vertical space below lg (py-4 + my-3), the full py-5 + my-5 from lg up. -->\n<section class=\"card border rounded-4 shadow-none mt-4\" [ngClass]=\"compactMobile ? 'py-4 py-lg-5' : 'py-5'\"\n         [attr.aria-labelledby]=\"headingId\">\n  <div class=\"d-flex flex-column align-items-center text-center gap-3\" [ngClass]=\"compactMobile ? 'my-3 my-lg-5' : 'my-5'\">\n    <div class=\"d-inline-flex p-3 rounded-3 icon-box-bg\" aria-hidden=\"true\">\n      <ng-content select=\"[emptyIcon]\"></ng-content>\n    </div>\n    <h2 class=\"h5 fw-bold mb-0\" [id]=\"headingId\">{{ heading }}</h2>\n    <div class=\"row justify-content-center w-100 mx-0\">\n      <div class=\"col-12 col-md-8 col-lg-5\">\n        <p class=\"text-body-secondary mb-0\">{{ text }}<ng-content select=\"[emptyText]\"></ng-content></p>\n      </div>\n    </div>\n    <!-- Same 12px column padding as the text, so full-width phone buttons line up with it. -->\n    <div class=\"row w-100 mx-0\" *ngIf=\"hasActions\">\n      <div class=\"col-12\">\n        <ng-content select=\"[emptyActions]\"></ng-content>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/shared/components/empty-state/empty-state.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/empty-state/empty-state.component.ts ***!
  \************************************************************************/
/*! exports provided: EmptyStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyStateComponent", function() { return EmptyStateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var nextId = 0;
/**
 * The app's standard empty-state card (Bootstrap utilities only). Usage:
 * <app-empty-state heading="…" text="…" [hasActions]="true">
 *   <svg emptyIcon class="text-body-secondary" width="28" height="28" …></svg>
 *   <span emptyText>…rich text…</span>          (optional, instead of / after `text`)
 *   <div emptyActions class="d-grid d-sm-flex justify-content-sm-center gap-2">…buttons…</div>
 * </app-empty-state>
 * The icon colour comes from the projected svg (text-body-secondary or icon-accent).
 */
var EmptyStateComponent = /** @class */ (function () {
    function EmptyStateComponent() {
        this.heading = '';
        /** Plain body text; projected [emptyText] content is shown after it. */
        this.text = '';
        /** Show the [emptyActions] slot under the text (kept out of the layout otherwise, so no extra gap). */
        this.hasActions = false;
        /** Less top/bottom space below lg (py-4 / my-3); unchanged from lg up. Off by default. */
        this.compactMobile = false;
        this.headingId = 'empty-state-' + (++nextId) + '-title';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmptyStateComponent.prototype, "heading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmptyStateComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmptyStateComponent.prototype, "hasActions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmptyStateComponent.prototype, "compactMobile", void 0);
    EmptyStateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empty-state',
            template: __webpack_require__(/*! ./empty-state.component.html */ "./src/app/shared/components/empty-state/empty-state.component.html")
        })
    ], EmptyStateComponent);
    return EmptyStateComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/month-selector/month-selector.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/month-selector/month-selector.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Block-level so it can stretch full width (mobile) or sit in a flex row (md and up). */\n:host {\n  display: block;\n}\n/* Month selector: one bordered box with the arrows inside. */\n.month-selector {\n  display: flex;\n  align-items: center;\n  height: 42px;\n  padding: 0 4px;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius-lg);\n  background-color: var(--app-surface);\n}\n/* Month name = dropdown toggle: same text and weight as before, with a muted caret. Same surface as the box\n   at rest; a tertiary tint on hover / while open shows it's clickable. */\n.month-toggle {\n  min-width: 0;\n  max-width: 100%;\n  border: 0;\n  background-color: transparent;\n  color: var(--bs-body-color);\n}\n.month-toggle:hover,\n.month-toggle[aria-expanded=\"true\"] {\n  background-color: var(--bs-tertiary-bg);\n}\n.month-label {\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.month-caret {\n  flex-shrink: 0;\n  font-size: 0.75rem;\n  color: var(--bs-secondary-color);\n}\n/*\n * Picker panel: pinned under the whole selector box, edge to edge with its outer border (static display,\n * so Bootstrap only adds data-bs-popper=\"static\"; these override its top/left). Hairline border, card corners.\n */\n.month-picker[data-bs-popper] {\n  top: 100%;\n  left: calc(-1 * var(--bs-border-width));\n  right: calc(-1 * var(--bs-border-width));\n  margin-top: 0.375rem;\n}\n.month-picker {\n  --bs-dropdown-border-color: var(--hairline);\n  --bs-dropdown-border-radius: var(--bs-border-radius-lg);\n  min-width: 0;\n}\n/* Month buttons: borderless and transparent, tertiary tint on hover (focus ring from styles.css). */\n.picker-month {\n  --bs-btn-color: var(--bs-body-color);\n  --bs-btn-bg: transparent;\n  --bs-btn-border-color: transparent;\n  --bs-btn-hover-color: var(--bs-body-color);\n  --bs-btn-hover-bg: var(--bs-tertiary-bg);\n  --bs-btn-hover-border-color: transparent;\n  --bs-btn-active-color: var(--bs-body-color);\n  --bs-btn-active-bg: var(--bs-tertiary-bg);\n  --bs-btn-active-border-color: transparent;\n  --bs-btn-disabled-color: var(--bs-secondary-color);\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: transparent;\n  --bs-btn-disabled-opacity: 0.45;\n  --bs-btn-focus-shadow-rgb: var(--bs-primary-rgb);\n  border-radius: var(--bs-border-radius);\n}\n/* Current month (when not selected): a gray outline that reads in both themes. */\n.picker-month.is-current {\n  --bs-btn-border-color: rgba(var(--bs-emphasis-color-rgb), 0.35);\n  --bs-btn-hover-border-color: rgba(var(--bs-emphasis-color-rgb), 0.35);\n}\n/* Selected month: the global accent .btn-primary (filled, white text). */\n.picker-month.btn-primary {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: var(--bs-primary);\n  --bs-btn-border-color: var(--bs-primary);\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: var(--bs-primary);\n  --bs-btn-hover-border-color: var(--bs-primary);\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: var(--bs-primary);\n  --bs-btn-active-border-color: var(--bs-primary);\n}\n.month-arrow {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 34px;\n  height: 34px;\n  padding: 0;\n  border: 0;\n  border-radius: var(--bs-border-radius);\n  background: transparent;\n  color: var(--bs-secondary-color);\n}\n.month-arrow:hover:not(:disabled) {\n  color: var(--bs-body-color);\n  background-color: var(--bs-tertiary-bg);\n}\n/* › on the current month: greyed out, no hover tint. */\n.month-arrow:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.month-arrow:focus-visible {\n  color: var(--bs-body-color);\n}\n@media (min-width: 768px) {\n  .month-selector {\n    min-width: 200px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9udGgtc2VsZWN0b3IvbW9udGgtc2VsZWN0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RkFBd0Y7QUFDeEY7RUFDRSxjQUFjO0FBQ2hCO0FBRUEsNkRBQTZEO0FBQzdEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztFQUNkLDJEQUEyRDtFQUMzRCx5Q0FBeUM7RUFDekMsb0NBQW9DO0FBQ3RDO0FBRUE7eUVBQ3lFO0FBQ3pFO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLDJCQUEyQjtBQUM3QjtBQUVBOztFQUVFLHVDQUF1QztBQUN6QztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQztBQUVBOzs7RUFHRTtBQUNGO0VBQ0UsU0FBUztFQUNULHVDQUF1QztFQUN2Qyx3Q0FBd0M7RUFDeEMsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsdURBQXVEO0VBQ3ZELFlBQVk7QUFDZDtBQUVBLG9HQUFvRztBQUNwRztFQUNFLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsa0NBQWtDO0VBQ2xDLDBDQUEwQztFQUMxQyx3Q0FBd0M7RUFDeEMsd0NBQXdDO0VBQ3hDLDJDQUEyQztFQUMzQyx5Q0FBeUM7RUFDekMseUNBQXlDO0VBQ3pDLGtEQUFrRDtFQUNsRCxpQ0FBaUM7RUFDakMsMkNBQTJDO0VBQzNDLCtCQUErQjtFQUMvQixnREFBZ0Q7RUFDaEQsc0NBQXNDO0FBQ3hDO0FBRUEsaUZBQWlGO0FBQ2pGO0VBQ0UsK0RBQStEO0VBQy9ELHFFQUFxRTtBQUN2RTtBQUVBLHlFQUF5RTtBQUN6RTtFQUNFLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsd0NBQXdDO0VBQ3hDLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsOENBQThDO0VBQzlDLDJCQUEyQjtFQUMzQixxQ0FBcUM7RUFDckMsK0NBQStDO0FBQ2pEO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULHNDQUFzQztFQUN0Qyx1QkFBdUI7RUFDdkIsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsdUNBQXVDO0FBQ3pDO0FBRUEsdURBQXVEO0FBQ3ZEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21vbnRoLXNlbGVjdG9yL21vbnRoLXNlbGVjdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCbG9jay1sZXZlbCBzbyBpdCBjYW4gc3RyZXRjaCBmdWxsIHdpZHRoIChtb2JpbGUpIG9yIHNpdCBpbiBhIGZsZXggcm93IChtZCBhbmQgdXApLiAqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogTW9udGggc2VsZWN0b3I6IG9uZSBib3JkZXJlZCBib3ggd2l0aCB0aGUgYXJyb3dzIGluc2lkZS4gKi9cbi5tb250aC1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNDJweDtcbiAgcGFkZGluZzogMCA0cHg7XG4gIGJvcmRlcjogdmFyKC0tYnMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1icy1ib3JkZXItcmFkaXVzLWxnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLXN1cmZhY2UpO1xufVxuXG4vKiBNb250aCBuYW1lID0gZHJvcGRvd24gdG9nZ2xlOiBzYW1lIHRleHQgYW5kIHdlaWdodCBhcyBiZWZvcmUsIHdpdGggYSBtdXRlZCBjYXJldC4gU2FtZSBzdXJmYWNlIGFzIHRoZSBib3hcbiAgIGF0IHJlc3Q7IGEgdGVydGlhcnkgdGludCBvbiBob3ZlciAvIHdoaWxlIG9wZW4gc2hvd3MgaXQncyBjbGlja2FibGUuICovXG4ubW9udGgtdG9nZ2xlIHtcbiAgbWluLXdpZHRoOiAwO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1icy1ib2R5LWNvbG9yKTtcbn1cblxuLm1vbnRoLXRvZ2dsZTpob3Zlcixcbi5tb250aC10b2dnbGVbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy10ZXJ0aWFyeS1iZyk7XG59XG5cbi5tb250aC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubW9udGgtY2FyZXQge1xuICBmbGV4LXNocmluazogMDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogdmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLypcbiAqIFBpY2tlciBwYW5lbDogcGlubmVkIHVuZGVyIHRoZSB3aG9sZSBzZWxlY3RvciBib3gsIGVkZ2UgdG8gZWRnZSB3aXRoIGl0cyBvdXRlciBib3JkZXIgKHN0YXRpYyBkaXNwbGF5LFxuICogc28gQm9vdHN0cmFwIG9ubHkgYWRkcyBkYXRhLWJzLXBvcHBlcj1cInN0YXRpY1wiOyB0aGVzZSBvdmVycmlkZSBpdHMgdG9wL2xlZnQpLiBIYWlybGluZSBib3JkZXIsIGNhcmQgY29ybmVycy5cbiAqL1xuLm1vbnRoLXBpY2tlcltkYXRhLWJzLXBvcHBlcl0ge1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1icy1ib3JkZXItd2lkdGgpKTtcbiAgcmlnaHQ6IGNhbGMoLTEgKiB2YXIoLS1icy1ib3JkZXItd2lkdGgpKTtcbiAgbWFyZ2luLXRvcDogMC4zNzVyZW07XG59XG5cbi5tb250aC1waWNrZXIge1xuICAtLWJzLWRyb3Bkb3duLWJvcmRlci1jb2xvcjogdmFyKC0taGFpcmxpbmUpO1xuICAtLWJzLWRyb3Bkb3duLWJvcmRlci1yYWRpdXM6IHZhcigtLWJzLWJvcmRlci1yYWRpdXMtbGcpO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi8qIE1vbnRoIGJ1dHRvbnM6IGJvcmRlcmxlc3MgYW5kIHRyYW5zcGFyZW50LCB0ZXJ0aWFyeSB0aW50IG9uIGhvdmVyIChmb2N1cyByaW5nIGZyb20gc3R5bGVzLmNzcykuICovXG4ucGlja2VyLW1vbnRoIHtcbiAgLS1icy1idG4tY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IpO1xuICAtLWJzLWJ0bi1iZzogdHJhbnNwYXJlbnQ7XG4gIC0tYnMtYnRuLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYnMtYnRuLWhvdmVyLWNvbG9yOiB2YXIoLS1icy1ib2R5LWNvbG9yKTtcbiAgLS1icy1idG4taG92ZXItYmc6IHZhcigtLWJzLXRlcnRpYXJ5LWJnKTtcbiAgLS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1icy1idG4tYWN0aXZlLWNvbG9yOiB2YXIoLS1icy1ib2R5LWNvbG9yKTtcbiAgLS1icy1idG4tYWN0aXZlLWJnOiB2YXIoLS1icy10ZXJ0aWFyeS1iZyk7XG4gIC0tYnMtYnRuLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJzLWJ0bi1kaXNhYmxlZC1jb2xvcjogdmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgLS1icy1idG4tZGlzYWJsZWQtYmc6IHRyYW5zcGFyZW50O1xuICAtLWJzLWJ0bi1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJzLWJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAwLjQ1O1xuICAtLWJzLWJ0bi1mb2N1cy1zaGFkb3ctcmdiOiB2YXIoLS1icy1wcmltYXJ5LXJnYik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJzLWJvcmRlci1yYWRpdXMpO1xufVxuXG4vKiBDdXJyZW50IG1vbnRoICh3aGVuIG5vdCBzZWxlY3RlZCk6IGEgZ3JheSBvdXRsaW5lIHRoYXQgcmVhZHMgaW4gYm90aCB0aGVtZXMuICovXG4ucGlja2VyLW1vbnRoLmlzLWN1cnJlbnQge1xuICAtLWJzLWJ0bi1ib3JkZXItY29sb3I6IHJnYmEodmFyKC0tYnMtZW1waGFzaXMtY29sb3ItcmdiKSwgMC4zNSk7XG4gIC0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1icy1lbXBoYXNpcy1jb2xvci1yZ2IpLCAwLjM1KTtcbn1cblxuLyogU2VsZWN0ZWQgbW9udGg6IHRoZSBnbG9iYWwgYWNjZW50IC5idG4tcHJpbWFyeSAoZmlsbGVkLCB3aGl0ZSB0ZXh0KS4gKi9cbi5waWNrZXItbW9udGguYnRuLXByaW1hcnkge1xuICAtLWJzLWJ0bi1jb2xvcjogI2ZmZjtcbiAgLS1icy1idG4tYmc6IHZhcigtLWJzLXByaW1hcnkpO1xuICAtLWJzLWJ0bi1ib3JkZXItY29sb3I6IHZhcigtLWJzLXByaW1hcnkpO1xuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogI2ZmZjtcbiAgLS1icy1idG4taG92ZXItYmc6IHZhcigtLWJzLXByaW1hcnkpO1xuICAtLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3I6IHZhcigtLWJzLXByaW1hcnkpO1xuICAtLWJzLWJ0bi1hY3RpdmUtY29sb3I6ICNmZmY7XG4gIC0tYnMtYnRuLWFjdGl2ZS1iZzogdmFyKC0tYnMtcHJpbWFyeSk7XG4gIC0tYnMtYnRuLWFjdGl2ZS1ib3JkZXItY29sb3I6IHZhcigtLWJzLXByaW1hcnkpO1xufVxuXG4ubW9udGgtYXJyb3cge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJzLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWJzLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5tb250aC1hcnJvdzpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGNvbG9yOiB2YXIoLS1icy1ib2R5LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtdGVydGlhcnktYmcpO1xufVxuXG4vKiDigLogb24gdGhlIGN1cnJlbnQgbW9udGg6IGdyZXllZCBvdXQsIG5vIGhvdmVyIHRpbnQuICovXG4ubW9udGgtYXJyb3c6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLm1vbnRoLWFycm93OmZvY3VzLXZpc2libGUge1xuICBjb2xvcjogdmFyKC0tYnMtYm9keS1jb2xvcik7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubW9udGgtc2VsZWN0b3Ige1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/month-selector/month-selector.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/month-selector/month-selector.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The box is also the Bootstrap .dropdown: the month name opens a month picker pinned under the whole box. -->\n<div class=\"month-selector dropdown\"\n     *ngIf=\"{ label: (label$ | async), atCurrent: (atCurrentMonth$ | async), atFirst: (atFirstMonth$ | async) } as state\">\n  <!-- Can't go before January 2020. -->\n  <button #previousButton type=\"button\" class=\"month-arrow\" aria-label=\"Previous month\" [disabled]=\"state.atFirst\"\n          (click)=\"previousMonth()\">\n    <i class=\"bi bi-chevron-left\" aria-hidden=\"true\"></i>\n  </button>\n\n  <!-- A direct child of the .dropdown box (Bootstrap finds the menu in the toggle's parent), centred with mx-auto.\n       Static display: positioned by CSS under the box (no Popper); clicks inside (year arrows) keep it open. -->\n  <button #toggle type=\"button\" class=\"month-toggle d-inline-flex align-items-center gap-1 rounded px-2 py-1 mx-auto\"\n          data-bs-toggle=\"dropdown\" data-bs-display=\"static\" data-bs-auto-close=\"outside\"\n          aria-haspopup=\"true\" aria-expanded=\"false\" [id]=\"ids.toggle\"\n          [attr.aria-label]=\"'Choose month, ' + state.label + ' selected'\">\n    <span class=\"month-label\">{{ state.label }}</span>\n    <i class=\"bi bi-chevron-down month-caret\" aria-hidden=\"true\"></i>\n  </button>\n\n  <!-- Can't go past the current month. -->\n  <button #nextButton type=\"button\" class=\"month-arrow\" aria-label=\"Next month\" [disabled]=\"state.atCurrent\"\n          (click)=\"nextMonth()\">\n    <i class=\"bi bi-chevron-right\" aria-hidden=\"true\"></i>\n  </button>\n\n  <!-- Announces month changes (the toggle's accessible name is set by aria-label). -->\n  <span class=\"visually-hidden\" aria-live=\"polite\">{{ state.label }}</span>\n\n  <div #menu class=\"dropdown-menu month-picker shadow-none p-3\" [attr.aria-labelledby]=\"ids.toggle\">\n    <div class=\"d-flex align-items-center justify-content-between mb-2\">\n      <button #previousYearButton type=\"button\" class=\"month-arrow\" aria-label=\"Previous year\" [disabled]=\"!canPreviousYear\" (click)=\"shiftYear(-1)\">\n        <i class=\"bi bi-chevron-left\" aria-hidden=\"true\"></i>\n      </button>\n      <span class=\"fw-bold\" [id]=\"ids.year\">{{ pickerYear }}</span>\n      <button #nextYearButton type=\"button\" class=\"month-arrow\" aria-label=\"Next year\" [disabled]=\"!canNextYear\" (click)=\"shiftYear(1)\">\n        <i class=\"bi bi-chevron-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n\n    <!-- 3 x 4 month grid; arrow keys move between months (see onWindowKeydown). -->\n    <div class=\"row row-cols-3 g-2\" role=\"group\" [attr.aria-labelledby]=\"ids.year\">\n      <div class=\"col\" *ngFor=\"let m of pickerMonths; trackBy: trackByMonth\">\n        <button type=\"button\" class=\"btn w-100 py-3 py-md-2 picker-month\"\n                [class.btn-primary]=\"m.selected\" [class.fw-semibold]=\"m.selected || m.current\"\n                [class.is-current]=\"m.current && !m.selected\" [disabled]=\"m.disabled\"\n                [attr.aria-pressed]=\"m.selected\" [attr.aria-current]=\"m.current && !m.selected ? 'date' : null\"\n                [attr.aria-label]=\"m.longName + ' ' + pickerYear\" (click)=\"pickMonth(m)\">{{ m.shortName }}</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/month-selector/month-selector.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/month-selector/month-selector.component.ts ***!
  \******************************************************************************/
/*! exports provided: MonthSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthSelectorComponent", function() { return MonthSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_services_today_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/today.service */ "./src/app/core/services/today.service.ts");
/* harmony import */ var _core_utils_date_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/utils/date-format */ "./src/app/core/utils/date-format.ts");
/* harmony import */ var _core_utils_month_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/utils/month-range */ "./src/app/core/utils/month-range.ts");







var nextId = 0;
/**
 * ‹ October 2026 › month selector, shared by every page. Reads and writes the one selected month
 * in DataService, so changing it on any page changes it everywhere. › is disabled on the current month.
 * ‹ is disabled on January 2020. The month name opens a Bootstrap dropdown month picker (year arrows + 3x4 month
 * grid) under the box: any month from January 2020 to the current month can be picked, with or without data.
 */
var MonthSelectorComponent = /** @class */ (function () {
    function MonthSelectorComponent(dataService, today, cdr) {
        var _this = this;
        this.dataService = dataService;
        this.today = today;
        this.cdr = cdr;
        /** Unique per instance (several selectors can exist while routes change). */
        this.uid = 'month-picker-' + (++nextId);
        this.ids = { toggle: this.uid + '-toggle', year: this.uid + '-year' };
        /** Year shown in the picker (reset to the selected month's year on every open). */
        this.pickerYear = 0;
        this.pickerMonths = [];
        this.canPreviousYear = false;
        this.canNextYear = false;
        this.dropdown = null;
        /** Before showing: open on the selected month's year. */
        this.onShow = function () {
            _this.pickerYear = _this.dataService.getSelectedMonth().year;
            _this.buildPicker();
            _this.cdr.detectChanges();
        };
        /**
         * Arrow keys in the month grid. Listens on window in the capture phase: Bootstrap's own dropdown key handler
         * (document, capture) would otherwise swallow ArrowUp/ArrowDown for its .dropdown-item lists.
         */
        this.onWindowKeydown = function (event) {
            var target = event.target;
            if (_this.menu && target && target.classList && target.classList.contains('picker-month') &&
                _this.menu.nativeElement.contains(target)) {
                _this.onGridKeydown(event);
            }
        };
        /** Once shown: focus the selected month (or the first enabled one). */
        this.onShown = function () {
            var menu = _this.menu.nativeElement;
            var target = menu.querySelector('.picker-month[aria-pressed="true"]:not(:disabled)')
                || menu.querySelector('.picker-month:not(:disabled)');
            if (target) {
                target.focus();
            }
        };
        this.label$ = this.dataService.selectedMonth$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (selected) { return Object(_core_utils_date_format__WEBPACK_IMPORTED_MODULE_5__["formatMonthYear"])(selected.year, selected.month); }));
        this.atCurrentMonth$ = this.dataService.isCurrentMonthSelected$;
        this.atFirstMonth$ = this.dataService.isFirstSelectableMonthSelected$;
    }
    MonthSelectorComponent.prototype.ngAfterViewInit = function () {
        if (typeof bootstrap === 'undefined' || !this.toggle) {
            return;
        }
        var toggle = this.toggle.nativeElement;
        // Config comes from the data attributes (static display, auto-close outside).
        this.dropdown = bootstrap.Dropdown.getOrCreateInstance(toggle);
        toggle.addEventListener('show.bs.dropdown', this.onShow);
        toggle.addEventListener('shown.bs.dropdown', this.onShown);
        window.addEventListener('keydown', this.onWindowKeydown, true);
    };
    MonthSelectorComponent.prototype.ngOnDestroy = function () {
        if (!this.dropdown) {
            return;
        }
        var toggle = this.toggle.nativeElement;
        toggle.removeEventListener('show.bs.dropdown', this.onShow);
        toggle.removeEventListener('shown.bs.dropdown', this.onShown);
        window.removeEventListener('keydown', this.onWindowKeydown, true);
        this.dropdown.dispose();
        this.dropdown = null;
    };
    MonthSelectorComponent.prototype.previousMonth = function () {
        this.dataService.previousMonth();
        // Landing on January 2020 disables ‹; move focus to › so it doesn't drop to <body>.
        var previous = this.previousButton ? this.previousButton.nativeElement : null;
        var atFirst = Object(_core_utils_month_range__WEBPACK_IMPORTED_MODULE_6__["monthIndex"])(this.dataService.getSelectedMonth()) <= Object(_core_utils_month_range__WEBPACK_IMPORTED_MODULE_6__["monthIndex"])(this.dataService.getMinSelectableMonth());
        if (atFirst && previous && document.activeElement === previous && this.nextButton) {
            this.nextButton.nativeElement.focus();
        }
    };
    MonthSelectorComponent.prototype.nextMonth = function () {
        this.dataService.nextMonth();
        // Landing on the current month disables ›; move focus to ‹ so it doesn't drop to <body>.
        var next = this.nextButton ? this.nextButton.nativeElement : null;
        if (this.today.isCurrentMonth(this.dataService.getSelectedMonth()) && next && document.activeElement === next && this.previousButton) {
            this.previousButton.nativeElement.focus();
        }
    };
    /** Year arrows: only the displayed year changes (the panel stays open, the selection stays). */
    MonthSelectorComponent.prototype.shiftYear = function (delta) {
        this.pickerYear += delta;
        this.buildPicker();
        this.cdr.detectChanges();
        // The arrow just used may now be disabled (first-data or current year): keep focus in the panel.
        var used = delta < 0 ? this.previousYearButton : this.nextYearButton;
        var other = delta < 0 ? this.nextYearButton : this.previousYearButton;
        if (used && other && used.nativeElement.disabled && document.activeElement === used.nativeElement) {
            other.nativeElement.focus();
        }
    };
    /** Selects the month, closes the panel and returns focus to the month name. */
    MonthSelectorComponent.prototype.pickMonth = function (m) {
        if (m.disabled) {
            return;
        }
        this.dataService.setSelectedMonth(this.pickerYear, m.month);
        if (this.dropdown) {
            this.dropdown.hide();
        }
        if (this.toggle) {
            this.toggle.nativeElement.focus();
        }
    };
    /** Arrow keys move between enabled months (left/right by one, up/down by a row of 3), skipping disabled ones. */
    MonthSelectorComponent.prototype.onGridKeydown = function (event) {
        var steps = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -3, ArrowDown: 3 };
        var step = steps[event.key];
        if (!step) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        var buttons = Array.prototype.slice.call(this.menu.nativeElement.querySelectorAll('.picker-month'));
        var index = buttons.indexOf(document.activeElement);
        if (index === -1) {
            return;
        }
        for (index += step; index >= 0 && index < buttons.length; index += step) {
            if (!buttons[index].disabled) {
                buttons[index].focus();
                return;
            }
        }
    };
    MonthSelectorComponent.prototype.trackByMonth = function (index, m) {
        return m.month;
    };
    /** Month buttons and year-arrow states for pickerYear. */
    MonthSelectorComponent.prototype.buildPicker = function () {
        var selected = this.dataService.getSelectedMonth();
        var current = this.today.currentYearMonth();
        var min = this.dataService.getMinSelectableMonth();
        var year = this.pickerYear;
        this.pickerMonths = [];
        for (var month = 1; month <= 12; month++) {
            var date = new Date(year, month - 1, 1);
            var isSelected = selected.year === year && selected.month === month;
            var index = Object(_core_utils_month_range__WEBPACK_IMPORTED_MODULE_6__["monthIndex"])({ year: year, month: month });
            var unavailable = index > Object(_core_utils_month_range__WEBPACK_IMPORTED_MODULE_6__["monthIndex"])(current) || index < Object(_core_utils_month_range__WEBPACK_IMPORTED_MODULE_6__["monthIndex"])(min);
            this.pickerMonths.push({
                month: month,
                shortName: date.toLocaleDateString('en-US', { month: 'short' }),
                longName: date.toLocaleDateString('en-US', { month: 'long' }),
                selected: isSelected,
                current: current.year === year && current.month === month,
                disabled: unavailable && !isSelected
            });
        }
        this.canPreviousYear = year > min.year;
        this.canNextYear = year < current.year;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('previousButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MonthSelectorComponent.prototype, "previousButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nextButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MonthSelectorComponent.prototype, "nextButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toggle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MonthSelectorComponent.prototype, "toggle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('menu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MonthSelectorComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('previousYearButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MonthSelectorComponent.prototype, "previousYearButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nextYearButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MonthSelectorComponent.prototype, "nextYearButton", void 0);
    MonthSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-month-selector',
            template: __webpack_require__(/*! ./month-selector.component.html */ "./src/app/shared/components/month-selector/month-selector.component.html"),
            styles: [__webpack_require__(/*! ./month-selector.component.css */ "./src/app/shared/components/month-selector/month-selector.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _core_services_today_service__WEBPACK_IMPORTED_MODULE_4__["TodayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], MonthSelectorComponent);
    return MonthSelectorComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/view-only-badge/view-only-badge.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/view-only-badge/view-only-badge.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Inline-flex so order/visibility utilities on the host work in flex headers. */\n:host {\n  display: inline-flex;\n  flex-shrink: 0;\n}\n/* Theme tokens from styles.css (--view-only-bg / --view-only-fg). */\n.view-only-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0.375rem 0.75rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  line-height: 1.2;\n  white-space: nowrap;\n  color: var(--view-only-fg);\n  background-color: var(--view-only-bg);\n}\n.view-only-badge svg {\n  flex-shrink: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdmlldy1vbmx5LWJhZGdlL3ZpZXctb25seS1iYWRnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdGQUFnRjtBQUNoRjtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCO0FBRUEsb0VBQW9FO0FBQ3BFO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIscUNBQXFDO0FBQ3ZDO0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdmlldy1vbmx5LWJhZGdlL3ZpZXctb25seS1iYWRnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSW5saW5lLWZsZXggc28gb3JkZXIvdmlzaWJpbGl0eSB1dGlsaXRpZXMgb24gdGhlIGhvc3Qgd29yayBpbiBmbGV4IGhlYWRlcnMuICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLyogVGhlbWUgdG9rZW5zIGZyb20gc3R5bGVzLmNzcyAoLS12aWV3LW9ubHktYmcgLyAtLXZpZXctb25seS1mZykuICovXG4udmlldy1vbmx5LWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6IHZhcigtLXZpZXctb25seS1mZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZpZXctb25seS1iZyk7XG59XG5cbi52aWV3LW9ubHktYmFkZ2Ugc3ZnIHtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/view-only-badge/view-only-badge.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/view-only-badge/view-only-badge.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"view-only-badge rounded-pill\">\n  <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n       stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n    <rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 11V8a4 4 0 0 1 8 0v3\"/>\n  </svg>\n  <span>View only</span>\n</span>\n"

/***/ }),

/***/ "./src/app/shared/components/view-only-badge/view-only-badge.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/view-only-badge/view-only-badge.component.ts ***!
  \********************************************************************************/
/*! exports provided: ViewOnlyBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOnlyBadgeComponent", function() { return ViewOnlyBadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/** "View only" pill shown in page headers on past months (lock icon is decorative). */
var ViewOnlyBadgeComponent = /** @class */ (function () {
    function ViewOnlyBadgeComponent() {
    }
    ViewOnlyBadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-only-badge',
            template: __webpack_require__(/*! ./view-only-badge.component.html */ "./src/app/shared/components/view-only-badge/view-only-badge.component.html"),
            styles: [__webpack_require__(/*! ./view-only-badge.component.css */ "./src/app/shared/components/view-only-badge/view-only-badge.component.css")]
        })
    ], ViewOnlyBadgeComponent);
    return ViewOnlyBadgeComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/money.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/money.pipe.ts ***!
  \********************************************/
/*! exports provided: MoneyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyPipe", function() { return MoneyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_currency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/currency.service */ "./src/app/core/services/currency.service.ts");
/* harmony import */ var _core_utils_money__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/money */ "./src/app/core/utils/money.ts");




/**
 * Shows rupees converted to the selected currency, e.g. 120000 -> '$1,363.64' (see formatMoney).
 * Impure so every amount updates as soon as the currency changes; it only divides and formats (cached Intl formatters).
 */
var MoneyPipe = /** @class */ (function () {
    function MoneyPipe(currencyService) {
        this.currencyService = currencyService;
    }
    /** Optional sign ('+' / '−') goes in front unless the amount shows as zero: {{ amount | money:sign }}. */
    MoneyPipe.prototype.transform = function (value, sign) {
        if (sign === void 0) { sign = ''; }
        return Object(_core_utils_money__WEBPACK_IMPORTED_MODULE_3__["formatSignedMoney"])(value, this.currencyService.currency, sign);
    };
    MoneyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'money',
            pure: false
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_currency_service__WEBPACK_IMPORTED_MODULE_2__["CurrencyService"]])
    ], MoneyPipe);
    return MoneyPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\Budget planner\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map