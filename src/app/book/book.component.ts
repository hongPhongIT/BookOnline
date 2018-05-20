import { Component, OnInit } from '@angular/core';

import { Book } from '../model/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  itemsPerPage = 10;
  totalItems = 100;
  page = 1;
  p: number = 1;
  previousPage = 1;
  books: Book[];

  constructor(private BookService: BookService) { }

  ngOnInit() {
    this.loadData();
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData();
    }
  }

  loadData() {
    const size = this.itemsPerPage;
    this.BookService.getBooks(this.page, size).subscribe(books => this.books = books);
  }

  // getBooks(): void {
  //   this.BookService.getBooks()
  //     .subscribe(books => this.books = books);
  // }

  delete(book: Book): void {
    this.books = this.books.filter(h => h !== book);
    this.BookService.deleteBook(book).subscribe();
  }

}
