import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent implements OnInit {
  public isVisible = false;

  @Input() data: any

  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    this.isVisible = !this.isVisible;
  }

}
