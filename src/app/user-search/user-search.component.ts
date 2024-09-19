import { Component } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css'
})
export class UserSearchComponent {
  eno : number;
  user : Users;
  searchUsers(){
    this._userservice.searchUsers(this.eno).subscribe(x=>{
      this.user=x;
    })
  }
  constructor(private _userservice : UsersService) {
}
}
