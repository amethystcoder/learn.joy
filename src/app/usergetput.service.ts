import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
/* import { Subject,BehaviorSubject } from 'rxjs'; */
import { resultsdata } from './testquestions.service';
import { Router } from '@angular/router';


export interface user{
  _id:string,
  studentname:string,
  studentsurname:string,
  studentclass:string,
  studentdept:string,
  results:resultsdata[]
}

export interface useracheivements{
  name:string,
  description:string,
  active:boolean
}

export interface quizscore{
  topic_name:string|null,
  topic_subject:string|null,
  score:number
}

@Injectable({
  providedIn: 'root'
})
export class UsergetputService {

  constructor(private http:HttpClient,private router:Router) { }

  path = 'http://localhost:8080/users'

/*   id = new Subject<string>()
  studentname = new Subject<string>()
  studentsurname = new Subject<string>()
  studentclass = new Subject<string>()
  studentdept = new Subject<string>()
  studentresults = new Subject<resultsdata[]>() */


  setpresentstudent(student:user,id:string){
    /* this.id.next(id)
    this.studentname.next(student.studentname)
    this.studentsurname.next(student.studentsurname)
    this.studentclass.next(student.studentclass)
    this.studentdept.next(student.studentdept)
    this.studentresults.next(student.result) */
    let userStorage = window.localStorage
    userStorage.clear()
    userStorage.setItem("id",id)
    userStorage.setItem("studentname",student.studentname)
    userStorage.setItem("studentsurname",student.studentsurname)
    userStorage.setItem("studentclass",student.studentclass)
    userStorage.setItem("studentdept",student.studentdept)
    userStorage.setItem("result",JSON.stringify(student.results))
  }

  is_login_otherwise_logout(){
    console.log("starting");
    
    let userStorage = window.localStorage
    let studentname = userStorage.getItem("studentname")
    let studentsurname = userStorage.getItem("studentsurname")
    let studentclass =  userStorage.getItem("studentclass")
    let studentdept = userStorage.getItem("studentdept")
    if(!studentclass || !studentdept || !studentname || !studentsurname){
      this.logout()
    }
  }

  getstudentresults(){
    let userStorage = window.localStorage
    return JSON.parse(userStorage.getItem("result")!)
  }

  getstudentdept(){
    let userStorage = window.localStorage
    if (userStorage.getItem("studentdept") == null || !userStorage.getItem("studentdept"))
      return ""
    return userStorage.getItem("studentdept")!
  }

  getstudentid(){
    let userStorage = window.localStorage
    if (userStorage.getItem("id") == null || !userStorage.getItem("id"))
      return ""
    return userStorage.getItem("id")!
  }

  logout(){
    /* this.studentclass.next("")
    this.studentdept.next("")
    this.studentname.next("")
    this.studentsurname.next("")
    this.studentresults.next([]) */
    let userStorage = window.localStorage
    userStorage.clear()
    this.router.navigate(['loginorup'])
  }

  getuser(username:string,password:string):Observable<user>{
    return this.http.post<user>(this.path,JSON.stringify({username:username,password:password}))
  }

  getusers() : Observable<user[]>{
    return this.http.get<user[]>(this.path)
  }

  setuser(user: user): Observable<user>{
    return this.http.post<user>(this.path,user)
  }

  setscore(score:quizscore,id:string){
    return this.http.post<quizscore>(this.path+"/addscore",{id:id,score:score})
  }

  handleError(){

  }
  
}
