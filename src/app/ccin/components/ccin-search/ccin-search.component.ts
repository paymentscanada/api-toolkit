import { Component, OnInit } from '@angular/core';
import {CcinLookupService} from '../../services/ccin-lookup/ccin-lookup.service';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-ccin-search',
  templateUrl: './ccin-search.component.html',
  styleUrls: ['./ccin-search.component.css']
})
export class CcinSearchComponent implements OnInit {

  submitted = false;
  loading = false;

  result$: Observable<any>;
  err: any;

  ccin: string;

  constructor(protected ccinLookupService: CcinLookupService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.err = null;
    this.submitted = true;
    this.loading = true;

    this.result$ = this.ccinLookupService.getCcin(this.ccin)
      .pipe(
        tap(() => this.loading = false),
        tap(response => console.log(response)),
        catchError(err => {
          this.loading = false;
          this.err = err;
          return of();
        })
      );
  }

}
