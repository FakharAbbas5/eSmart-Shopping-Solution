import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'option', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'customer-home', loadChildren: './customer-home/customer-home.module#CustomerHomePageModule' },
  { path: 'my-orders', loadChildren: './my-orders/my-orders.module#MyOrdersPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'complaints', loadChildren: './complaints/complaints.module#ComplaintsPageModule' },
  { path: 'option', loadChildren: './option/option.module#OptionPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
