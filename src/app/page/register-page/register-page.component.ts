import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service'


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor( private authservice:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(Formdata :any){
    this.authservice.register(Formdata).subscribe((response:any)=>{
      console.log(response);
    })

  }

}
