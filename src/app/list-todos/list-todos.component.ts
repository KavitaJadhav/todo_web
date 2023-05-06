import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
      public id : number ,
      public description:string,
      public complete: boolean,
      public targetDate: Date ){
  
    }
  }

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit{

  todos : Todo[] = [] 
  
  todos_old = [
      new Todo(1, 'task1',true, new Date() ),
      new Todo(2, 'task2',false, new Date() ),
      new Todo(3, 'task3',false, new Date() ),
      new Todo(4, 'task4',false, new Date() ),
  ]

  constructor(private service:TodoDataService){

  }

  ngOnInit(): void {
    this.retriveAllTodos();
  }

  private retriveAllTodos() {
    this.service.retriveAllTodos('kavita').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id: number) {
    this.service.deleteTodo('kavita', id).subscribe(
      response => {
        this.retriveAllTodos()
      }
    )
  }
  
}
