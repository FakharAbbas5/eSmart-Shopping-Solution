import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BillingAndOrder2Page } from './billing-and-order2.page';

const routes: Routes = [
  {
    path: '',
    component: BillingAndOrder2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BillingAndOrder2Page]
})
export class BillingAndOrder2PageModule {}
