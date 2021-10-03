import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-items.model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems!: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDeleteButtonClick(item: BudgetItem) {
    this.delete.emit(item);
  }

  onCardClick(item: BudgetItem) {
    //show edit modal that we're gonna use from Angular Material
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '600px',
      data: item
    });

    dialogRef.afterClosed().subscribe( result => {
      //Check if result has a value
      if (result) {
        // result is the updated budget item
        // replace the item with the updated/submitted item from the from
        this.budgetItems[this.budgetItems.indexOf(item)] = result;
      }
    })
  }
}
