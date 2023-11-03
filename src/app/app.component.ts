import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { UsergetputService } from './usergetput.service';
import { use } from 'backend/datamodel/backroutings/userroutes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit,OnDestroy {

  ngOnInit(): void {
    this.usergetputservice.is_login_otherwise_logout()
  }

  ngOnDestroy(): void {
    this.usergetputservice.id.unsubscribe()
    this.usergetputservice.studentclass.unsubscribe()
    this.usergetputservice.studentdept.unsubscribe()
    this.usergetputservice.studentname.unsubscribe()
    this.usergetputservice.studentresults.unsubscribe()
    this.usergetputservice.studentsurname.unsubscribe()
  }

  routenow!: string;

  constructor(private thisroute: Router,private usergetputservice:UsergetputService){
    thisroute.events.subscribe(
      (event:any) => {
        if (event instanceof NavigationEnd){
          this.routenow = thisroute.url
        }
      }
    )
  }

  testurl = "/test"

  istestroute(routingurl:string){
    if(typeof routingurl == 'string'){
      if(routingurl.includes(this.testurl)){
        return true
      }
    }
    return false
  }
  
  title = 'LearnJoy';
}
