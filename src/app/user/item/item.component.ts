import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from 'src/app/model/book'
import { BookService } from 'src/app/service/book.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

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
