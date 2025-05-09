import { Routes } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';

export const routes: Routes = [
    { path: '', redirectTo: '/expenses', pathMatch: 'full' },
    { path: 'expenses', component: ExpensesComponent }
];
