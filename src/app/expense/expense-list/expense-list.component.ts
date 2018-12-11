import { Component, OnInit } from '@angular/core';

import { Expense } from '@app/shared/model/expense'

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {

  expenses: Expense[] = [
    new Expense(300),
    new Expense(5000)
  ];

  constructor() { }

  ngOnInit() {
  }

}
