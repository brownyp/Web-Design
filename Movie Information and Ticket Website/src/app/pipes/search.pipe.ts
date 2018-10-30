import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, phrase?: any): any {
    return value.filter(item =>
      item.name.toLowerCase().includes(phrase.toLowerCase())
    );
  }

}
