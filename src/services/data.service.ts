import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getAirlines(): string[] {
    return [
      'Air Serbia', 'Fly Emirates', 'Lufthansa'
    ]
  }

  public getFlightClass(): string[] {
    return [
      'First Class', 'Business', 'Economy'
    ]
  }

  public formatDate(iso: string) {
    return new Date(iso).toLocaleString('sr-RS')
  }
}
