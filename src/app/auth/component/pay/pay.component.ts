import { ServerRequestService } from './../../../shared/services/server-request.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styles: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  url = 'https://identity-sandbox.ezypay.com/token';


  mainToken;
  planData;
  planFullData;
  vaultPay;
  AllCustomerData;
  AllCustomerList;
  DataPlan;
  Nameplan;
  isActive = true;

  constructor(private serverRequest: ServerRequestService) { }

  ngOnInit() {
    //  this.plan();
    this.createToken();
  }



  createCustomer() {
    let newCustomerDetail = {
      firstName: "Malkit",
      lastName: "Singh",
      customerNumber: null,
      email: "ashish@gmail.com",
      gender: null,
      address1: "9415138923",
      homePhone: null,
      mobilePhone: null,
      companyName: null,
      dateOfBirth: null,
      referenceCode: null,
      metadata: {
        foo: "bar"
      }
    }
    this.serverRequest.createCustomerService('https://api-sandbox.ezypay.com/v2/billing/customers', newCustomerDetail)
      .subscribe(res => {
        console.log('createCustomer', res);
      });
  }



  vaultPayment() {
    let carddetail = {
      accountHolderName: "Malkit Singh",
      accountNumber: "4893772401803792",
      expiryYear: "22",
      expiryMonth: "01",
      type: "VISA",
      last4: "1111",
      first6: "411111",
      countryCode: "AU",
      termAndConditionAgreed: "true"
    }
    // paymentMethodToken: "5b355d35-609c-4fb4-8992-948bbabc8333"
    const body = new HttpParams()
    //.set('client_secret', '_Il-2iJfEvk01NlPn7Rg8MYXtVf3rd29BLSulp98');
    this.serverRequest.vaultCard('https://vault-sandbox.ezypay.com/v2/vault/paymentmethodtokens/card', carddetail)
      .subscribe(res => {
        this.vaultPay = res;
        this.vaultPay = this.vaultPay.paymentMethodToken;
        // this.Subscriptions(this.vaultPay)
      });
  }


  createToken() {
    if (localStorage.getItem('ezypayToken')) {
      localStorage.removeItem('ezypayToken');
    }
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('client_id', '0oamghaynu90oh7Zg0h7')
      .set('client_secret', '_Il-2iJfEvk01NlPn7Rg8MYXtVf3rd29BLSulp98')
      .set('username', 'prasad@mlkgroup.com.au')
      .set('password', 'AUmlk1234!!')
      .set('scope', 'integrator offline_access billing_profile create_payment_method');
    this.serverRequest.create(this.url, body)
      .subscribe(res => {
        console.log(res);
        this.mainToken = res;
        if (res && this.mainToken.access_token) {
          localStorage.setItem('ezypayToken', this.mainToken.access_token);
          this.pricingPlans();
          // this.AllCustomer()
          // this.Subscriptions();
          return true;
        }
      });
  }











  // Subscriptions(){

  //     let carddetail = {
  //       "customerId": "e7900f8a-6ea8-4c83-a4b0-28bed675e19f",
  //       "planId":"242cc0d9-88cb-4b81-8b89-12e16cecf084",
  //       "paymentMethodToken":"2d4861bf-3930-43ad-9798-9c65b4998a00",
  //       "amount": {
  //         "currency": "AUD",
  //         "value": 200,
  //         "type": "CARD"
  //     },
  //     "firstBillingAmount": {
  //       "currency": "AUD",
  //       "value": 200,
  //   },
  //     "accountingCode":null,
  //     "billingEndValue":null,
  //     "startDate":"2019-09-22"
  //   }


  //   this.serverRequest.SubscriptionsPlan('https://api-sandbox.ezypay.com/v2/billing/subscriptions',carddetail)
  //   .subscribe(res => {
  //     console.log(res);
  //   });

  //   }


  pricingPlans() {
    this.serverRequest.pricingPlansService('https://api-sandbox.ezypay.com/v2/billing/plans')
      .subscribe(res => {
        if (res) {
          this.planData = res;
          this.planFullData = this.planData.data
          this.isActive = false;
        }
        // console.log(res);
      });
  }

  yesPlan;
  //showPlancustomer = []
  showPlancustomer;

  async AllCustomer() {
    // this.serverRequest.pricingPlansService('https://api-sandbox.ezypay.com/v2/billing/customers')
    // .subscribe(res => {
    //   this.AllCustomerData = res;

    //   this.AllCustomerList= this.AllCustomerData.data;


    //    for(let i = 0; this.AllCustomerList.length > i; i++ ){

    //     this.checkplan(this.AllCustomerList[i].id).then( result => {


    //       this.showPlancustomer  = result;
    //       console.log('result',result);








    // this.yesPlan = result;
    // for(let a = 0; this.AllCustomerList.length > a; a++ )
    // {
    //   console.log('no',this.AllCustomerList[a].id);
    //   if(this.yesPlan[0].customerId == this.AllCustomerList[a].id){

    //     for(let b = 0; this.yesPlan.length > b; b++ )
    //     {
    //       console.log('b',[b]);

    //       //this.AllCustomerList[a].push( this.yesPlan[b].name);
    //       //this.AllCustomerList[a]
    //       // add Object fileds

    //       console.log('array',this.AllCustomerList[a]);
    //     }

    //     this.showPlancustomer.push(this.AllCustomerList[a]);

    //     console.log('yes',[a]);
    //   }
    // }

    // console.log(`CheckPlan${i}`,this.yesPlan);
    //   })

    //   }
    // });
  }




  //  checkplan(id:string){
  //   return new Promise((resolve,reject)=>{
  //   this.serverRequest.pricingPlansService(`https://api-sandbox.ezypay.com/v2/billing/subscriptions?customerId=${id}`)
  //   .subscribe(res => {
  //     this.DataPlan = res;
  //     this.Nameplan= this.DataPlan.data;

  //     if(this.DataPlan.paging.totalCount !== 0){
  //         resolve(this.Nameplan);
  //     }

  //   });

  // });

  // }


}


