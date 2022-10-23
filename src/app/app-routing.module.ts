import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AcheivementsComponent } from './acheivements/acheivements.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { BooksandLessonsComponent } from './booksand-lessons/booksand-lessons.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SpecificcategoryComponent } from './specificcategory/specificcategory.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'booksandlessons',component:BooksandLessonsComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'acheivements',component:AcheivementsComponent},
  {path:'account',component:AccountComponent},
  {path:'assignments',component:AssignmentsComponent},
  {path:'test',component:TestComponent},
  {path:'specificcategory',component:SpecificcategoryComponent},
  {path:'loginorup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
