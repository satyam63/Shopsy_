import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private base_usl = 'https://apolis-grocery.herokuapp.com/api';
  getdata() {
    return this.http.get(`${this.base_usl}/category`)
  }
  getsubcategoryByCatId(catId: number) {
    return this.http.get(`${this.base_usl}/subcategory/3`)

  }
  getsubproduct(catId:number){
    return this.http.get(`${this.base_usl}/products/cat/${catId}`)
  }
  constructor(private http: HttpClient) { }
}
