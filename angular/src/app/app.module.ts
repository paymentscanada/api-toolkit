import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FifBranchService} from './fif/services/fif-branch/fif-branch.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FifDprnSearchComponent } from './fif/components/fif-dprn-search/fif-dprn-search.component';
import {AccessTokenService} from './access-token/access-token.service';
import { FifMasterComponent } from './fif/components/fif-master/fif-master.component';
import {FifExtractService} from './fif/services/fif-extract/fif-extract.service';
import { FifUpdatedComponent } from './fif/components/fif-updated/fif-updated.component';
import { CcinSearchComponent } from './ccin/components/ccin-search/ccin-search.component';
import {CcinLookupService} from './ccin/services/ccin-lookup/ccin-lookup.service';
import { CcinMasterComponent } from './ccin/components/ccin-master/ccin-master.component';
import { CcinUpdatedComponent } from './ccin/components/ccin-updated/ccin-updated.component';
import {CcinExtractsService} from './ccin/services/ccin-extracts/ccin-extracts.service';
import { ErrorComponent } from './common/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    FifDprnSearchComponent,
    FifMasterComponent,
    FifUpdatedComponent,
    CcinSearchComponent,
    CcinMasterComponent,
    CcinUpdatedComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    FifBranchService,
    AccessTokenService,
    FifExtractService,
    CcinLookupService,
    CcinExtractsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
