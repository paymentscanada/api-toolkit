import { Component, OnInit } from '@angular/core';
import {ExtractService} from '../../services/extracts/extracts.service';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-updated',
  templateUrl: './updated.component.html',
  styleUrls: ['./updated.component.css']
})
export class UpdatedComponent implements OnInit {


  startDate = new NgbDate(2019, 5, 1);
  endDate = new NgbDate(2019, 12, 31);

  submitted = false;

  result$: Observable<any>;
  err: any;


  constructor(private extractService: ExtractService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.err = null;
    this.submitted = true;
    const startDate = this.startDate ? `${this.startDate.year}-${this.startDate.month}-${this.startDate.day}` : null;
    const endDate = this.endDate ? `${this.endDate.year}-${this.endDate.month}-${this.endDate.day}` : null;

    this.result$ = this.extractService.getUpdated(startDate, endDate)
      .pipe(catchError(err => {
        this.err = err;
        return of();
      }));
  }

}
