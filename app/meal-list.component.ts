import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['childMealList'],
  template: `
    <div *ngIf="childMealList">
      <div *ngFor="meal of childMealList">
        <p>Name: {{ meal.name }}</p>
        <p>Details: {{ meal.details }}</p>
        <p>Calories: {{ meal.calories }}</p>
      </div>
    </div>
  `
  })

  export class MealListComponent {
  public childMealList: Meal[];
  }
