import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  routenow!: string;

  constructor(private thisroute: Router){
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
    if(routingurl.includes(this.testurl)){
      return true
    }
    return false
  }
  
  title = 'LearnJoy';
}
