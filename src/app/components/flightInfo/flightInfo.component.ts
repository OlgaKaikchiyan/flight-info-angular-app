import { Component, OnInit, Input } from '@angular/core';
import { FlightInterface} from '../../flight-interface';

@Component({
  selector: 'app-flightInfo',
  templateUrl: './flightInfo.component.html',
  styleUrls: ['./flightInfo.component.scss']
})

export class FlightInfoComponent implements OnInit {

  @Input() data!: FlightInterface

  constructor() { }

  ngOnInit() {
  }

}
