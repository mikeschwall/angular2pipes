import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FirstComponent} from './course.first';
import {SecondComponent} from './course.second';
import {ThirdComponent} from './course.third';
import {RouterModule} from '@angular/router';
import {routing} from './app.routing';
import {CoursePipe} from './course.pipe';
@NgModule({
  imports:      [ BrowserModule, RouterModule, routing ],
  declarations: [ AppComponent, FirstComponent, SecondComponent, ThirdComponent, CoursePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }