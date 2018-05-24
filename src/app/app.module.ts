import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { LoginComponent } from './login/login.component';

// import services
import {BookService} from './book.service';
import { LoginService } from './login.service';

// import guards
import { CheckLoginGuard } from './guard/check-login.guard';
import { CheckSaveBookFormGuard } from './guard/check-save-book-form.guard';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DashboardComponent,
    BookDetailComponent,
    LoginComponent,
    BookSearchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [BookService , LoginService, CheckLoginGuard, CheckSaveBookFormGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
