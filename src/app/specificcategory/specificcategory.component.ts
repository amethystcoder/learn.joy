import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import allSubjects from '../categories.json';
import { TestquestionsService,allquestion,topicquestions } from '../testquestions.service';
import { UsergetputService } from '../usergetput.service';

interface allcategories{
  category:string,
  color:string
}

@Component({
  selector: 'app-specificcategory',
  templateUrl: './specificcategory.component.html',
  styleUrls: ['./specificcategory.component.css']
})
export class SpecificcategoryComponent implements OnInit/* ,OnDestroy */ {

  getroute(){
    return this.route.snapshot.queryParamMap.get('category')
  }

  allCategories:allcategories[] = allSubjects;

  constructor(private route:ActivatedRoute,private testquestservice:TestquestionsService,private usergetputservice:UsergetputService) { }

  currenttests: allquestion[] = [];
  testunder:topicquestions[] = []


  ngOnInit(): void {
    scrollTo({top:0})
    this.usergetputservice.is_login_otherwise_logout()
    this.currenttests = this.testquestservice.getthroughsubjectname(this.getroute())
    this.testunder = this.currenttests[0].topics
  }

  /* ngOnDestroy(): void {
    this.usergetputservice.id.unsubscribe()
    this.usergetputservice.studentclass.unsubscribe()
    this.usergetputservice.studentdept.unsubscribe()
    this.usergetputservice.studentname.unsubscribe()
    this.usergetputservice.studentresults.unsubscribe()
    this.usergetputservice.studentsurname.unsubscribe()
  } */

  gottencategories = Array()

  getcategories(){
    var limit = 0
    while (limit < 4){
      this.gottencategories.push(this.allCategories[limit])
      limit++
    }
    return this.gottencategories
  }

  
}
