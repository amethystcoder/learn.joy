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
    
  }

  student:user = { 
    studentname:"",
    studentsurname:"",
    studentclass:"",
    studentdept:""
    }

  getstudent(username:string,password:string){
    this.usergetputservice.getuser(username,password).subscribe((student)=>{
      this.usergetputservice.setpresentstudent(student)
   })
  }

  setstudent(){
    this.usergetputservice.setuser(this.student).subscribe((student)=>{
      this.usergetputservice.setpresentstudent(student)
   })
  }
}
