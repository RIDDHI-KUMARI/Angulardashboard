import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase/purchase.component';



@NgModule({
  declarations: [
    PurchaseComponent
  ],
  exports:[PurchaseComponent],
  imports: [
    CommonModule
  ]
})
export class PurchaseModule { }
