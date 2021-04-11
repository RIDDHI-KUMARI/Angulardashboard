import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerRelationshipmanagementComponent } from './customer-relationshipmanagement/customer-relationshipmanagement/customer-relationshipmanagement.component';
import { EngineeringProductionComponent } from './engineering-production/engineering-production/engineering-production.component';
import { FinanceAccountingComponent } from './finance-accounting/finance-accounting/finance-accounting.component';
import { HumanResourceComponent } from './human-resource/human-resource/human-resource.component';
import { InventoryComponent } from './inventory/inventory/inventory.component';
import { PurchaseComponent } from './purchase/purchase/purchase.component';
import { SalesMarketingComponent } from './sales-marketing/sales-marketing/sales-marketing.component';
import { SupplychainmanagementComponent } from './supplychainmanagement/supplychainmanagement/supplychainmanagement.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path:'CRM',component:CustomerRelationshipmanagementComponent},
  {path:'Engineering/Production',component:EngineeringProductionComponent},
  {path:'Finance & Accounting',component:FinanceAccountingComponent},
  {path:'Human Resource',component:HumanResourceComponent},
  {path:'Inventory',component:InventoryComponent},
  {path:'Purchase',component:PurchaseComponent},
  {path:'Sales & Marketing',component:SalesMarketingComponent},
  {path:'SupplychainManagement',component:SupplychainmanagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
