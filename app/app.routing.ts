import {FirstComponent} from './course.first';
import {SecondComponent} from './course.second';
import {ThirdComponent} from './course.third';
import {RouterModule, Routes} from '@angular/router';

const APP_ROUTES:Routes = [

    {path:"", component:FirstComponent},
    {path:"second", component:SecondComponent},
    {path:"third", component:ThirdComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);