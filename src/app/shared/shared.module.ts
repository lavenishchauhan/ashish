import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyFormatPipe } from './pipe/currency-format.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
 
@NgModule({
  declarations: [CurrencyFormatPipe],
  imports: [
    CommonModule
  ],
  exports:[CommonModule,FormsModule,HttpClientModule,CurrencyFormatPipe,NgbModule,RouterModule]
})
export class SharedModule { }
