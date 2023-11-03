import { Component, OnDestroy, OnInit } from '@angular/core';
import { resultsdata } from '../testquestions.service';
import { UsergetputService } from '../usergetput.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit/* ,OnDestroy */ {

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
      })
      console.log(this.thisyearresult);
      this.mainyearresults = this.calculateyearsresults()
    })
  }

  /* ngOnDestroy(): void {
    this.usergetput.studentresults.unsubscribe()
  } */

  calculateyearsresults(){
    let monthscores:number[] = [0,0,0,0,0,0,0,0,0,0,0,0]
    let months = ["January","February","March","April","May","June","July","August","September",
    "Octber","November","December"]
    for(let i = 0;i < this.thisyearresult.length;i++){
      for(let j = 0;j < months.length;j++){
        if(months[j] == this.thisyearresult[i].month){
          monthscores[j] = monthscores[j] + this.thisyearresult[i].score
          break
        }
      }
    }
    return monthscores
  }
  
  mainyearresults:number[] = []
  thisyearresult!: resultsdata[];
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
