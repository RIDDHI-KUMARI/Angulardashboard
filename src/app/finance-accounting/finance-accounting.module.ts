import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceAccountingComponent } from './finance-accounting/finance-accounting.component';



@NgModule({
  declarations: [
    FinanceAccountingComponent
  ],
  exports:[FinanceAccountingComponent],
  imports: [
    CommonModule
  ]
})
export class FinanceAccountingModule { }
