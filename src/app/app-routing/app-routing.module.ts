import { ProductPageComponent } from './../page/product-page/product-page.component';
import { HomepageComponent } from './../page/homepage/homepage.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContantpageComponent } from './../page/contantpage/contantpage.component';
import { AboutpageComponent } from './../page/aboutpage/aboutpage.component';
import { RegisterPageComponent } from '../page/register-page/register-page.component';
import { LoginPageComponent } from '../page/login-page/login-page.component';


const routes: Routes = [

  { path: '', component: HomepageComponent },
  { path: 'aboutpage', component: AboutpageComponent },
  { path: 'contantpage', component: ContantpageComponent },
  { path: 'product/:catId', component: ProductPageComponent },
  {path:'register',component:RegisterPageComponent},
  {path:'login',component:LoginPageComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

