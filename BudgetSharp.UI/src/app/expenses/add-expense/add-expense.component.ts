import { Component, EventEmitter, Output, LOCALE_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { getCurrencySymbol } from '@angular/common';
import { Expense } from '../expense.model';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss'
})
export class AddExpenseComponent {
  @Output() expenseAdded = new EventEmitter<Expense>();


  newExpense: Expense = {
    id: 0,
    description: '',
    amount: undefined,
    date: undefined,
    category: ''
  };

  addExpense() {
    const expense = {
      ...this.newExpense,
      id: Date.now(),
      date: new Date(this.newExpense.date!)
    };
    this.expenseAdded.emit(expense);
    this.resetForm();
  }

  private resetForm() {
    this.newExpense = {
      id: 0,
      description: '',
      amount: 0,
      date: new Date(),
      category: ''
    };
  }
}
