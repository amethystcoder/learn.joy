import { Component, OnDestroy, OnInit } from '@angular/core';
import allSubjects from '../categories.json';
import allbook from '../allbooks.json';
import { ActivatedRoute } from '@angular/router';
import { UsergetputService } from '../usergetput.service';

interface allcategories{
  category:string,
  color:string,
  under:string
}

interface allbooks{
  name:string,
  duration:string,
  type:string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit/* ,OnDestroy */ {

  constructor(private route:ActivatedRoute,private usergetputservice:UsergetputService) { }

  allCategories:allcategories[] = allSubjects;
  books:allbooks[] = allbook;

  ngOnInit(): void {
    this.usergetputservice.is_login_otherwise_logout()
    this.department = this.usergetputservice.getstudentdept()
    scrollTo({top:0})
  }

  /* ngOnDestroy(): void {
    this.usergetputservice.id.unsubscribe()
    this.usergetputservice.studentclass.unsubscribe()
    this.usergetputservice.studentdept.unsubscribe()
    this.usergetputservice.studentname.unsubscribe()
    this.usergetputservice.studentresults.unsubscribe()
    this.usergetputservice.studentsurname.unsubscribe()
  } */

  department = "arts"
  gottenbooks = Array()
  gottencategories = Array()
  presentcategory = Array()

  getbooks(){
    var limit = 0
    while (limit < 8){
      this.gottenbooks.push(this.books[limit])
      limit++
    }
    return this.gottenbooks
  }

  getcategories(dept: string){
    var limit = 0
    this.gottencategories = []
    this.presentcategory = this.allCategories.filter(
      (categ)=> categ.under = dept)
    while (limit < 4){
      this.gottencategories.push(this.presentcategory[limit])
      limit++
    }
    return this.gottencategories
  }

  
}
