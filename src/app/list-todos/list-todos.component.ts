import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

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

  errorMessage:string
  successMessage:string
  todos : Todo[] = [] 

  constructor(private service:TodoDataService, private route:Router){

  }

  ngOnInit(): void {
    this.errorMessage=''
    this.successMessage=''
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
        this.successMessage = 'Todo deleted'
        
        setTimeout(() => {
          this.successMessage = '';
      }, 2000);
      }
    )
  }
  
  updateTodo(id: number) {
   this.route.navigate(['todos', id])
  }

    
  addTodo() {
    this.route.navigate(['todos', -1])
   }
}
