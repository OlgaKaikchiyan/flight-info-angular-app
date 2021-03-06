import { Component, OnInit } from '@angular/core';
import { FlightInterface} from '../../shared/models/flight.model';
import { FlightsService} from '../../shared/services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})

export class FlightComponent implements OnInit {
  public flights: FlightInterface[] = [];  

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.getFlights();
  }

  getFlights(): void {
    this.flightsService.getFlights()
      .subscribe(flights => this.flights = flights)
  }

}
