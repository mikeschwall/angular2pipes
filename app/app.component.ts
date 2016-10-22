import { Component } from '@angular/core';
import {FirstComponent} from './course.first';
import {SecondComponent} from './course.second';
import {ThirdComponent} from './course.third';
import {routing} from './app.routing';
@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent { }