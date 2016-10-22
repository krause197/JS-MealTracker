import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div>
      <div class="form-group">
        <label>Name:</label>
        <input class="form-control" #name>
      </div>
      <div class="form-group">
        <label>Details:</label>
        <input class="form-control" #details>
      </div>
      <div class="form-group">
        <label>Calories:</label>
        <input class="form-control" type="number" #calories>
      </div>
      <button class="btn btn-primary" (click)="addClicked(name.value, details.value, calories.value); name.value=''; details.value=''; calories.value='';">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
