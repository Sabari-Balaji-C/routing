import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployService {
  constructor(private _http : HttpClient) { }
  showEmploy() : Observable<any> {
    return this._http.get("http://localhost:8183/showEmploy")
  }

  searchEmploy(eno :number) : Observable<any> {
    return this._http.get("http://localhost:8183/searchEmploy/"+eno)
  }
}
