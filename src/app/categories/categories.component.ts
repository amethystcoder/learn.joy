import { Component, OnDestroy, OnInit } from '@angular/core'
import allCategories from '../categories.json'
import allquestions from '../allquestions.json'
import { allquestion } from '../testquestions.service'
import { UsergetputService } from '../usergetput.service'

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

export class CategoriesComponent implements OnInit/* ,OnDestroy */ {

  constructor(private usergetputservice:UsergetputService) { }

  ngOnInit(): void {
    this.dept = this.usergetputservice.getstudentdept()
    console.log(this.dept)
    this.usergetputservice.is_login_otherwise_logout()
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

  categories:allcategories[] = allCategories
  specialcategory = Array()
  questions:allquestion[] = allquestions
  searchquery = ""
  allresults = Array()
  searchresults = Array()

  dept = ''

  
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
