import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { BookDetailComponent } from 'src/app/admin/book-detail/book-detail.component';

@Injectable()
export class CheckSaveBookFormGuard implements CanDeactivate<BookDetailComponent> {

  canDeactivate(component: BookDetailComponent) {

    if ( confirm('Are you sure to leave without saving data')   ) {
        return true;
      }

     return false;

    }

}
