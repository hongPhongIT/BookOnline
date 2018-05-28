import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-front',
  templateUrl: './book-front.component.html',
  styleUrls: ['./book-front.component.css']
})
export class BookFrontComponent implements OnInit {
  books: Book[];
  itemsPerPage = 8;
  totalItems = 100;
  page = 1;
  p: number = 1;
  previousPage = 1;

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

}
