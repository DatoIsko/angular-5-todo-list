import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

    public todoList: any[];
    private developer = 'Davit';
    private apiUrl = 'https://uxcandy.com/~shapoval/test-task-backend';

    constructor(
        private http: HttpClient) {}

    public addTask(data): Observable<any> {
        return this.http.post(`${this.apiUrl}/create?developer=${this.developer}`,
            data,
            {headers: new HttpHeaders({ mimeType: 'multipart/form-data'})});
    }

    public getTodoList(): Observable<any> {
        return this.http.get(`${this.apiUrl}/?developer=${this.developer}`);
    }

  // getTodoList() {
  //   this.todoList = this.firebasedb.list('titles');
  //   return this.todoList;
  // }
  //
  // addTitle(title: string) {
  //   this.todoList.push({
  //     title: title,
  //     isChecked: false
  //   });
  // }

  // checkOrUncheckTitle($key: string, flag: boolean) {
  //   this.todoList.update($key, { isChecked: flag });
  // }
  //
  // removeTitle($key: string) {
  //   this.todoList.remove($key);
  // }

}
