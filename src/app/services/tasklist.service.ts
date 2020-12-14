import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Task } from '../Task/task';
import { ServiceBase } from './base/servicebase';
import { Category } from '../category/category';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class TasklistService extends ServiceBase {
  path = this.servicePath + "tasklists";
  categories: Category[];
  constructor(private http: HttpClient, private categoryService: CategoryService) {
    super();
    this.categoryService.getCategoryLists().subscribe(data =>
      this.categories = data
    );
  }

  getTaskLists(): Observable<Task[]> {
    return this.http.get<Task[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  createTask(task: Task): Observable<Task> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Task>(this.path, task, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
}
