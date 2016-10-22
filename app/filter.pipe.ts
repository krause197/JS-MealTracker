import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: meal[], filterBy) {
    var output: meal[] = [];
    if(filterBy === 'Low Calorie'){
      for(var i = 0; i < input.length; i++) {
        if(input[i].calories < 500) {
          output.push(input[i])
        }
      }
    } else if(filterBy === 'High Calories'){
      for(var i = 0; i < input.length; i++) {
        if(input[i].calories >= 500) {
          output.push(input[i])
        }
      }
    } else {
      return input;
    }
    return output;
  }
}
