import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {UserData} from './userdata';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
 loginstatus:any;
 responseText="";
 responseClass="";
 userModel = new UserData('')
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {}
  onsubmitHandler(formData:any){
    this.authservice.login(formData).subscribe((response:any)=>{
      this.responseText="login success";
      this.responseClass='alert-success';
      localStorage.setItem('token',response.token);
      localStorage.setItem('user',JSON.stringify(response.user));
      
    },
  
    (error)=>{
      this.responseText='login failed,try again'
      this.responseClass='alert-danger'
    }
    )
  }

}
