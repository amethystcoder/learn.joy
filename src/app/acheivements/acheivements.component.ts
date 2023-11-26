import { Component, OnDestroy, OnInit } from '@angular/core';
import { resultsdata } from '../testquestions.service';
import { UsergetputService, useracheivements } from '../usergetput.service';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-acheivements',
  templateUrl: './acheivements.component.html',
  styleUrls: ['./acheivements.component.css']
})
export class AcheivementsComponent implements OnInit/* ,OnDestroy */ {

  constructor(private usergetputservice:UsergetputService) { }

  ngOnInit(): void {
    this.usergetputservice.is_login_otherwise_logout()
    scrollTo({top:0})
    this.results = this.usergetputservice.getstudentresults()
    this.acheivements = this.converttoacheivements(this.results)
  }

  /* ngOnDestroy(): void {
    this.usergetputservice.id.unsubscribe()
    this.usergetputservice.studentclass.unsubscribe()
    this.usergetputservice.studentdept.unsubscribe()
    this.usergetputservice.studentname.unsubscribe()
    this.usergetputservice.studentresults.unsubscribe()
    this.usergetputservice.studentsurname.unsubscribe()
  } */

  converttoacheivements(result:resultsdata[]){
    let acheivementsarr:useracheivements[] = [
      {name:"Welcome to the club",description:"complete a test",active:result.length > 0},
      {name:"Filled with determination",description:"complete 10 tests",active:result.length > 10},
      {name:"Hardworking",description:"complete 30 tests in a month",active:this.get_month_taken_tests_amount(result).filter((ress)=>ress.length >= 30).length > 0},
      {name:"Test Scout",description:"score a total of 40 in a month",active:this.get_month_taken_tests_amount(result).filter((res)=>res.reduce((prev,curr)=>prev + curr.score,0) >= 40).length > 0},
      {name:"Getting Good at this",description:"score 60% of a test",active:result.filter((res)=>((res.score / 6) * 100) > 60).length > 0},
      {name:"algebra was it?",description:"score a total of 50 in mathematics",active:result.filter((res)=>res.subject == "Mathematics").reduce((prev,curr)=>prev + curr.score,0) >= 50},
      {name:"My verb is 'winning'",description:"score a total of 50 in english language",active:result.filter((res)=>res.subject == "English Language").reduce((prev,curr)=>prev + curr.score,0) >= 50},
      {name:"Half a hundred tests",description:"complete 50 tests",active:result.length > 50},
      {name:"Perseverance pays off",description:"complete 120 tests in a month",active:this.get_month_taken_tests_amount(result).filter((ress)=>ress.length >= 120).length > 0},
      {name:"400 miles per hour",description:"score a total of 400 in a month",active:this.get_month_taken_tests_amount(result).filter((res)=>res.reduce((prev,curr)=>prev + curr.score,0) >= 400).length > 0},
      {name:"Guru",description:"score 80% of a test",active:result.filter((res)=>((res.score / 6) * 100) > 80).length > 0},
      {name:"Calculating my scores",description:"score a total of 100 in mathematics",active:result.filter((res)=>res.subject == "Mathematics").reduce((prev,curr)=>prev + curr.score,0) >= 100},
      {name:"Champion is a noun",description:"score a total of 100 in english language",active:result.filter((res)=>res.subject == "English Language").reduce((prev,curr)=>prev + curr.score,0) >= 100},
      {name:"Crashing the algorithm",description:"complete 200 tests",active:result.length > 200},
      {name:"Brilliance",description:"complete 1200 tests in a month",active:this.get_month_taken_tests_amount(result).filter((ress)=>ress.length >= 1200).length > 0},
      {name:"Expertise in testing",description:"score a total of 3000 in a month",active:this.get_month_taken_tests_amount(result).filter((res)=>res.reduce((prev,curr)=>prev + curr.score,0) >= 3000).length > 0},
      {name:"I can do this all day",description:"score 100% of a test",active:result.filter((res)=>((res.score / 6) * 100) > 100).length > 0},
      {name:"Calculus with my eyes closed",description:"score a total of 500 in mathematics",active:result.filter((res)=>res.subject == "Mathematics").reduce((prev,curr)=>prev + curr.score,0) >= 500},
      {name:"English Professor",description:"score a total of 500 in english language",active:result.filter((res)=>res.subject == "English Language").reduce((prev,curr)=>prev + curr.score,0) >= 500}
    ]
    return acheivementsarr
  }

  get_month_taken_tests_amount(result:resultsdata[]):resultsdata[][]{
    let months = ["January","February","March","April","May","June","July","August","September",
    "Octber","November","December"]
    let month_seperated_results = []
    for (let index = 0; index < months.length; index++) {
      month_seperated_results.push(result.filter((res)=>res.month == months[index]))
    }
    return month_seperated_results
  }

  //subject_score_amount()
  
  results:resultsdata[] = []

  acheivements:useracheivements[] = []
}
