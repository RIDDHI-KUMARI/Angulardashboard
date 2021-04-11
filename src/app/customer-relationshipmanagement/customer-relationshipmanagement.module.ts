import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRelationshipmanagementComponent } from './customer-relationshipmanagement/customer-relationshipmanagement.component';



@NgModule({
  declarations: [
    CustomerRelationshipmanagementComponent
  ],
  exports:[CustomerRelationshipmanagementComponent],
  imports: [
    CommonModule
  ]
})
export class CustomerRelationshipmanagementModule { }
