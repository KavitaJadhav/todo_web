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

}
