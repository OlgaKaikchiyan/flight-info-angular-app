import { Component, Input, OnInit } from '@angular/core';
import { FLIGHT } from '../mock-flight'

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})

export class FlightComponent implements OnInit {
  public flight = FLIGHT;  

  constructor() { }

  ngOnInit() {
  }

}
