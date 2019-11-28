import { Component, OnInit } from '@angular/core';
import {DprnSearch} from '../../services/branch/DprnSearch';
import {ExtractService} from '../../services/extracts/extracts.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  date: any;

  submitted = false;

  result$: Observable<any>;
  err: any;


  constructor(private extractService: ExtractService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.err = null;
    this.submitted = true;
    const date = this.date ? `${this.date.year}-${this.date.month}-${this.date.day}` : null;

    this.result$ = this.extractService.getMaster(date)
      .pipe(catchError(err => {
        this.err = err;
        return of();
      }));
  }
}
