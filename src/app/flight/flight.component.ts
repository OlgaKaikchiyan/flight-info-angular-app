import { Component, Input, OnInit } from '@angular/core';
import { flight } from '../mock-flight'

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})

export class FlightComponent implements OnInit {
  public flight = flight;  

  constructor() { }

  ngOnInit() {
  }

}
