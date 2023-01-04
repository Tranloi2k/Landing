import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpOptions = {
    headers: new HttpHeaders({
     "Content-Type": "application/json",
     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJleHAiOjE2NzA1NTEzNzcuNzEwODkxNX0.2cVJ2Q5ECS2RajaSlQLpDz2HG5B5pxP5yjcrsYo02U8"
    })
  };

  constructor(private http: HttpClient) {}

  public getAllProduct(): Observable<any> {
    
    return this.http.get(`${environment.baseUrl}/products`);
  }

  public getProductsPagination(page, items_per_page?): Observable<any> {
    
    const p = {
      'page':  page,
      'items_per_page': items_per_page || 10

    }
    console.log(p)

    return this.http.post(`${environment.baseUrl}/products_pagination`, p);
}

}
