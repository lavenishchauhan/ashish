import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServerRequestService } from 'src/app/shared/services/server-request.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styles: []
})
export class InvoiceListComponent implements OnInit {
  invoiceList;
  totalPaymentReceived = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private serverRequest: ServerRequestService) { }

  ngOnInit() {
    this.invoicesList()
  }




  invoicesList() {
    this.serverRequest.invoices('https://api-sandbox.ezypay.com/v2/billing/invoices?limit=50')
      .subscribe(res => {
     if(res){

      this.invoiceList= res;
      this.invoiceList = this.invoiceList.data;
      console.log(' this.invoiceList', this.invoiceList);

      for (let i=0; i < this.invoiceList.length; i++) {
        this.totalPaymentReceived +=  this.invoiceList[i].amount.value 
            
    }

    console.log('totalPaymentReceived', this.totalPaymentReceived);




      
     }
     

      })
  }






}
