import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFrontComponent } from './book-front.component';

describe('BookFrontComponent', () => {
  let component: BookFrontComponent;
  let fixture: ComponentFixture<BookFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
