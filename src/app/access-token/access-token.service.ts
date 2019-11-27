import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class AccessTokenService {
  constructor(private http: HttpClient) { }

  getOAuthToken(consumerKey, consumerSecret): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(`${consumerKey}:${consumerSecret}`)
      })
    };
    const body = `grant_type=client_credentials`;

    return this.http.post(`${environment.apiBaseUrl}/accesstoken`, body, httpOptions);
  }
}
