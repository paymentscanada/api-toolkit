import { Component, OnInit } from '@angular/core';
import {DprnSearch} from '../../services/fif-branch/DprnSearch';
import {FifBranchService} from '../../services/fif-branch/fif-branch.service';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-fif-dprn-search',
  templateUrl: './fif-dprn-search.component.html',
  styleUrls: ['./fif-dprn-search.component.css']
})
export class FifDprnSearchComponent implements OnInit {

  model = new DprnSearch(0);

  submitted = false;
  loading = false;

  result$: Observable<any>;
  err: any;

  constructor(protected branchService: FifBranchService) { }

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
