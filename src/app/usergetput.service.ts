import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { resultsdata } from './testquestions.service';
import { Router } from '@angular/router';


export interface user{
  _id:string,
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

  id = new Subject<string>()
  studentname = new Subject<string>()
  studentsurname = new Subject<string>()
  studentclass = new Subject<string>()
  studentdept = new Subject<string>()
  studentresults = new Subject<resultsdata[]>()

  idobs = this.id.asObservable()
  studentnameobs = this.studentname.asObservable()
  studentsurnameobs = this.studentname.asObservable()
  studentclassobs = this.studentclass.asObservable()
  studentdeptobs = this.studentdept.asObservable()
  studentresultsobs = this.studentresults.asObservable() 

  setpresentstudent(student:user,id:string){
    this.id.next(id)
    this.studentname.next(student.studentname)
    this.studentsurname.next(student.studentsurname)
    this.studentclass.next(student.studentclass)
    this.studentdept.next(student.studentdept)
    this.studentresults.next(student.result)
  }

  is_login_otherwise_logout(){
/*     let id = ""
    let stdentclass = ""
    let stdentdept = ""
    let stdentname = ""
    let stdentsurname = "" */
    this.idobs.subscribe((std_id)=>{
      console.log(std_id);
      if(!std_id){
        this.logout()
      }
    })
    this.studentclassobs.subscribe((stdclass)=>{
      console.log(stdclass);
      if(!stdclass){
        this.logout()
      } 
    })
    this.studentdeptobs.subscribe((stddept)=>{ 
      console.log(stddept);
      if(!stddept){
        this.logout()
      } 
    })
    this.studentnameobs.subscribe((stdname)=>{ 
      console.log(stdname);
      if(!stdname){
        this.logout()
      } 
    })
    this.studentsurnameobs.subscribe((stdsurname)=>{ 
      console.log(stdsurname);
      if(!stdsurname){
        this.logout()
      } 
    })
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
    return this.http.post<user>(this.path,user)
  }

  setscore(score:quizscore,id:string){
    return this.http.post<quizscore>(this.path+"/addscore",{id:id,score:score})
  }

  handleError(){

  }
  
}
