import { Component, OnInit } from '@angular/core';
import {DprnSearch} from '../../services/branch/DprnSearch';
import {BranchService} from '../../services/branch/branch.service';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-dprn-search',
  templateUrl: './dprn-search.component.html',
  styleUrls: ['./dprn-search.component.css']
})
export class DprnSearchComponent implements OnInit {

  model = new DprnSearch(0);

  submitted = false;
  loading = false;

  result$: Observable<any>;
  err: any;

  constructor(protected branchService: BranchService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.err = null;
    this.submitted = true;
    this.loading = true;

    this.result$ = this.branchService.getDprn(this.model.dprn)
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

  newDprn() {
    this.model = new DprnSearch(0);
  }

}
