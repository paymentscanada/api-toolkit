import { Component, OnInit } from '@angular/core';
import {DprnSearch} from '../../services/branch/DprnSearch';
import {ExtractService} from '../../services/extracts/extracts.service';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  date: any;

  submitted = false;
  loading = false;

  result$: Observable<any[]>;
  err: any;


  constructor(private extractService: ExtractService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.err = null;
    this.submitted = true;
    this.loading = true;
    const date = this.date ? `${this.date.year}-${this.date.month}-${this.date.day}` : null;

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
