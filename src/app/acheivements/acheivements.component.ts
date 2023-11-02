import { Component, OnInit } from '@angular/core';
import { resultsdata } from '../testquestions.service';
import { UsergetputService, useracheivements } from '../usergetput.service';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-acheivements',
  templateUrl: './acheivements.component.html',
  styleUrls: ['./acheivements.component.css']
})
export class AcheivementsComponent implements OnInit {

  constructor(private usergetputservice:UsergetputService) { }

  ngOnInit(): void {
    this.usergetputservice.is_login_otherwise_logout()
    scrollTo({top:0})
    this.usergetputservice.studentresultsobs.subscribe((res)=>{
      this.results = res
      
    })
  }

  converttoacheivements(result:resultsdata[]){
    let acheivementsarr:useracheivements[] = [
      {name:"Welcome to the club",description:"complete a test",active:false},
      {name:"",description:"complete 10 tests",active:false},
      {name:"",description:"complete 30 tests in a month",active:false},
      {name:"",description:"score a total of 40 in a month",active:false},
      {name:"",description:"score 60% of a test",active:false},
      {name:"",description:"score a total of 50 in a week",active:false},
      {name:"",description:"score a total of 50 in mathematics",active:false},
      {name:"",description:"score a total of 50 in english language",active:false},
      {name:"",description:"complete 50 tests",active:false},
      {name:"",description:"complete 120 tests in a month",active:false},
      {name:"",description:"score a total of 400 in a month",active:false},
      {name:"",description:"score 80% of a test",active:false},
      {name:"",description:"score a total of 150 in a week",active:false},
      {name:"",description:"score a total of 100 in mathematics",active:false},
      {name:"",description:"score a total of 100 in english language",active:false},
      {name:"",description:"complete 200 tests",active:false},
      {name:"",description:"complete 1200 tests in a month",active:false},
      {name:"",description:"score a total of 3000 in a month",active:false},
      {name:"",description:"score 100% of a test",active:false},
      {name:"",description:"score a total of 500 in a week",active:false},
      {name:"",description:"score a total of 500 in mathematics",active:false},
      {name:"",description:"score a total of 500 in english language",active:false}
    ]
  }

  get_all_taken_tests_amount(result:resultsdata[]){
    /* let total = 0
    for(let i=0;i<result.length;i++){
      for(let j = 0; j < result[i].year_results.length;j++){
        for(let k = 0; k < result[i].year_results[j].month_results.length;k++){
          result[i].year_results[j].month_results[k].scores.reduce()
        }
      }
    } */
  }
  
  results:resultsdata[] = []

  acheivements:useracheivements[] = []
}
