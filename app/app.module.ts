import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewMealComponent } from './new-meal.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
   ],
  declarations: [
    AppComponent,
    NewMealComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
