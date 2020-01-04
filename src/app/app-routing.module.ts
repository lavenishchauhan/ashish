import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';



import { HomeComponent } from './layout/component/home/home.component';
import { NoAccessComponent } from './shared/component/no-access/no-access.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: 'product', loadChildren: './product/product.module#ProductModule' },
  { path: 'no-access', component: NoAccessComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
