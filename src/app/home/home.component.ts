import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, HttpClientModule, NgIf, NgFor],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public client: HttpClient 
  public recommended = ['']

  constructor (private httpClient: HttpClient) {
    this.client = httpClient
  }
  ngOnInit(): void {
    const url = 'https://flight.pequla.com/api/flight?page=0&size=3&type=departure&sort=scheduledAt,desc'
    this.client.get<any>(url,{
      headers: {
        'Accept':  'application/json'
      }
    }).subscribe(rsp=> this.recommended = rsp)

  }

}
