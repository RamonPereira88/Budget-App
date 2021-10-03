import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-items.model';

@Component({
  selector: 'budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item!: BudgetItem;
  @Output() onXButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  xButtonClick() {
    //emit an
    this.onXButtonClick.emit()
  }

  onCardClick() {
    this.cardClick.emit();
  }

}
