import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestquestionsService } from '../testquestions.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  gettopic(){
    return this.route.snapshot.queryParamMap.get('topic');
  }


  constructor(private route: ActivatedRoute,public que:TestquestionsService) {}

  ngOnInit(): void {
  }

  score = 0
  timesec = 0o0
  timemin = 5
  current = -1
  iscompleted = false
  questionlength = 0
  iscorrect = false

  
  final = Array()

  answers = ["","","","","",""]

  async timer(){
    setInterval(()=>{
      if(this.timesec == 0 && this.timemin > 0){
        this.timesec = 60
        this.timemin--
      }
      if(this.timemin == 0 && this.timesec == 0){
        this.current = 6
      }
      this.timesec--
    },1000)
  }

  getprevquestion(){
    if(this.current > 0){
      this.current--
      this.score--
    }
    else{
      this.current = 0
    }
  }

  startquiz(){
    this.current++
    this.timer()
  }

  getquestionlength():number{
    
    this.que.getcurrenttestquestions(this.gettopic()).forEach(
      member=>{
        this.questionlength = member.questions.lenght
    })
    return this.questionlength
  }

  getnextquestion(question: string,chosenans: string,actualans: string){
    if(this.current < 6){
      if(chosenans == actualans){
        this.iscorrect = true
        this.score++
      }
      else{
        this.iscorrect = false
      }
      this.final[this.current] = {ques:question,chosenans:chosenans,actual:actualans,scorrect:this.iscorrect}
      this.current++
    }
  }

  getque(){
    return this.que.getcurrenttestquestions(this.gettopic())
  }

}
