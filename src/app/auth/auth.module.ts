import { AuthRoutingModule } from './auth-routing.module';

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PayComponent } from './component/pay/pay.component';
import { BuycourseComponent } from './component/buycourse/buycourse.component';
import { PaymentSuccessComponent } from './component/payment-success/payment-success.component';
import { InvoiceListComponent } from './component/invoice-list/invoice-list.component';

@NgModule({
  declarations: [ LoginComponent, RegisterComponent, PayComponent, BuycourseComponent, PaymentSuccessComponent, InvoiceListComponent],
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  exports:[RegisterComponent,LoginComponent],
  providers: [],
})
export class AuthModule { }
