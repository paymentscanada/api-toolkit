import { Component, OnInit } from '@angular/core';
import {PageTitleService} from '../../../services/page-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'home.title';

  constructor(protected pageTitleService: PageTitleService) {
    this.pageTitleService.title = this.title;
  }

  ngOnInit(): void {
  }

}
