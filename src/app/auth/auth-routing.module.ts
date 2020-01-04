import { InvoiceListComponent } from './component/invoice-list/invoice-list.component';
import { PaymentSuccessComponent } from './component/payment-success/payment-success.component';
import { BuycourseComponent } from './component/buycourse/buycourse.component';
import { PayComponent } from './component/pay/pay.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const appRoutes: Routes =
  [
          { path: "login", component: LoginComponent },
          { path: "register", component: RegisterComponent },
          { path: "", component: PayComponent },
          { path: "buycourse", component: BuycourseComponent },
          { path: "paymentsuccess", component: PaymentSuccessComponent },
          { path: "invoicelist", component: InvoiceListComponent }
          
  ];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: []
})
export class AuthRoutingModule { }
