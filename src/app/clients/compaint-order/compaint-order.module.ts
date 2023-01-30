import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompaintOrderPageRoutingModule } from './compaint-order-routing.module';

import { CompaintOrderPage } from './compaint-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompaintOrderPageRoutingModule
  ],
  declarations: [CompaintOrderPage]
})
export class CompaintOrderPageModule {}
