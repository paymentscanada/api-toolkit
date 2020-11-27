import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AccountValidationService} from '../services/account-validation.service';
import {map, switchMap} from 'rxjs/operators';
import {Observable, of, timer} from 'rxjs';

@Injectable()
export class AccountValidator {
  constructor(protected service: AccountValidationService) { }

  accountIsValid() {
    return (form: FormGroup) => {
      const fiId = form.get('fiId').value;
      const accountNumber = form.get('accountNumber').value;

      if (fiId != null && accountNumber != null) {
        return timer(500).pipe(
          switchMap(() => this.service.validateAccount(fiId, accountNumber)),
          map(res => {
            return res.Rpt.Vrfctn ? {} : {invalidAccount: true};
          })
        );
      } else {
        return of({invalidAccount: true});
      }
    };
  }

}
