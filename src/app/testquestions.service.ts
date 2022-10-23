import { Injectable } from '@angular/core';
import { allquestion } from './categories/categories.component';
import allquestions from './allquestions.json';

@Injectable({
  providedIn: 'root'
})
export class TestquestionsService {

  constructor() { }

  questions:allquestion[] = allquestions
  thistestquestions = Array()
  currenttestquestions = Array()

  getthroughcategory(){    
    this.thistestquestions = []
    this.questions.forEach((element) => {
        this.thistestquestions.push(element)
    });
    return this.thistestquestions
  }

  getcurrenttestquestions(topic:string | null){
    this.currenttestquestions = []
    this.getthroughcategory().forEach((member)=>{
      member.topics.forEach((element: { topic: string | null; }) => {
        if (element.topic == topic){
          this.currenttestquestions.push(element);
        }
      });
    })
    return this.currenttestquestions
  }
}
