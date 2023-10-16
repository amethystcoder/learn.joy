import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { resultsdata } from './testquestions.service';
import { Router } from '@angular/router';


export interface user{
  studentname:string,
  studentsurname:string,
  studentclass:string,
  studentdept:string,
  result:resultsdata[]
}

export interface useracheivements{
  name:string,
  description:string,
  active:boolean
}

@Injectable({
  providedIn: 'root'
})
export class UsergetputService {

  constructor(private http:HttpClient,private router:Router) { }

  path = 'http://localhost:8080/users'

  studentname = new Subject<string>()
  studentsurname = new Subject<string>()
  studentclass = new Subject<string>()
  studentdept = new Subject<string>()
  studentresults = new Subject<resultsdata[]>()

  setpresentstudent(student:user){
    this.studentname.next(student.studentname)
    this.studentsurname.next(student.studentsurname)
    this.studentclass.next(student.studentclass)
    this.studentdept.next(student.studentdept)
    this.studentresults.next(student.result)
  }

  is_login_otherwise_logout(){
    let stdentclass
    let stdentdept
    let stdentname
    let stdentsurname
    this.studentclass.subscribe((stdclass)=>{ 
      stdentclass = stdclass})
    this.studentdept.subscribe((stddept)=>{ 
      stdentdept = stddept})
    this.studentname.subscribe((stdname)=>{ 
      stdentname = stdname})
    this.studentsurname.subscribe((stdsurname)=>{ 
      stdentsurname = stdsurname})
    if(stdentclass == "" || stdentdept == "" || stdentname == "" || stdentsurname == ""){
      this.logout()
    }
  }

  logout(){
    this.studentclass.next("")
    this.studentdept.next("")
    this.studentname.next("")
    this.studentsurname.next("")
    this.studentresults.next([])
    this.router.navigate(['loginorup'])
  }

  getuser(username:string,password:string):Observable<user>{
    return this.http.post<user>(this.path,JSON.stringify({username:username,password:password}))
  }

  getusers() : Observable<user[]>{
    return this.http.get<user[]>(this.path)
  }

  setuser(user: user): Observable<user>{
    return this.http.post<user>(this.path,JSON.stringify(user))
  }

  handleError(){

  }
  
}
