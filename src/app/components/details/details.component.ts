import { Component, Input, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FlightInterface} from '../../flight-interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent implements OnInit {
  public isVisible: boolean = false;
  public faAngleDown = faAngleDown;

  @Input() data!: FlightInterface

  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    this.isVisible = !this.isVisible;    
  }

}
