import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <div *ngIf="meal">
      <div class="form-group">
        <label>Name:</label>
        <input class="form-control" [(ngModel)]="meal.name">
      </div>
      <div class="form-group">
        <label>Details:</label>
        <input class="form-control" [(ngModel)]="meal.details">
      </div>
      <div class="form-group">
        <label>Calories:</label>
        <input class="form-control" type="number" [(ngModel)]="meal.calories">
      </div>
      <button class="btn btn-default" (click)="doneClicked(meal)">Edit Meal</button>
    </div>
  `
})

export class EditMealComponent {
  public log: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked(meal: Meal) {
    this.doneClickedSender.emit(meal);
  }
}
