import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-items.model';

@Component({
  selector: 'add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item?: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem?: boolean;

  constructor() { }

  ngOnInit() {
    //Checking if item has a value
    if (this.item){
    //this means that an existing item object was passed into this component
    //therefore this is not a new item
    this.isNewItem = false;
    } else {
      this.isNewItem = true;
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value) //Grabs the value(name and amount) of the form to be added into the items of the budget list
    form.reset(); //Clears the input of the value typed in
  }

}
