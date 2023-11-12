import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UsergetputService } from '../usergetput.service';
import { user } from '../usergetput.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private usergetputservice: UsergetputService,private router:Router) { }

  students!:user[];
  currentstudent = Array()

  ngOnInit(): void {
    
  }

  errwarning = ""

  student:user = {
    _id:"", 
    studentname:"",
    studentsurname:"",
    studentclass:"",
    studentdept:"",
    results:[]
    }

  getstudent(username:string,password:string){
    this.usergetputservice.getuser(username,password).subscribe((student)=>{
      this.usergetputservice.setpresentstudent(student,student._id)
   })
  }

  setstudent(){
    if(this.student.studentclass == "" || this.student.studentdept == "" || this.student.studentname == "" || this.student.studentsurname == ""){
      setTimeout(() => {
        this.errwarning = "please fill all inputs on the form"
      }, 3000);
    }
    else{
      this.usergetputservice.setuser(this.student).subscribe((student)=>{
        this.usergetputservice.setpresentstudent(student,student._id)
        
        //this.router.navigateByUrl("/home")
        location.replace("/home")
     })
    }
  }
}
