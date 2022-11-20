import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lighting',
  templateUrl: './lighting.component.html',
  styleUrls: ['./lighting.component.scss']
})
export class LightingComponent implements OnInit {
  @Input() info: any;

  constructor() { }

  ngOnInit(): void {
  }

}
