import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PageTitleService} from '../../../services/page-title.service';
import {AccountValidationService} from '../../../services/account-validation.service';
import {TranslateService} from '@ngx-translate/core';
import {AccountValidator} from '../../../validators/account.validator';
import {filter, switchMap} from 'rxjs/operators';
import {RequestToPayService} from '../../../services/request-to-pay.service';
import {ErrorMessage} from '../../../models/error-message.model';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-request-to-pay',
  templateUrl: './request-to-pay.component.html',
  styleUrls: ['./request-to-pay.component.scss']
})
export class RequestToPayComponent implements OnInit {

  env = environment;

  constructor(protected pageTitleService: PageTitleService,
              private fb: FormBuilder,
              private service: RequestToPayService,
              private translateService: TranslateService,
              private accountValidationService: AccountValidationService,
              private validator: AccountValidator) {
    this.pageTitleService.title = this.title;
  }

  title = 'request-to-pay.title';

  loading = false;
  displayMessage = false;
  message = '';
  error = new ErrorMessage('', '', '');

  response: any;

  accountGroup: FormGroup;
  form: FormGroup;

  static getStatus(result) {
    return result.CdtrPmtActvtnReqStsRpt.OrgnlPmtInfAndSts.TxInfAndSts.TxSts;
  }

  ngOnInit() {
    this.accountGroup = this.fb.group({
      fiId: ['', [Validators.required, Validators.maxLength(35)]],
      accountNumber: ['', [Validators.required, Validators.maxLength(34)]]
    }, {
      asyncValidator: [
        this.validator.accountIsValid()
      ],
    });

    this.form = this.fb.group({
      accountGroup: this.accountGroup,
      name: ['', [Validators.required]],
      amount: ['', [Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$')]],
      remittance: ['', [Validators.maxLength(35)]]
    });


    this.form.statusChanges.subscribe(() => this.displayMessage = false);
    // once the status is the form is valid, make a request to get the account details
    this.accountGroup.statusChanges.pipe(
      filter(status => status === 'VALID'),
      switchMap(() => this.accountValidationService.validateAccount(this.accountGroup.value.fiId, this.accountGroup.value.accountNumber)),
    ).subscribe(result => {
      this.form.patchValue({
        name: result.Rpt.OrgnlPtyAndAcctId.Pty.Nm
      });
    });
  }

  submitRtp(): void {
    this.loading = true;

    const payload = this.constructRtpBody(this.form.value);

    this.service.sendRequestToPay(payload).subscribe(result => {
      console.log(result);
      this.loading = false;

      if (RequestToPayComponent.getStatus(result) === 'SUCC') {
        this.handleSuccess(result);
      } else if (RequestToPayComponent.getStatus(result) === 'RJCT') {
        this.handleRejected(result);
      }
      this.response = result;
      this.displayMessage = true;
    }, error => {
      console.error(error.error);

      this.translateService.get(['error.title', 'error.http']).subscribe((res) => {
        this.error.replaceMessage(res['error.title'], res['error.http'], error.error);
      });
      this.message = '';
      this.loading = false;
      this.displayMessage = true;
      this.response = error.error;
    });
  }

  constructRtpBody(data) {
    return this.service.constructRtpBody(data);
  }

  handleSuccess(result) {
    if (result.BkToCstmrDbtCdtNtfctn.Ntfctn[0] && result.BkToCstmrDbtCdtNtfctn.Ntfctn[0].Ntry[0]) {
      this.translateService.get('request-to-pay.success.body',
        {
          amount: result.BkToCstmrDbtCdtNtfctn.Ntfctn[0].Ntry[0].Amt.Value,
          account: result.BkToCstmrDbtCdtNtfctn.Ntfctn[0].Acct.Id.Other.Id
        }).subscribe((res: string) => {
        this.message = res;
      });
    }
    this.error.resetMessage();
  }

  handleRejected(result) {
    this.translateService.get(['request-to-pay.error.title', 'request-to-pay.error.body']).subscribe((res) => {
      this.error.replaceMessage(res['request-to-pay.error.title'], res['request-to-pay.error.body'], '');
    });
    this.message = '';
  }
}
