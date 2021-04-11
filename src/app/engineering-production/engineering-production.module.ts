import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngineeringProductionComponent } from './engineering-production/engineering-production.component';



@NgModule({
  declarations: [
    EngineeringProductionComponent
  ],
  exports:[EngineeringProductionComponent],
  imports: [
    CommonModule
  ]
})
export class EngineeringProductionModule { }
