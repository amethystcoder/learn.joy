import { Component, OnInit } from '@angular/core';
import { resultsdata } from '../testquestions.service';
import { UsergetputService } from '../usergetput.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private usergetput:UsergetputService) { }

  ngOnInit(): void {
    scrollTo({top:0})
    this.usergetput.studentresults.subscribe((data)=>{
      this.studentresult = data
    })
    this.presentyear
  }
  presentyear = undefined
  studentresult: resultsdata[] = []

}
