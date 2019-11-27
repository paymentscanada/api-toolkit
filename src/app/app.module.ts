import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BranchService} from './branch/branch.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DprnSearchComponent } from './dprn-search/dprn-search.component';
import {AccessTokenService} from './access-token/access-token.service';
import { MasterComponent } from './master/master.component';
import {ExtractService} from './extracts/extracts.service';
import { UpdatedComponent } from './updated/updated.component';

@NgModule({
  declarations: [
    AppComponent,
    DprnSearchComponent,
    MasterComponent,
    UpdatedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    BranchService,
    AccessTokenService,
    ExtractService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
