import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CategaryComponent } from './components/categary/categary.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import {ProductPageComponent} from './page/product-page/product-page.component';
import { AboutpageComponent } from './page/aboutpage/aboutpage.component';
import { ContantpageComponent } from './page/contantpage/contantpage.component';
import {HttpClientModule} from '@angular/common/http';
import { PhotosComponent } from './photos/photos.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';

import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CategaryComponent,
    HomepageComponent,
    AboutpageComponent,
    ContantpageComponent,
    AppComponent,
    PhotosComponent,
    SubCategoryComponent,
  
    ProductPageComponent,
    DepartmentdetailComponent,
    LoginPageComponent,
    RegisterPageComponent,
    


    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
