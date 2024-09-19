import { Component } from '@angular/core';
import { ToDo } from '../to-do';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-todo-show',
  templateUrl: './todo-show.component.html',
  styleUrl: './todo-show.component.css'
})
export class TodoShowComponent {
todos : ToDo[];
constructor(private _todoservice : ToDoService){
  this._todoservice.showTodo().subscribe(x=>{
    this.todos=x;
  })
}
}
