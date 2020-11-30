import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import * as moment from 'moment';
import {AccessTokenService} from './access-token.service';
import {HttpHeaderGenerationService} from './http-header-generation.service';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentInitiationService {

  constructor(private http: HttpClient,
              private accessTokenService: AccessTokenService,
              private header: HttpHeaderGenerationService) { }

  sendPayment(payload: any): Observable<any> {
    /*
     * Be sure to get the token, pass token off in the header to next http call.
     * Ideally you'd want this as an interceptor or something similar, for this
     * samples, we are explicitly showing showing the token generation
     */
    return this.accessTokenService.getOAuthToken(environment.consumerKey, environment.consumerSecret).pipe(
      map(oauthToken => oauthToken.access_token),
      switchMap(accessToken =>
        this.http.post(environment.baseApiUrl + '/payment_initiation', payload, this.header.generateApiHeader(accessToken)))
    );
  }

  constructPaymentBody(data) {
    const d = moment().format();

    const body: any = {
      CstmrCdtTrfInitn: {
        GrpHdr: {
          MsgId: 'MSGID12346',
          CreDtTm: d,
          NbOfTxs: '1',
          InitgPty: {
            Nm: 'Mr. Initiating Party'
          }
        },
        PmtInf: {
          PmtInfId: 'PaymentInformationID12345',
          PmtMtd: 'TRF',
          ReqdExctnDt: {
            DtTm: d
          },
          Dbtr: {
            Nm: 'Ms. Debtor'
          },
          DbtrAcct: {
            Id: {
              Othr: {
                Id: '123454321'
              }
            }
          },
          DbtrAgt: {
            FinInstnId: {
              ClrSysMmbId: {
                MmbId: '123456789'
              }
            }
          },
          CdtTrfTxInf: {
            PmtId: {
              EndToEndId: 'E2EID54321'
            },
            Amt: {
              InstdAmt: {
                Ccy: 'CAD',
                Value: data.amount
              }
            },
            CdtrAgt: {
              FinInstnId: {
                ClrSysMmbId: {
                  MmbId: data.accountGroup.fiId
                }
              }
            },
            Cdtr: {
              Nm: data.name
            },
            CdtrAcct: {
              Id: {
                Othr: {
                  Id: data.accountGroup.accountNumber
                }
              }
            }
          }
        }
      }
    };

    if (data.remittance !== '') {
      body.CstmrCdtTrfInitn.PmtInf.CdtTrfTxInf.RmtInf = {
        Strd: {
          RfrdDocInf: {
            Nb: data.remittance
          }
        }
      };
    }

    return body;
  }
}
