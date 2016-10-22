import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:"mypipe"})

export class CoursePipe  implements PipeTransform {

    transform(value:String, args:String[]) {

        if (value) {

            return value.substring(0,50) + "...";


        }


    }



}