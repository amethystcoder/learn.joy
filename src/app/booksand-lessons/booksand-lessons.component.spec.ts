import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksandLessonsComponent } from './booksand-lessons.component';

describe('BooksandLessonsComponent', () => {
  let component: BooksandLessonsComponent;
  let fixture: ComponentFixture<BooksandLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksandLessonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksandLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
