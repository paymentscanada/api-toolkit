import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Input() success: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
