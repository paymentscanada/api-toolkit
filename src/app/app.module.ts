import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BranchService} from './fif/services/branch/branch.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DprnSearchComponent } from './fif/components/dprn-search/dprn-search.component';
import {AccessTokenService} from './access-token/access-token.service';
import { MasterComponent } from './fif/components/master/master.component';
import {ExtractService} from './fif/services/extracts/extracts.service';
import { UpdatedComponent } from './fif/components/updated/updated.component';
import { CcinSearchComponent } from './ccin/components/ccin-search/ccin-search.component';
import {CcinLookupService} from './ccin/services/ccin-lookup/ccin-lookup.service';

@NgModule({
  declarations: [
    AppComponent,
    DprnSearchComponent,
    MasterComponent,
    UpdatedComponent,
    CcinSearchComponent,
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
    ExtractService,
    CcinLookupService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
