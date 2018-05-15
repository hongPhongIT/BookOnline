import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Book } from './model/book';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class BookService {

  private BooksUrl = 'https://5af5067f04604e0014ea73ac.mockapi.io/BookStore';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getBooks (): Observable<Book[]> {
    return this.http.get<Book[]>(this.BooksUrl)
      .pipe(
        tap(books => this.log(`fetched books`)),
        catchError(this.handleError('getBook', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getBookNo404<Data>(id: number): Observable<Book> {
    const url = `${this.BooksUrl}/?id=${id}`;
    return this.http.get<Book[]>(url)
      .pipe(
        map(books => books[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} book id=${id}`);
        }),
        catchError(this.handleError<Book>(`getBook id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getBook(id: number): Observable<Book> {
    const url = `${this.BooksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      tap(_ => this.log(`fetched book id=${id}`)),
      catchError(this.handleError<Book>(`getBook id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  // searchHeroes(term: string): Observable<Book[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Book[]>(`${this.heroesUrl}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found heroes matching "${term}"`)),
  //     catchError(this.handleError<Book[]>('searchHeroes', []))
  //   );
  // }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addBook (book: Book): Observable<Book> {
    return this.http.post<Book>(this.BooksUrl, book, httpOptions).pipe(
      tap((book: Book) => this.log(`added book w/ id=${book.id}`)),
      catchError(this.handleError<Book>('addBook'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteBook (hero: Book | number): Observable<Book> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.BooksUrl}/${id}`;

    return this.http.delete<Book>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted book id=${id}`)),
      catchError(this.handleError<Book>('deleteBook'))
    );
  }

  /** PUT: update the hero on the server */
  updateBook (book: Book): Observable<any> {
    return this.http.put(this.BooksUrl, book, httpOptions).pipe(
      tap(_ => this.log(`updated book id=${book.id}`)),
      catchError(this.handleError<any>('updateBook'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {

  }
}

