import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewMealComponent } from './new-meal.component';
import { MealListComponent } from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
   ],
  declarations: [
    AppComponent,
    NewMealComponent,
    MealListComponent,
    EditMealComponent,
    FilterPipe
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
