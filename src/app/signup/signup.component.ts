import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UsergetputService } from '../usergetput.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private usergetputservice: UsergetputService) { }

  students:any

  ngOnInit(): void {
    this.usergetputservice.getusers()
      .subscribe(data => this.students = data)
  }

  student = { 
    studentname:"",
    studentsurname:"",
    studentclass:"",
    studentdept:""
    }

  checkusers(){
    //if(this.students.filter(stud => stud.name == this.student.studentname && stud.surname == this.student.studentsurname).length==0){
      //this.addstudent(this.student)
      //return this.student
    //}
    //else{
      //return this.students.filter(stud => stud.name == this.student.studentname && stud.surname == this.student.studentsurname)
    //}
    this.usergetputservice.setuser(this.student)
  }

  addstudent(){
    this.usergetputservice.setuser(this.student)
  }
}
