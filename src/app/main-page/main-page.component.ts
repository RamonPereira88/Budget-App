import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-items.model';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  BudgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem) {
    this.BudgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItem) {
    let index = this.BudgetItems.indexOf(item); //Grab the index of the item to be removed by the splice method in the line below
    this.BudgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

}
