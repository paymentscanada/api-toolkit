import { Component, OnInit } from '@angular/core';
import {DprnSearch} from '../../services/branch/DprnSearch';
import {BranchService} from '../../services/branch/branch.service';

@Component({
  selector: 'app-dprn-search',
  templateUrl: './dprn-search.component.html',
  styleUrls: ['./dprn-search.component.css']
})
export class DprnSearchComponent implements OnInit {

  model = new DprnSearch(0);

  submitted = false;

  result$: any;
  err$: any;

  constructor(protected branchService: BranchService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.err$ = null;
    this.submitted = true;

    this.branchService.getDprn(this.model.dprn).subscribe(response => {
      console.log(response);
      this.result$ = response;
    }, err => {
      console.log(err);
      this.err$ = err;
      this.result$ = null;
    });
  }

  newDprn() {
    this.model = new DprnSearch(0);
  }

}
