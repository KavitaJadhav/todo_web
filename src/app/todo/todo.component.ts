import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  id:number=0
  todo: Todo

  constructor(private http:HttpClient, private service:TodoDataService, private route:ActivatedRoute, private router:Router){}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.todo=new Todo(this.id, '', false, new Date)
    if(this.id !=-1){
      this.service.getTodo("kavita",this.id).subscribe(
        data=> this.todo=data
      )
}
  }

  saveTodo() {
    console.log("id in saveTodo" +this.id)
    if(this.id==-1){
      this.service.createTodo('kavita',this.todo).subscribe(
        response => {
          this.router.navigate(['todos'])
        }
      );

    }else{
      this.service.updateTodo('kavita', this.id, this.todo).subscribe(
        response => {
          this.router.navigate(['todos'])
        }
      );
    }
  }
}
