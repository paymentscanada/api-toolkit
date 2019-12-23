import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {DateUtils} from '../../../common/date.utils';
import {FifExtractService} from '../../services/fif-extract/fif-extract.service';

@Component({
  selector: 'app-fif-master',
  templateUrl: './fif-master.component.html',
  styleUrls: ['./fif-master.component.css']
})
export class FifMasterComponent implements OnInit {

  date: any;

  submitted = false;
  loading = false;

  result$: Observable<any[]>;
  err: any;


  constructor(private extractService: FifExtractService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.err = null;
    this.submitted = true;
    this.loading = true;
    const date = DateUtils.convertNgbDateToString(this.date);

    this.result$ = this.extractService.getMaster(date)
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
