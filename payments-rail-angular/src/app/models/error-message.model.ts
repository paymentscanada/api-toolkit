export interface IErrorMessage {
  title: string;
  message: string;
  httpResult: string;
}

export class ErrorMessage implements IErrorMessage {
  constructor(public title: string,
              public message: string,
              public httpResult: string) {}

  replaceMessage(title: string, message: string, httpResult: string) {
    this.title = title;
    this.message = message;
    this.httpResult = httpResult;
  }

  resetMessage() {
    this.title = '';
    this.message = '';
    this.httpResult = '';
  }
}
