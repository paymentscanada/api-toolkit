import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AccessTokenService} from '../../../access-token/access-token.service';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {mergeMap} from 'rxjs/operators';
import {FifConstants} from '../fif.constants';

@Injectable()
export class FifExtractService {
  constructor(private http: HttpClient, private accessTokenService: AccessTokenService) {
  }

  getUpdated(startDate: string, endDate: string): Observable<any> {
    return this.accessTokenService.getOAuthToken(environment.extractsConsumerKey, environment.extractsConsumerSecret).pipe(
      mergeMap((response) => {
        console.log(response.access_token);

        const params = new HttpParams()
            .set('startDate', startDate)
            .set('endDate', endDate);

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': FifConstants.contentType,
            Accept: FifConstants.contentType,
            Authorization: `Bearer ${response.access_token}`
          }),
          params
        };

        return this.http.get(`${environment.apiBaseUrl}/fif-extracts/extracts/updated`, httpOptions);
      })
    );
  }


  getMaster(asAtDate: string): Observable<any> {
    return this.accessTokenService.getOAuthToken(environment.extractsConsumerKey, environment.extractsConsumerSecret).pipe(
      mergeMap((response) => {
        console.log(response.access_token);

        let params;

        if (asAtDate) {
          params = new HttpParams()
            .set('asAtDate', asAtDate)
            .set('limit', '10');
        } else {
          params = new HttpParams().set('limit', '10');
        }

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  FifConstants.contentType,
            Accept: FifConstants.contentType,
            Authorization: `Bearer ${response.access_token}`
          }),
          params
        };

        console.log(httpOptions);

        return this.http.get(`${environment.apiBaseUrl}/fif-extracts/extracts/master`, httpOptions);
      })
    );
  }
}
