import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  httpOptions = {
    headers: new HttpHeaders({
     "Content-Type": "application/json",
     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJleHAiOjE2NzA1NTEzNzcuNzEwODkxNX0.2cVJ2Q5ECS2RajaSlQLpDz2HG5B5pxP5yjcrsYo02U8"
    })
  };

  constructor(private http: HttpClient) {}

  public getAllNews(): Observable<any> {
    
    return this.http.get(`${environment.baseUrl}/news`);
  }

  public getNewPagination(page, items_per_page?): Observable<any> {
    
    const p = {
      'page':  page,
      'items_per_page': items_per_page || 10

    }
    console.log(p)

    return this.http.post(`${environment.baseUrl}/news_pagination`, p);
}
}
