import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['childMealList'],
  template: `
    <div *ngIf="childMealList">
      <h2>Meals Recorded</h2>
      <select (change)="onChangeFilter($event.target.value)">
        <option value="All">Show All Recorded Meals</option>
        <option value="High Calorie">Show All Meals Above 500 Calories</option>
        <option value="Low Calorie">Show All Meals Lower than 500 Calories</option>
      </select>
      <div *ngFor="meal of childMealList | filter:filterBy">
        <p>Name: {{ meal.name }}</p>
        <p>Details: {{ meal.details }}</p>
        <p>Calories: {{ meal.calories }}</p>
        <button class="btn btn-default btn-sm" (click)="editClicked(meal)">Edit Recorded Meal</button>
      </div>
      <edit-meal [meal]="editMeal" (doneClickedSender)="doneClicket($event)"></edit-meal>
    </div>
  `
  })

  export class MealListComponent {
    public childMealList: Meal[];
    public filterBy: string = 'All';
    public editMeal: Meal = null;
    onChangeFilter(optionSelected) {
      this.filterBy = optionSelected;
    }
    editClicked(meal: Meal) {
      this.editMeal = meal;
    }
    doneClicked(meal: Meal) {
      this.editMeal = null;
    }

  }
