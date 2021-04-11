import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanResourceComponent } from './human-resource/human-resource.component';



@NgModule({
  declarations: [
    HumanResourceComponent
  ],
  exports:[HumanResourceComponent],
  imports: [
    CommonModule
  ]
})
export class HumanResourceModule { }
