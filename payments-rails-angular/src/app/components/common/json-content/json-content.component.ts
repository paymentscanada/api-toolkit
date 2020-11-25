import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-json-content',
  templateUrl: './json-content.component.html',
  styleUrls: ['./json-content.component.scss']
})
export class JsonContentComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
