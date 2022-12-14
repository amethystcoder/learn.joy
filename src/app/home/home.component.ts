import { Component, OnInit } from '@angular/core';
import allSubjects from '../categories.json';
import allbook from '../allbooks.json';
import { ActivatedRoute } from '@angular/router';

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
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  allCategories:allcategories[] = allSubjects;
  books:allbooks[] = allbook;

  ngOnInit(): void {
  }

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
