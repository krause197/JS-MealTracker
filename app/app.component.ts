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

  public masterMealList: Meal[] = [
    new Meal("Sushi", "Spider Roll and Oregon Roll", 600),
    new Meal("Pizza", "Supreme, whole medium pie", 1050),
    new Meal("Salad", "House Salad with Blue Cheese Dressing", 450),
    new Meal("Crackers and Cheese", "Wheat Thins and Cheddar Cheese", 499),
    new Meal("Ice Cream", "Ice Cream Sandwich", 500)
  ];
  addMeal(newMealFromChild) {
    this.masterMealList.push(newMealFromChild)
    console.log(this.masterMealList);
  }
}
