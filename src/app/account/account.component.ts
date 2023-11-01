import { Component, OnInit } from '@angular/core';
import { resultsdata } from '../testquestions.service';
import { UsergetputService } from '../usergetput.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private usergetput:UsergetputService, private router:Router) { }

  ngOnInit(): void {
    scrollTo({top:0})
    let date = new Date()
    this.presentyear = date.getFullYear()
    this.usergetput.studentresults.subscribe((data)=>{
      this.studentresult = data
      if(typeof this.studentresult == 'object'){}
      this.thisyearresult = this.studentresult.filter((data)=>{
        data.year == this.presentyear
      })[0]
      this.mainyearresults = this.calculateyearsresults()
    })
  }

  calculateyearsresults(){

    return []
  }
  
  mainyearresults:number[] = []
  thisyearresult!: resultsdata;
  presentyear:number = 0
  studentresult: resultsdata[] = []

  logout(){
    this.usergetput.studentclass.next("")
    this.usergetput.studentdept.next("")
    this.usergetput.studentname.next("")
    this.usergetput.studentsurname.next("")
    this.usergetput.studentresults.next([])
    this.router.navigate(['loginorup'])
  }

}
