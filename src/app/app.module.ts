import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { BooksandLessonsComponent } from './booksand-lessons/booksand-lessons.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AcheivementsComponent } from './acheivements/acheivements.component';
import { TestComponent } from './test/test.component';
import { AccountComponent } from './account/account.component';
import { SpecificcategoryComponent } from './specificcategory/specificcategory.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    BooksandLessonsComponent,
    AssignmentsComponent,
    AcheivementsComponent,
    TestComponent,
    AccountComponent,
    SpecificcategoryComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
