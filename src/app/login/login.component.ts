import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName:string;
  password:string;
  constructor(private _router:Router){

  }
  login(){
    if(this.userName=="admin" && this.password=="admin"){
      this._router.navigate(["menu"]);
    }
  }
}
