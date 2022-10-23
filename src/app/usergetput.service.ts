import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators'


interface user{
  name:string,
  surname:string,
  class:string,
  dept:string,
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

  //getusers() : Observable<any>{
  //  return this.http.request('GET',this.path,{responseType:'json'})
  //}

  setuser(user: object){
    this.http.post(this.path,user)
  }

  handleError(){

  }
  
}
