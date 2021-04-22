import {HttpClient, HttpHeaders} from '@angular/common/http';

import {mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AccessTokenService} from '../../../access-token/access-token.service';
import {environment} from '../../../../environments/environment';
import {FifConstants} from '../fif.constants';

@Injectable()
export class FifBranchService {
  constructor(private http: HttpClient, private accessTokenService: AccessTokenService) { }


  getDprn(dprn: number): Observable<any> {
    return this.accessTokenService.getOAuthToken(environment.branchesConsumerKey, environment.branchesConsumerSecret).pipe(
      mergeMap((response) => {
        console.log(response.access_token);

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  FifConstants.contentType,
            Accept: FifConstants.contentType,
            Authorization: `Bearer ${response.access_token}`
          })
        };

        return this.http.get(`${environment.apiBaseUrl}/fif-branch/branches/${dprn}`, httpOptions);
      })
    );
  }

}
