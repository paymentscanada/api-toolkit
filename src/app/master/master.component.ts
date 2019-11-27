import { Component, OnInit } from '@angular/core';
import {DprnSearch} from '../branch/DprnSearch';
import {ExtractService} from '../extracts/extracts.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  date: any;

  submitted = false;

  result$: any;
  err$: any;


  constructor(private extractService: ExtractService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.err$ = null;
    this.submitted = true;
    const date = this.date ? `${this.date.year}-${this.date.month}-${this.date.day}` : null;
    this.extractService.getMaster(date).subscribe(response => {
      console.log(response);
      this.result$ = response;
    }, err => {
      console.log(err);
      this.err$ = err;
      this.result$ = null;
    });
  }
}
