import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['childMealList'],
  template: `
    <div *ngIf="childMealList">
      <h2 class="text-right">Meals Recorded
      <select (change)="onChangeFilter($event.target.value)">
        <option value="All">Show All Recorded Meals</option>
        <option value="HighCalorie">Show All Meals Above 500 Calories</option>
        <option value="LowCalorie">Show All Meals Lower than 500 Calories</option>
      </select></h2>
      <div *ngFor="let meal of childMealList | filter:filterTotal">
        <div class="list" id="meal">
          <p>Name: {{ meal.name }}</p>
          <p>Details: {{ meal.details }}</p>
          <p>Calories: {{ meal.calories }}</p>
          <button class="btn btn-default btn-sm" (click)="editClicked(meal)">Edit Recorded Meal</button>
        </div>
      </div>
      <edit-meal [meal]="editMeal" (doneClickedSender)="doneClicked($event)"></edit-meal>
    </div>
  `
  })

  export class MealListComponent {
    public childMealList: Meal[];
    public filterTotal: string = 'All';
    public editMeal: Meal = null;
    onChangeFilter(optionSelected) {
      this.filterTotal = optionSelected;
    }
    editClicked(meal: Meal) {
      this.editMeal = meal;
    }
    doneClicked(meal: Meal) {
      this.editMeal = null;
    }

  }
