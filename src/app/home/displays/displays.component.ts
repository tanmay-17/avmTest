import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displays',
  templateUrl: './displays.component.html',
  styleUrls: ['./displays.component.scss']
})
export class DisplaysComponent implements OnInit {
  @Input() info: any;

  constructor() { }

  ngOnInit(): void {
  }

}
