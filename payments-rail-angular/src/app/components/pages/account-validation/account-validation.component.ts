import { Component, OnInit } from '@angular/core';
import {PageTitleService} from '../../../services/page-title.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountValidationService} from '../../../services/account-validation.service';
import {TranslateService} from '@ngx-translate/core';
import * as moment from 'moment';
import {ErrorMessage} from '../../../models/error-message.model';

@Component({
  selector: 'app-account-validation',
  templateUrl: './account-validation.component.html',
  styleUrls: ['./account-validation.component.scss']
})
export class AccountValidationComponent implements OnInit {
  title = 'account-validation.title';

  loading = false;
  message = '';
  error = new ErrorMessage('', '', '');
  response: any;

  form = this.fb.group({
    fiId: ['', [Validators.required, Validators.maxLength(35)]],
    accountNumber: ['', [Validators.required, Validators.maxLength(34)]]
  });

  constructor(protected pageTitleService: PageTitleService,
              private fb: FormBuilder,
              private service: AccountValidationService,
              private translateService: TranslateService) {
    this.pageTitleService.title = this.title;
  }

  ngOnInit(): void {
  }

  validateAccount(): void {
    this.loading = true;

    const payload = this.service.constructRequest(this.form.value.fiId, this.form.value.accountNumber);

    this.service.validateAccountPayload(payload).subscribe(result => {
      console.log(result);
      this.loading = false;

      if (result.Rpt.Vrfctn) {
        this.handleSuccess(result);
        this.error.resetMessage();
      } else {
        this.message = '';
      }
      this.response = result;
    }, error => {
      console.error(error.error);

      this.translateService.get(['error.title', 'error.http']).subscribe((res) => {
        this.error.replaceMessage(res['error.title'], res['error.http'], error.error);
      });
      this.message = '';
      this.loading = false;
      this.response = error.error;
    });
  }

  constructRequest(fiId, accountNumber) {
    return this.service.constructRequest(fiId, accountNumber);
  }

  handleSuccess(result) {
    this.translateService.get('account-validation.account-found.body',
      {name: result.Rpt.OrgnlPtyAndAcctId.Pty.Nm}).subscribe((res: string) => {
      this.message = res;
    });
    this.error.message = '';
  }

}
