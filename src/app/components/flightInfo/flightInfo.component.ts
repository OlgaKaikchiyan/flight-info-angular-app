import { Component, OnInit, Input } from '@angular/core';
import { FlightInterface} from '../../flight-interface';

@Component({
  selector: 'app-flightInfo',
  templateUrl: './flightInfo.component.html',
  styleUrls: ['./flightInfo.component.scss']
})

export class FlightInfoComponent implements OnInit {

  // "Property 'data' has no initializer and is not definitely assigned in the constructor" when I try to set the input to be of type FlightInterface
  @Input() data: any

  constructor() { }

  ngOnInit() {
  }

}
