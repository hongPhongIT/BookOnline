import { Component, OnInit } from '@angular/core';

import { Book } from '../model/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[];

  constructor(private BookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.BookService.getBooks()
    .subscribe(books => this.books = books);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.BookService.addBook({ name } as Book)
      .subscribe(hero => {
        this.books.push(hero);
      });
  }

  delete(book: Book): void {
    this.books = this.books.filter(h => h !== book);
    this.BookService.deleteBook(book).subscribe();
  }

}
