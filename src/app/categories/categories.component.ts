import { Component, OnInit } from '@angular/core'
import allCategories from '../categories.json'
import allquestions from '../allquestions.json'
import { allquestion } from '../testquestions.service'

interface allcategories{
  category:string,
  color:string,
  under:string
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories:allcategories[] = allCategories
  specialcategory = Array()
  questions:allquestion[] = allquestions
  searchquery = ""
  allresults = Array()
  searchresults = Array()

  dept = 'arts'

  
  setdrop(drawdown: boolean){
    drawdown = !drawdown
  }

  getthroughcategory(under: string){    
    this.specialcategory = []
    this.questions.forEach((element) => {
      if(element.section == under || element.section == 'all'){
        this.specialcategory.push(element)
      }
    });
    return this.specialcategory
  }

  getspeccategory(){ 
    return this.getthroughcategory(this.dept)
  }

  getsearchresults(){
    this.allresults = []
    this.searchresults = []
    this.questions.forEach((element) => {
      if(element.section == this.dept || element.section == 'all'){
        this.allresults.push(element)
      }
    });
    this.allresults.forEach(element => {
      element.forEach((top: string) => {
        if(top == this.searchquery){
          this.searchresults.push({result:top})
        }
      })
    });
    return this.searchresults
  }
}
