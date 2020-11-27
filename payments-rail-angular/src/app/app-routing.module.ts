import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {AccountValidationComponent} from './components/pages/account-validation/account-validation.component';
import {RequestToPayComponent} from './components/pages/request-to-pay/request-to-pay.component';
import {PaymentInitiationComponent} from './components/pages/payment-initiation/payment-initiation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'account_validation', component: AccountValidationComponent },
  { path: 'request_to_pay', component: RequestToPayComponent },
  { path: 'payment_initiation', component: PaymentInitiationComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
