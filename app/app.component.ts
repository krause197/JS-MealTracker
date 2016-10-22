import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-tracker',
  template: `
    <div class="container">
      <div class="jumbotron text-center">
        <h1>Meal Tracker</h1>
      </div>
      <new-meal (newMealSender)="addMeal($event)"></new-meal>
      <meal-list [childMealList]="masterMealList"></meal-list>
    </div>
  `
})

export class AppComponent {

  public masterMealList: Meal[] = [];
  addMeal(newMealFromChild) {
    this.masterMealList.push(newMealFromChild)
    console.log(this.masterMealList);
  }
}
