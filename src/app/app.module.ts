import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { BudgetsComponent } from './pages/budgets/budgets.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { MonthSelectorComponent } from './shared/components/month-selector/month-selector.component';
import { ViewOnlyBadgeComponent } from './shared/components/view-only-badge/view-only-badge.component';
import { EmptyStateComponent } from './shared/components/empty-state/empty-state.component';
import { AppAlertComponent } from './shared/components/app-alert/app-alert.component';
import { AddTransactionModalComponent } from './shared/components/add-transaction-modal/add-transaction-modal.component';
import { DeleteTransactionModalComponent } from './shared/components/delete-transaction-modal/delete-transaction-modal.component';
import { InrPipe } from './shared/pipes/inr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    OverviewComponent,
    TransactionsComponent,
    BudgetsComponent,
    ReportsComponent,
    InrPipe,
    AddTransactionModalComponent,
    DeleteTransactionModalComponent,
    AppAlertComponent,
    MonthSelectorComponent,
    ViewOnlyBadgeComponent,
    EmptyStateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
