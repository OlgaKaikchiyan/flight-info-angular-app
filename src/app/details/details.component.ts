import { Component, Input, OnInit } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent implements OnInit {
  public isVisible = false;
  public faChevronUp = faChevronUp;

  @Input() data: any

  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    this.isVisible = !this.isVisible;    
  }

}
