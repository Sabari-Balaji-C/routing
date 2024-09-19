import { Component } from '@angular/core';
import { Employ } from '../employ';
import { EmployService } from '../employ.service';

@Component({
  selector: 'app-employ-show',
  templateUrl: './employ-show.component.html',
  styleUrl: './employ-show.component.css'
})
export class EmployShowComponent {
  employs : Employ[];
  constructor(private _employservice :EmployService){
    this._employservice.showEmploy().subscribe(x=>{
      this.employs=x;
    })
  }
}
