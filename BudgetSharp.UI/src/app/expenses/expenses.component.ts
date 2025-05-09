import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { Expense } from './expense.model';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    AddExpenseComponent
  ],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})
export class ExpensesComponent {
  displayedColumns: string[] = ['date', 'description', 'category', 'amount', 'actions'];
  expenses: Expense[] = [];

  onExpenseAdded(expense: Expense) {
    this.expenses = [...this.expenses, expense];
  }

  deleteExpense(id: number) {
    this.expenses = this.expenses.filter(expense => expense.id !== id);
  }
}
