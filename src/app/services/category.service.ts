import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Category } from '../category/category';
import { Task } from '../Task/task';
import { ServiceBase } from './base/servicebase';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ServiceBase {

  path = this.servicePath + "categories";
  categories: Category[];
  constructor(private http: HttpClient) {
    super();
    this.getCategoryLists().subscribe(categoryData =>
      this.categories = categoryData
    );
  }
  getCategoryLists(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  createCategory(category: Category): Observable<Category> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Category>(this.path, category, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
}
