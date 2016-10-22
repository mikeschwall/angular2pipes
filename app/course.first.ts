import {Component} from '@angular/core';

@Component({

    selector: "First",
    template:`
    
        <h2>{{bodytext.header}}</h2>
        {{ bodytext.maincopy | mypipe }}

    
    
    `


})

export class FirstComponent {


    bodytext = {

        header: "This is my Title",
        maincopy:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`


    }


}