import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [

  // {path:'', component: AppComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'images', component:ImagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
