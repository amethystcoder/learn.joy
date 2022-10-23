import { Component, OnInit } from '@angular/core';
import allbooks from '../allbooks.json'

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
export class BooksandLessonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
