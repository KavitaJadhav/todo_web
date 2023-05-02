import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

  todos = [
    {id: 1, description: 'task 1'},
    {id: 2, description: 'task 2'},
    {id: 3, description: 'task 3'}
  ]
}
