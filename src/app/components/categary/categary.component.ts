import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categary',
  templateUrl: './categary.component.html',
  styleUrls: ['./categary.component.css']
})
export class CategaryComponent implements OnInit {
  categories:any;
 

  constructor(private dataService:DataService,private router:Router) { 

    
    this.dataService.getdata().subscribe((response:any)=>{
      this.categories=response.data;
      
    })
  
  }

  ngOnInit(): void {
  }
  onbtnclick(catId:number){
    return this.router.navigate(['product',catId])
      
  }

}
