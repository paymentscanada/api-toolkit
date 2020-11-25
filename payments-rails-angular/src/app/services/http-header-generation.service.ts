import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpHeaderGenerationService {

  constructor() { }

  generateApiHeader(token) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      })
    };

    return httpOptions;
  }
}
