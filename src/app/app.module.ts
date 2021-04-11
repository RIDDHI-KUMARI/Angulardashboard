import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { hi_IN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import hi from '@angular/common/locales/hi';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutComponent, NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

registerLocaleData(hi);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FinanceAccountingModule,
    SalesMarketingModule,
    SupplychainmanagementModule,
    HumanResourceModule,
    InventoryModule,
    PurchaseModule,
    CustomerRelationshipmanagementModule,
    EngineeringProductionModule
  ],
  providers: [{ provide: NZ_I18N, useValue: hi_IN }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import  { FinanceAccountingModule } from './finance-accounting/finance-accounting.module';
import  { SalesMarketingModule } from './sales-marketing/sales-marketing.module';
import {SupplychainmanagementModule} from './supplychainmanagement/supplychainmanagement.module';
import {HumanResourceModule} from './human-resource/human-resource.module';
import {InventoryModule} from './inventory/inventory.module';
import {PurchaseModule} from './purchase/purchase.module';
import {CustomerRelationshipmanagementModule} from './customer-relationshipmanagement/customer-relationshipmanagement.module';
import {EngineeringProductionModule } from './engineering-production/engineering-production.module';




