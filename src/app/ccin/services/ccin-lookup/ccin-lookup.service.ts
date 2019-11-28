import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AccessTokenService} from '../../../access-token/access-token.service';
import {environment} from '../../../../environments/environment';
import {mergeMap} from 'rxjs/operators';
import {CcinConstants} from '../ccin.constants';

@Injectable()
export class CcinLookupService {
  constructor(private http: HttpClient, private accessTokenService: AccessTokenService) { }

  getCcin(ccin: string) {
    return this.accessTokenService.getOAuthToken(environment.ccinLookupConsumerKey, environment.ccinLookupConsumerSecret).pipe(
      mergeMap((response) => {
        console.log(response.access_token);

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  CcinConstants.contentType,
            Authorization: `Bearer ${response.access_token}`
          })
        };

        return this.http.get(`${environment.apiBaseUrl}/ccin-lookup-live-dev/ccins/${ccin}`, httpOptions);
      })
    );
  }
}
