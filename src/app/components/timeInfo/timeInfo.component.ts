import { Component, Input, OnInit } from '@angular/core';
import { FlightInterface} from '../../flight-interface';

@Component({
  selector: 'app-timeInfo',
  templateUrl: './timeInfo.component.html',
  styleUrls: ['./timeInfo.component.scss'],
})
export class TimeInfoComponent implements OnInit {
  public isTooltipVisible: boolean = false;
  
  @Input() data!: FlightInterface

  constructor() {}

  ngOnInit() {}

  showTooltip() {
    this.isTooltipVisible = true;
  }

  hideTooltip() {
    this.isTooltipVisible = false;
  }
}
