import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'homee', loadChildren: './homee/homee.module#HomeePageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'inventory1', loadChildren: './inventory1/inventory1.module#Inventory1PageModule' },
  { path: 'sales', loadChildren: './sales/sales.module#SalesPageModule' },
  { path: 'complaints', loadChildren: './complaints/complaints.module#ComplaintsPageModule' },
  { path: 'manage-salesman', loadChildren: './manage-salesman/manage-salesman.module#ManageSalesmanPageModule' },
  { path: 'update-inventory/:Product_Id', loadChildren: './update-inventory/update-inventory.module#UpdateInventoryPageModule' },
  { path: 'salesman2', loadChildren: './salesman2/salesman2.module#Salesman2PageModule' },
  { path: 'inventory22', loadChildren: './inventory22/inventory22.module#Inventory22PageModule' },
  { path: 'update-salesman/:Salesman_Id', loadChildren: './update-salesman/update-salesman.module#UpdateSalesmanPageModule' },
  { path: 'show-complaint/:Complaints_Id', loadChildren: './show-complaint/show-complaint.module#ShowComplaintPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
