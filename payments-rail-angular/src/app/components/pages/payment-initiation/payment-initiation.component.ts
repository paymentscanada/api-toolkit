import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PageTitleService} from '../../../services/page-title.service';
import {TranslateService} from '@ngx-translate/core';
import {AccountValidationService} from '../../../services/account-validation.service';
import {AccountValidator} from '../../../validators/account.validator';
import {filter, switchMap} from 'rxjs/operators';
import {PaymentInitiationService} from '../../../services/payment-initiation.service';
import {ErrorMessage} from '../../../models/error-message.model';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-payment-initiation',
  templateUrl: './payment-initiation.component.html',
  styleUrls: ['./payment-initiation.component.scss']
})
export class PaymentInitiationComponent implements OnInit {
  env = environment;

  title = 'payment-initiation.title';

  loading = false;
  displayMessage = false;
  message = '';
  error = new ErrorMessage('', '', '');

  response: any;

  accountGroup: FormGroup;
  form: FormGroup;

  static getStatus(result) {
    return result.CstmrPmtStsRpt.OrgnlPmtInfAndSts.TxInfAndSts.TxSts;
  }

  constructor(protected pageTitleService: PageTitleService,
              private fb: FormBuilder,
              private service: PaymentInitiationService,
              private translateService: TranslateService,
              private accountValidationService: AccountValidationService,
              private validator: AccountValidator) {
    this.pageTitleService.title = this.title;
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
    this.accountGroup.statusChanges.pipe(
      filter(status => status === 'VALID'),
      switchMap(() => this.accountValidationService.validateAccount(this.accountGroup.value.fiId, this.accountGroup.value.accountNumber)),
    ).subscribe(result => {
      this.form.patchValue({
        name: result.Rpt.OrgnlPtyAndAcctId.Pty.Nm
      });
    });
  }

  submitPayment(): void {
    this.loading = true;

    const payload = this.constructPaymentBody(this.form.value);

    this.service.sendPayment(payload).subscribe(result => {
      console.log(result);
      this.loading = false;

      if (PaymentInitiationComponent.getStatus(result) === 'SUCC') {
        this.handleSuccess(result);
      } else if (PaymentInitiationComponent.getStatus(result) === 'RJCT'){
        this.handleRejection(result);
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

  constructPaymentBody(data) {
    return this.service.constructPaymentBody(data);
  }

  handleSuccess(result) {
    if (result.BkToCstmrDbtCdtNtfctn.Ntfctn[0] && result.BkToCstmrDbtCdtNtfctn.Ntfctn[0].Ntry[0]) {
      this.translateService.get('payment-initiation.success.body',
        {
          amount: result.BkToCstmrDbtCdtNtfctn.Ntfctn[0].Ntry[0].Amt.Value,
          name: this.form.value.name}).subscribe((res: string) => {
        this.message = res;
      });
    }
    this.error.resetMessage();
  }

  handleRejection(result) {
    this.translateService.get(['payment-initiation.error.title', 'payment-initiation.error.body']).subscribe((res) => {
      this.error.replaceMessage(res['payment-initiation.error.title'], res['payment-initiation.error.body'], '');
    });
    this.message = '';
  }

}
