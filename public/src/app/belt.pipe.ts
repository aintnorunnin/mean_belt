import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'belt'
})
export class BeltPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

// transform(cars: Array<Car>, search_text: string): Array<Car> {
//     if(!search_text){ return cars }
//
//     search_text = search_text.toLowerCase()
//
//     return cars.filter(car => car.make.toLowerCase().includes(search_text) || car.model.toLowerCase().includes(search_text))
// }
//
// <app-cars-detail *ngFor="let car of cars | filter:search" [this_car]="car"></app-cars-detail>
