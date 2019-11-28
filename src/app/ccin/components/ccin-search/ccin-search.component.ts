import { Component, OnInit } from '@angular/core';
import {CcinLookupService} from '../../services/ccin-lookup/ccin-lookup.service';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-ccin-search',
  templateUrl: './ccin-search.component.html',
  styleUrls: ['./ccin-search.component.css']
})
export class CcinSearchComponent implements OnInit {

  submitted = false;

  result$: Observable<any>;
  err: any;

  ccin: string;

  constructor(protected ccinLookupService: CcinLookupService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.err = null;
    this.submitted = true;

    this.result$ = this.ccinLookupService.getCcin(this.ccin)
      .pipe(catchError(err => {
        this.err = err;
        return of();
      }));
  }

}
