import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, sortBy: string): any {
    if(value.length === 0 || value.length === 1) {
      return value;
    } else {
      for(var i = 0; i < value.length; io)
    }
  }
}
