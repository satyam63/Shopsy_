import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  category:any;
  catId=3;


  constructor(private dataService:DataService) {
    this.dataService.getsubcategoryByCatId(this.catId).subscribe((response:any)=>{
      this.category=response.data;
      
    })


   }

  ngOnInit(): void {
  }

}
