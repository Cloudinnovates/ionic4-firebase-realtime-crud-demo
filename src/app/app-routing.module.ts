import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'create', loadChildren: './create/create.module#CreatePageModule' },
  { path: 'detail/:key', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'edit/:key', loadChildren: './edit/edit.module#EditPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
