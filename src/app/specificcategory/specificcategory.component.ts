import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import allSubjects from '../categories.json';

interface allcategories{
  category:string,
  color:string
}

@Component({
  selector: 'app-specificcategory',
  templateUrl: './specificcategory.component.html',
  styleUrls: ['./specificcategory.component.css']
})
export class SpecificcategoryComponent implements OnInit {

  getroute(){
    return this.route.snapshot.queryParamMap.get('category')
  }

  allCategories:allcategories[] = allSubjects;

  constructor(private route:ActivatedRoute) { }


  ngOnInit(): void {
  }

  gottencategories = Array()

  getcategories(){
    var limit = 0
    while (limit < 4){
      this.gottencategories.push(this.allCategories[limit])
      limit++
    }
    return this.gottencategories
  }

  tests = [
    {name:''}
  ]
}
