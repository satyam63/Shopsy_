import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: any;
  catId: any;

  constructor(private dataService: DataService, private activateRoute: ActivatedRoute) {

    this.catId = this.activateRoute.snapshot.paramMap.get('catId');

    this.dataService.getsubproduct(this.catId).subscribe((response: any) => {
      this.catId = this.activateRoute.snapshot.paramMap.get('catId')
      this.product = response.data;

    })


  }

  ngOnInit(): void {
  }

}
