import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BillingAndOrderPage } from './billing-and-order.page';

const routes: Routes = [
  {
    path: '',
    component: BillingAndOrderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BillingAndOrderPage]
})
export class BillingAndOrderPageModule {}
