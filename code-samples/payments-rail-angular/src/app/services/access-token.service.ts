import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EMPTY, Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccessTokenService {
  constructor(private http: HttpClient) { }

  getOAuthToken(consumerKey, consumerSecret): Observable<any> {
    if (environment.local) {
      return of({
        access_token: 'INTERNAL_LOCAL_TESTING'
      });
    } else {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + btoa(`${consumerKey}:${consumerSecret}`)
        })
      };
      const body = `grant_type=client_credentials`;

      return this.http.post(`${environment.accessTokenUrl}`, body, httpOptions);
    }
  }
}
