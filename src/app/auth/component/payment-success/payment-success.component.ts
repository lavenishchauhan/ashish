import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServerRequestService } from 'src/app/shared/services/server-request.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styles: []
})
export class PaymentSuccessComponent implements OnInit {

  customerId;
  invoiceList;
  paymentStatus = 'Waiting...';
  invoicedata = {
    subscriptionName:'',
    customerId:'',
    subscriptionId:'',
    documentNumber:'',
    value:'',
    currency:'',
    date:'',
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private serverRequest: ServerRequestService) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe(params => {
        // console.log('params',params);
        this.customerId = params.get('customerId');
        console.log('customerId', this.customerId);
      });
    this.invoicesPayment();
  }

  invoicesPayment() {
    this.serverRequest.invoices('https://api-sandbox.ezypay.com/v2/billing/invoices')
      .subscribe(res => {
        this.invoiceList = res;
        this.invoiceList = this.invoiceList.data;
        if (this.invoiceList) {
          let index = this.invoiceList.findIndex(x => x.customerId === this.customerId);
          this.invoiceList = this.invoiceList[index];

          this.invoicedata = {
            subscriptionName:this.invoiceList.subscriptionName,
            customerId:this.invoiceList.customerId,
            subscriptionId:this.invoiceList.subscriptionId,
            documentNumber:this.invoiceList.documentNumber,
            value:this.invoiceList.amount.value,
            currency:this.invoiceList.amount.currency,
            date:this.invoiceList.date,
          };

          console.log('this.invoiceList', this.invoiceList);
          this.paymentStatus = 'Success';
        }
      })
  }

}
