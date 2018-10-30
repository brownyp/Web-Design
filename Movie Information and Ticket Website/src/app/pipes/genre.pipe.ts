import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(value: any, type: any): any {
    if(type == null) {
      return value;
    } else {
      return value.filter(item => item.genres.includes(type));
    }
  }

}
