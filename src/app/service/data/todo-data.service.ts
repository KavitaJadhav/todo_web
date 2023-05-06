import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})


export class TodoDataService {

  constructor(private http:HttpClient) { }

  public retriveAllTodos(username:string){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  getTodo(username: string, id: number) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  // createTodo(username: string, todo: Todo) {
  createTodo(username: string, todo:string) {
    return this.http.post(`http://localhost:8080/users/${username}/todos`, todo)
  }
  updateTodo(username: string, id: number, todo:Todo) {
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo)
  }


}
