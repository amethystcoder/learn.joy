import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TestquestionsService } from '../testquestions.service';
import { UsergetputService } from '../usergetput.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit/* ,OnDestroy */ {

  gettopic(){
    return this.route.snapshot.queryParamMap.get('topic');
  }


  constructor(private route: ActivatedRoute,public que:TestquestionsService,
    private router:Router, private usergetputservice:UsergetputService) {}

  ngOnInit(): void {
    this.usergetputservice.is_login_otherwise_logout()
    this.id = this.usergetputservice.getstudentid()
    console.log(this.id)
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

  id = ""
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

  evaluate(value:string){
    let parser = new DOMParser()
    console.log(parser.parseFromString(value, "text/html"))
    return parser.parseFromString(value, "text/html").body.innerHTML
  }

  getque(){
    return this.que.getcurrenttestquestions(this.gettopic())
  }

  complete_quiz(){
    this.usergetputservice.setscore(
      {
        topic_name:this.gettopic(),
        topic_subject:this.que.get_topic_subject(this.gettopic()),
        score:this.score
      },this.id
        ).subscribe((res)=>{
          let storage = localStorage
          let parsed_results = JSON.parse(storage.getItem("result")!)
          parsed_results.push(res)
          storage.setItem("result",JSON.stringify(parsed_results))
        })
    this.router.navigateByUrl("/categories")
  }

}
