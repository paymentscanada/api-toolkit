import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AccessTokenService} from '../access-token/access-token.service';

@Injectable()
export class UpdatedExtractService {
  constructor(private http: HttpClient, private accessTokenService: AccessTokenService) {
  }

}
