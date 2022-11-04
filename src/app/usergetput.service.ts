import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators'


export interface user{
  studentname:string,
  studentsurname:string,
  studentclass:string,
  studentdept:string,
}

@Injectable({
  providedIn: 'root'
})
export class UsergetputService {

  constructor(private http:HttpClient) { }

  path = 'http://localhost:8080/users'

  getusers() : Observable<user[]>{
    return this.http.get<user[]>(this.path)
  }

  setuser(user: user){
    return this.http.post(this.path,user)
  }

  handleError(){

  }
  
}
