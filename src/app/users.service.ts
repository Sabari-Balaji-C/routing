import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http : HttpClient) { }
  showUsers() : Observable<any> {
    return this._http.get("http://jsonplaceholder.typicode.com/users")
  }

  searchUsers(eno:number):Observable<any>{
    return this._http.get("https://jsonplaceholder.typicode.com/users/"+eno)
  }
  

}
