import { Component } from '@angular/core';
import { ToDo } from '../to-do';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrl: './todo-search.component.css'
})
export class TodoSearchComponent {
  eno:number;
  todos:ToDo;
  constructor(private _todoservice:ToDoService){
  }
  
  searchTod0s(){
    this._todoservice.searchTodo(this.eno).subscribe(x=>{
      this.todos=x;
    })
  }

}
