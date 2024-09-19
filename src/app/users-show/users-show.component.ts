import { Component } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-show',
  templateUrl: './users-show.component.html',
  styleUrl: './users-show.component.css'
})
export class UsersShowComponent {
  users : Users[];
  constructor(private _userservice :UsersService){
    this._userservice.showUsers().subscribe(x=>{
      this.users=x;
    })
  }
}
