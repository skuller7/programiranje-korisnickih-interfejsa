import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PageModel } from '../models/page.model';
import { FlightModel } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  private client: HttpClient
  private baseUrl: string

  constructor() {
    this.client = inject(HttpClient)
    this.baseUrl = 'https://flight.pequla.com/api'
  }

  public getRecommendedFlights() {
    const url = `${this.baseUrl}/flight?page=0&size=3&type=departure&sort=scheduledAt,desc`
    return this.client.get<PageModel<FlightModel>>(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
  }

  public getFlightsByDestination(dest: string) {
    const url = `${this.baseUrl}/flight/destination/${dest}?page=0&size=30&sort=scheduledAt,desc`
    return this.client.get<PageModel<FlightModel>>(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
  }

  public getFlightById(id: string) {
    const url = `${this.baseUrl}/flight/${id}`
    return this.client.get<FlightModel>(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
  }

  public getAvailableDestinations() {
    const url = `${this.baseUrl}/flight/destination?type=departure`
    return this.client.get<string[]>(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
  }

  public generateImageUrl(dest: string) {
    return `https://img.pequla.com/destination/${dest.split(' ')[0].toLowerCase()}.jpg`
  }
}
