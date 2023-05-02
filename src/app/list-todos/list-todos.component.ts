import { Component } from '@angular/core';

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

export class ListTodosComponent {
  
  todos = [
      new Todo(1, 'task1',true, new Date() ),
      new Todo(2, 'task2',false, new Date() ),
      new Todo(3, 'task3',false, new Date() ),
      new Todo(4, 'task4',false, new Date() ),
  ]
}
