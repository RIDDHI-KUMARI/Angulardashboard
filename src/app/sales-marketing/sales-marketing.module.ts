import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesMarketingComponent } from './sales-marketing/sales-marketing.component';



@NgModule({
  declarations: [
    SalesMarketingComponent
  ],
  exports:[SalesMarketingComponent],
  imports: [
    CommonModule
  ]
})
export class SalesMarketingModule { }
