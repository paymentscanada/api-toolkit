import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountValidationComponent } from './components/pages/account-validation/account-validation.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SidebarNavComponent } from './components/common/sidebar-nav/sidebar-nav.component';
import { HeaderComponent } from './components/common/header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MessageComponent } from './components/common/message/message.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { RequestToPayComponent } from './components/pages/request-to-pay/request-to-pay.component';
import { PaymentInitiationComponent } from './components/pages/payment-initiation/payment-initiation.component';
import {AccountValidator} from './validators/account.validator';
import {MatTabsModule} from '@angular/material/tabs';
import { JsonContentComponent } from './components/common/json-content/json-content.component';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import {MomentModule} from 'ngx-moment';
import { ErrorMessageComponent } from './components/common/error-message/error-message.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatDividerModule,
  MatGridListModule,
  MatTabsModule
];

@NgModule({
  declarations: [
    AppComponent,
    AccountValidationComponent,
    HomeComponent,
    NavbarComponent,
    SidebarNavComponent,
    HeaderComponent,
    MessageComponent,
    RequestToPayComponent,
    PaymentInitiationComponent,
    JsonContentComponent,
    ErrorMessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighlightModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MomentModule,
    ...materialModules
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: { json: () => import('highlight.js/lib/languages/json') }
      }
    },
    AccountValidator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
