import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { APP_JPA_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})


export class TodoDataService {

  constructor(private http:HttpClient) { }

  public retriveAllTodos(username:string){
    return this.http.get<Todo[]>(`${APP_JPA_URL}/users/${username}/todos`)
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete(`${APP_JPA_URL}/users/${username}/todos/${id}`)
  }

  getTodo(username: string, id: number) {
    return this.http.get<Todo>(`${APP_JPA_URL}/users/${username}/todos/${id}`)
  }

  createTodo(username: string, todo:Todo) {
    return this.http.post(`${APP_JPA_URL}/users/${username}/todos`, todo)
  }

  updateTodo(username: string, id: number, todo:Todo) {
    return this.http.put(`${APP_JPA_URL}/users/${username}/todos/${id}`, todo)
  }
}
