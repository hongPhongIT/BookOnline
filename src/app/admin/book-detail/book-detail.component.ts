import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import {Book} from 'src/app/model/book';
import {BookService} from 'src/app/service/book.service';
import { Subscription } from 'rxjs';

import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'ng-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {

  book= new  Book();
  public _id: number;
  public subscription: Subscription;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit(): void {
    //   this.subscription = this.route.params.subscribe(params => {
    //     this._id = params['id'];
    // });
    this.route.params.subscribe(params1 => {
      console.log(params1);
      console.log(+params1['id']);
      const id = params1['id'];
      if ( id ) {
        this.route.paramMap
        .pipe(switchMap((params: ParamMap) => this.bookService.getBook(+params.get('id')))
        ).subscribe(book => this.book = book);
        // console.log(this.book.content);
      }

   });
  }
  
  goBack(): void {
    this.location.back();
  }

  saveBook(isValid: boolean): void {
    if (isValid) {
      this.bookService.addBook(this.book).toPromise()
      .then(() => this.goBack());
    }

  }

  updateBook(isValid: boolean): void {
    if (isValid) {
      this.bookService.updateBook(this.book).subscribe(response => {
        if (response) {
            alert('Save success');
            this.goBack();
        }
      });
    }
  }

  onSubmit(value: any) {
    console.log(value);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }
}
