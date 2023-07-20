import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cupipes'
})
export class CupipesPipe implements PipeTransform {

  transform(value: String, name : String): String {
    return 'Firstname' + name
  }

}
