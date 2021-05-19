import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flightInfo',
  templateUrl: './flightInfo.component.html',
  styleUrls: ['./flightInfo.component.scss']
})

export class FlightInfoComponent implements OnInit {

  @Input() data: any

  constructor() { }

  ngOnInit() {
  }

}
