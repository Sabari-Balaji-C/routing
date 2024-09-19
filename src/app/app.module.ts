import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersShowComponent } from './users-show/users-show.component';
import { EmployShowComponent } from './employ-show/employ-show.component';
import { EmploySearchComponent } from './employ-search/employ-search.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { TodoShowComponent } from './todo-show/todo-show.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = 
[
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent,children:[
    {path:'UserShow',component:UsersShowComponent,outlet:'admin'},
    {path:'UserSearch',component:UserSearchComponent,outlet:'admin'},
    {path:'TodoShow',component:TodoShowComponent,outlet:'admin'},
    {path:'TodoSearch',component:TodoSearchComponent,outlet:'admin'},
    {path:'EmployShow',component:EmployShowComponent,outlet:'admin'},
    {path:'EmploySearch',component:EmploySearchComponent,outlet:'admin'},
  ]}
  
]
@NgModule({
  declarations: [
    AppComponent,
    UsersShowComponent,
    EmployShowComponent,
    EmploySearchComponent,
    UserSearchComponent,
    TodoShowComponent,
    TodoSearchComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
