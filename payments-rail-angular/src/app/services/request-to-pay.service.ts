import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import * as moment from 'moment';
import {map, switchMap} from 'rxjs/operators';
import {AccessTokenService} from './access-token.service';
import {HttpHeaderGenerationService} from './http-header-generation.service';

@Injectable({
  providedIn: 'root'
})
export class RequestToPayService {

  constructor(private http: HttpClient,
              private accessTokenService: AccessTokenService,
              private header: HttpHeaderGenerationService) { }

  sendRequestToPay(payload: any): Observable<any> {
    /*
     * Be sure to get the token, pass token off in the header to next http call.
     * Ideally you'd want this as an interceptor or something similar, for this
     * samples, we are explicitly showing showing the token generation
     */
    return this.accessTokenService.getOAuthToken(environment.consumerKey, environment.consumerSecret).pipe(
      map(oauthToken => oauthToken.access_token),
      switchMap(accessToken =>
        this.http.post(environment.baseApiUrl + '/request_to_pay', payload, this.header.generateApiHeader(accessToken)))
    );
  }

  constructRtpBody(data) {
    const d = moment().format();

    return {
      CdtrPmtActvtnReq: {
        GrpHdr: {
          MsgId: 'MSGID12345',
          CreDtTm: d,
          NbOfTxs: '1',
          InitgPty: {
            Nm: 'Mr. Initiating Party'
          }
        },
        PmtInf: {
          PmtMtd: 'TRF',
          ReqdExctnDt: {
            DtTm: d
          },
          Dbtr: {
            Nm: data.name,
            Id: {
              PrvtId: {
                Othr: [
                  {
                    Id: data.accountGroup.accountNumber
                  }
                ]
              }
            }
          },
          DbtrAgt: {
            FinInstnId: {
              ClrSysMmbId: {
                MmbId: data.accountGroup.fiId
              }
            }
          },
          CdtTrfTx: {
            PmtId: {
              EndToEndId: 'E2EID12345'
            },
            Amt: {
              InstdAmt: {
                Ccy: 'CAD',
                Value: data.amount
              }
            },
            ChrgBr: 'SLEV',
            CdtrAgt: {
              FinInstnId: {
                ClrSysMmbId: {
                  MmbId: '987654321'
                }
              }
            },
            Cdtr: {
              Nm: 'Ms. Creditor'
            },
            CdtrAcct: {
              Id: {
                Othr: {
                  Id: '44556677'
                }
              }
            },
            RmtInf: {
              Strd: [
                {
                  RfrdDocInf: [
                    {
                      Nb: data.remittance
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    };
  }
}
