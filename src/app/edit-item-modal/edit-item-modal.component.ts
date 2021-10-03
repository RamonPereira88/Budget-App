import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-items.model';

@Component({
  selector: 'edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  //Referencing the edit dialog that appears so we can actually change data and inject it
  constructor(
    public dialogRef: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem) { }

  ngOnInit(): void {
  }

  onSubmit(updatedItem: BudgetItem) {
    this.dialogRef.close(updatedItem)
  }

}
