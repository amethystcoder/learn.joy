import { Injectable } from '@angular/core';
import allquestions from './allquestions.json';
import { all } from 'backend/datamodel/backroutings/userroutes';

export interface allquestion{
  subject:string,
  section:string,
  isopen: boolean,
  topics:topicquestions[]
}

export interface topicquestions{
  topic:string,
  questions:questions[]
}

export interface questions{
  question:string,
  opt1:string,
  opt2:string,
  opt3:string,
  opt4:string,
  ans:string
}

export interface resultsdata{
  year:number,
  month:string,
  subject:string,
  topic:string,
  score:number
}

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

  getthroughsubjectname(subjectname:string | null) : allquestion[]{
    let result:allquestion[] = []
    allquestions.forEach((question)=>{
      if (question.subject == subjectname){
        result.push(question)
      }
    })
    return result
  }

  get_topic_subject(topic:string|null):string|null{
    for (let index = 0; index < allquestions.length; index++) {
      for (let inner_index = 0; inner_index < allquestions[index].topics.length; inner_index++) {
        if(allquestions[index].topics[inner_index].topic === topic){
          return allquestions[index].subject
        }
      }
    }
    return null
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
