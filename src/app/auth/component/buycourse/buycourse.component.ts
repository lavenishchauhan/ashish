import { HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegexService } from 'src/app/shared/services/regex.service';
import { ServerRequestService } from 'src/app/shared/services/server-request.service';

@Component({
  selector: 'app-buycourse',
  templateUrl: './buycourse.component.html',
  styles: []
})
export class BuycourseComponent implements OnInit {


  planId;
  amount;
  carddetail;
  customer_Id;
  formActive = true;
  isActive = false;

  regex;  /*Var Regex*/
  isLogin
  cutomerForm = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    cName: '',
    cNumber: '',
    expiryMonth: '',
    expiryYear: '',
    accountHolderName: '',
    accountNumber: '',
    countryCode: 'AU',
    termAndConditionAgreed: 'true'
  };

  constructor(
    private regexService: RegexService,
    private activatedRoute: ActivatedRoute,
    private serverRequest: ServerRequestService,
    private router: Router) {
    this.regex = {
      alpha: regexService.alphaRegex, email: regexService.emailRegex, pwd: regexService.pwdRegex,
      number: regexService.numberRegex, zip: regexService.zipRegex
    };
  }

  ngOnInit() {


   



    //this.Subscriptions();


    this.activatedRoute.queryParamMap
      .subscribe(params => {
        // console.log('params',params);
        this.planId = params.get('plan');
        this.amount = params.get('amount');
        console.log('amount', this.amount);
      });
  }


  createCutomer(newCourse: NgForm) {
    console.log('newCourse', newCourse.form.value);
    console.log('this.cutomerForm', this.cutomerForm);
    let newCustomer = {
      firstName: this.cutomerForm.firstName,
      lastName: this.cutomerForm.lastName,
      email: this.cutomerForm.email,
      address1: this.cutomerForm.address
    }

    console.log('newCustomer', newCustomer);

    this.formActive = false;
    this.isActive = true;



    this.serverRequest.createCustomerService('https://api-sandbox.ezypay.com/v2/billing/customers', newCustomer)
      .subscribe(res => {
        this.customer_Id = res;
        this.customer_Id = this.customer_Id.id;
        console.log('res', res);
        if (res) {
          this.carddetail = {
            accountHolderName: this.cutomerForm.accountHolderName,
            accountNumber: this.cutomerForm.accountNumber,
            expiryYear: this.cutomerForm.expiryYear,
            expiryMonth: this.cutomerForm.expiryMonth,
            countryCode: this.cutomerForm.countryCode,
            termAndConditionAgreed: this.cutomerForm.termAndConditionAgreed
          }
          this.vaultPayment(this.carddetail, this.customer_Id);
        }

        else {
          this.formActive = true;
          this.isActive = false;
        }




      })
  }

  //=======================================================

  vaultPayment(cardDetail, customerId) {
    console.log('cardDetail', cardDetail);
    const body = new HttpParams()
    this.serverRequest.vaultCard('https://vault-sandbox.ezypay.com/v2/vault/paymentmethodtokens/card', cardDetail)
      .subscribe(res => {

        if (!res) {
          this.formActive = true;
          this.isActive = false;
        }





        console.log('customerId', customerId);
        this.Subscriptions(customerId)
        // this.vaultPay = res;
        // this.vaultPay = this.vaultPay.paymentMethodToken;

      });


  }









  // Subscriptions() {
  // paymentMethodToken: "a3381868-810f-4feb-98e1-43fdd232f1f1"
  // customerId: "db1d6b3f-8613-48fd-bf1c-2008a37cb125"
  // planId = 672448b9-9607-4e7d-8a9b-1b6573075e72

  // "customerId":"55220ffc-bc5a-4f50-adaf-fa58c061ebd1",
  // "planId":"8ff2e3ea-aaa9-4978-8e2a-319d67e8f302",
  // "paymentMethodToken":"8dbf38bf-81c6-40d6-be1f-6aa80736d5bb",
  // amount.currency
  // amount.value
  // "startDate":"2019-03-11"




  //}






  Subscriptions(customerId) {

    var ausdate = new Date().toLocaleDateString("AUS", { timeZone: "Australia/sydney" });
    var resDate = ausdate.split("/");
    let today = resDate[2] + '-' + resDate[0] + '-' + resDate[1];
    console.log('todayy', today);
   

    let carddetail = {
      "customerId": customerId,
      "planId": this.planId,
      "amount": {
        "currency": "AUD",
        "value": parseInt(this.amount)
      },
      "accountingCode": null,
      "billingEndValue": null,
      "startDate": today
    }

    this.serverRequest.SubscriptionsPlan('https://api-sandbox.ezypay.com/v2/billing/subscriptions', carddetail)
      .subscribe(res => {
        console.log(res);

        if (res) {
          this.router.navigate(['/paymentsuccess'], { queryParams: { customerId: customerId } });
        }

        else {
          this.formActive = true;
          this.isActive = false;
        }
      });

  }
}
