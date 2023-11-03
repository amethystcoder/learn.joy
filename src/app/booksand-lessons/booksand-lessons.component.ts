import { Component, OnDestroy, OnInit } from '@angular/core';
import allbooks from '../allbooks.json'
import { UsergetputService } from '../usergetput.service';

interface allbook{
  name:string,
  duration:string,
  type:string,
  category:string
}

@Component({
  selector: 'app-booksand-lessons',
  templateUrl: './booksand-lessons.component.html',
  styleUrls: ['./booksand-lessons.component.css']
})
export class BooksandLessonsComponent implements OnInit/* ,OnDestroy */ {

  constructor(private usergetputservice:UsergetputService) { }

  ngOnInit(): void {
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

  books:allbook[] = allbooks
  booksgotten = Array()

  getbooks(){
    this.booksgotten = Array()
    let limit = 0
    while (limit < 8){
      this.booksgotten.push(this.books[limit])
      limit++
    }
    return this.booksgotten
  }
}
