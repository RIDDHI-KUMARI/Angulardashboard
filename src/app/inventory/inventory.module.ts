import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';



@NgModule({
  declarations: [
    InventoryComponent
  ],
  exports:[InventoryComponent],
  imports: [
    CommonModule
  ]
})
export class InventoryModule { }
