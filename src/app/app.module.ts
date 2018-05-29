import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './admin/book/book.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BookDetailComponent } from './admin/book-detail/book-detail.component';
import { LoginComponent } from './user/login/login.component';

// import services
import {BookService} from './service/book.service';
import { LoginService } from './service/login.service';

// import guards
import { CheckLoginGuard } from './user/guard/check-login.guard';
import { CheckSaveBookFormGuard } from './user/guard/check-save-book-form.guard';
import { BookSearchComponent } from './admin/book-search/book-search.component';
import { CategoryComponent } from './user/category/category.component';
import { ItemComponent } from './user/item/item.component';
import { MenuBarComponent } from './user/menu-bar/menu-bar.component';
import { SearchItemComponent } from './user/search-item/search-item.component';
import { BooksComponent } from './user/book/book.component';
import { DetailComponent } from './user/detail/detail.component';
import { FooterComponent } from './user/footer/footer.component';
import { HomeComponent } from './user/home/home.component';
import { LoginFormComponent } from './user/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DashboardComponent,
    BookDetailComponent,
    LoginComponent,
    BookSearchComponent,
    CategoryComponent,
    ItemComponent,
    MenuBarComponent,
    SearchItemComponent,
    BooksComponent,
    DetailComponent,
    FooterComponent,
    HomeComponent,
    LoginFormComponent
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
