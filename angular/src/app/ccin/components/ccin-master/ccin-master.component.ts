import { Component, OnInit } from '@angular/core';
import {CcinExtractsService} from '../../services/ccin-extracts/ccin-extracts.service';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {DateUtils} from '../../../common/date.utils';

@Component({
  selector: 'app-ccin-master',
  templateUrl: './ccin-master.component.html',
  styleUrls: ['./ccin-master.component.css']
})
export class CcinMasterComponent implements OnInit {

  date: any;

  submitted = false;
  loading = false;

  result$: Observable<any[]>;
  err: any;

  constructor(private extractService: CcinExtractsService) { }

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
