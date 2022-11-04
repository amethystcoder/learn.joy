import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsergetputService } from '../usergetput.service';
import { user } from '../usergetput.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private usergetputservice: UsergetputService) { }

  students!:user[];
  currentstudent = Array()

  ngOnInit(): void {
    this.usergetputservice.getusers().subscribe(
      data => this.students = data
    )
  }

  student:user = { 
    studentname:"",
    studentsurname:"",
    studentclass:"",
    studentdept:""
    }

  checkusers(){
    this.currentstudent.push(this.students.filter(users => users.studentname = this.student.studentname)[0])
  }


  getstudent(){
    
  }

  setstudent(std:user){
   return this.usergetputservice.setuser(std)
  }
}
