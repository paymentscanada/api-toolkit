import { Component, OnInit } from '@angular/core';
import {PageTitleService} from '../../../services/page-title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Home';

  constructor(protected pageTitleService: PageTitleService) {
    this.pageTitleService.titleSubject.subscribe(newTitle => {
      this.title = newTitle;
    });
  }

  ngOnInit(): void {
  }

}
