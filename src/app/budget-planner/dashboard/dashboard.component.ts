import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, SideNavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  //Income
  lastMonthsIncome = ['January: $1000', 'February: $1500', 'March: $1200'];
  currentMonthIncome = '$2000';

  //Expense
  lastMonthsExpense = ['January: $800', 'February: $1000', 'March: $1200'];
  currentMonthExpense = '$1500';
 
  //Todo Trans
  todoTransactions = [
    { description: 'Pay electricity bill' },
    { description: 'Submit monthly report' },
    { description: 'Buy groceries' },
    { description: 'Call insurance company' }
  ];

  //Total
  totalCurrentMonthIncome = 2000;
  totalCurrentMonthExpense = 1500;
  constructor(public _router: Router) { }

  onIncome() {
    this._router.navigate(['/budget-planner/income']);
  }
  onExpense() {
    this._router.navigate(['/budget-planner/expense']);
  }
  onTodo() {
    this._router.navigate(['/budget-planner/todo']);
  }
  
  //Calculate Total
  get currentMonthSavings(): number {
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }
}
