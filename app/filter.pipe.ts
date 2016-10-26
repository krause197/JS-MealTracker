import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: Meal[], filterTotal) {
    var output: Meal[] = [];
    if(filterTotal === 'LowCalorie'){
      for(var i = 0; i < input.length; i++) {
        if(input[i].calories < 500) {
          output.push(input[i])
        }
      }
      return output;
    } else if(filterTotal === 'HighCalorie'){
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
