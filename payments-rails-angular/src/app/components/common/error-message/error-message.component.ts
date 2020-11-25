import {Component, Input, OnInit} from '@angular/core';
import {IErrorMessage} from '../../../models/error-message.model';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input()
  error: IErrorMessage;

  @Input()
  displayMessage = false;

  constructor() { }

  ngOnInit(): void {
  }

}
