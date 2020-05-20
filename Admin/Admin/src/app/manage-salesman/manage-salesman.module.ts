import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManageSalesmanPage } from './manage-salesman.page';

const routes: Routes = [
  {
    path: '',
    component: ManageSalesmanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageSalesmanPage]
})
export class ManageSalesmanPageModule {}
