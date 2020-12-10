import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Subject} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  private internalTitle = '';
  private originalTitle = 'Payments Rail Stub';
  titleSubject = new Subject<string>();

  get title(): string { return this.internalTitle; }

  set title(title: string) {
    this.translate.get(title).subscribe((res: string) => {
      this.internalTitle = res;
      if (res !== '') {
        res = `${res} | Payments Rail Stub`;
      } else {
        res = this.originalTitle;
      }
      this.bodyTitle.setTitle(res);
      this.titleSubject.next(this.internalTitle);
    });


  }

  constructor(private bodyTitle: Title, private translate: TranslateService) {}
}
