import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplychainmanagementComponent } from './supplychainmanagement/supplychainmanagement.component';



@NgModule({
  declarations: [
    SupplychainmanagementComponent
  ],
  exports:[SupplychainmanagementComponent],
  imports: [
    CommonModule
  ]
})
export class SupplychainmanagementModule { }
