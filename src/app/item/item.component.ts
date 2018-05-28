import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { BookService } from '../book.service';
import { Subscription } from 'rxjs';

import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  book = new Book();
  public _id: number;
  public subscription: Subscription;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
  
    this.route.params.subscribe(params1 => {
      console.log(params1);
      console.log(+params1['id']);
      const id = params1['id'];
      if (id) {
        this.route.paramMap
          .pipe(switchMap((params: ParamMap) => this.bookService.getBook(+params.get('id')))
          ).subscribe(book => this.book = book);
      }

    });
  }

}
