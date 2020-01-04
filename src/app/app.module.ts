import { AuthService } from 'src/app/shared/services/auth.service';
import { ServerRequestService } from './shared/services/server-request.service';
import { AuthModule } from './auth/auth.module';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { NoAccessComponent } from './shared/component/no-access/no-access.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/layout/component/home/home.component';
import { InputFormatDirective } from './directive/input-format.directive';
import { HeaderNavComponent } from 'src/app/layout/header-nav/header-nav.component';
import { PaymentComponent } from './payment/component/payment/payment.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputFormatDirective,NoAccessComponent,PageNotFoundComponent, HeaderNavComponent, PaymentComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [ServerRequestService,AuthService, 
     [{ provide: LocationStrategy , useClass: HashLocationStrategy }] 
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
