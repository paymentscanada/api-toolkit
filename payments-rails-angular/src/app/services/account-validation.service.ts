import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {environment} from '../../environments/environment';
import * as moment from 'moment';
import {AccessTokenService} from './access-token.service';
import {map, switchMap} from 'rxjs/operators';
import {HttpHeaderGenerationService} from './http-header-generation.service';

@Injectable({
  providedIn: 'root'
})
export class AccountValidationService {
  private accountValidationURL = environment.baseApiUrl + '/account_validation';

  constructor(private http: HttpClient,
              private accessTokenService: AccessTokenService,
              private header: HttpHeaderGenerationService) { }


  validateAccountPayload(payload: any): Observable<any> {
    /*
     * Be sure to get the token, pass token off in the header to next http call.
     * Ideally you'd want this as an interceptor or something similar, for this
     * samples, we are explicitly showing showing the token generation
     */
    return this.accessTokenService.getOAuthToken(environment.consumerKey, environment.consumerSecret).pipe(
      map(oauthToken => oauthToken.access_token),
      switchMap(accessToken =>
        this.http.post(this.accountValidationURL, payload, this.header.generateApiHeader(accessToken)))
    );
  }

  validateAccount(fiId: string, accountNumber: string): Observable<any> {
    /*
     * Be sure to get the token, pass token off in the header to next http call.
     * Ideally you'd want this as an interceptor or something similar, for this
     * samples, we are explicitly showing showing the token generation
     */
    return this.accessTokenService.getOAuthToken(environment.consumerKey, environment.consumerSecret).pipe(
      map(oauthToken => oauthToken.access_token),
      switchMap(accessToken =>
        this.http.post(this.accountValidationURL, this.constructRequest(fiId, accountNumber), this.header.generateApiHeader(accessToken)))
    );
  }

  constructRequest(fiId: string, accountNumber: string): any {
    const d = moment().format();

    return {
      IdVrfctnReq: {
        Assgnmt: {
          MsgId: '1234567890D',
          CreDtTm: d,
          Assgnr: {
            Pty: {
              Id: {
                OrgId: {
                  Othr: {
                    Id: fiId
                  }
                }
              }
            }
          },
          Assgne: {
            Pty: {
              Id: {
                OrgId: {
                  Othr: {
                    Id: '111222333'
                  }
                }
              }
            }
          }
        },
        Vrfctn: [
          {
            Id: '635241',
            PtyAndAcctId: {
              Acct: {
                Othr: { Id: accountNumber	}
              },
              Agt: {
                FinInstnId: {
                  ClrSysMmbId: {
                    MmbId: fiId
                  }
                }
              }
            }
          }
        ]
      }
    };
  }

}
