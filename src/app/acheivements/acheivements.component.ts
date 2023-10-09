import { Component, OnInit } from '@angular/core';
import { resultsdata } from '../testquestions.service';
import { UsergetputService, useracheivements } from '../usergetput.service';

@Component({
  selector: 'app-acheivements',
  templateUrl: './acheivements.component.html',
  styleUrls: ['./acheivements.component.css']
})
export class AcheivementsComponent implements OnInit {

  constructor(private usergetputservice:UsergetputService) { }

  ngOnInit(): void {
    scrollTo({top:0})
    this.usergetputservice.studentresults.subscribe((res)=>{
      this.results = res
      
    })
  }

  converttoacheivements(result:resultsdata){
    
  }
  
  results:resultsdata[] = []

  acheivements:useracheivements[] = []
}
