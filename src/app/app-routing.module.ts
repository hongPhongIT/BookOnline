import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BookComponent } from './admin/book/book.component';
import { HomeComponent } from './user/home/home.component'
import { BookDetailComponent } from './admin/book-detail/book-detail.component';
import { LoginFormComponent } from './user/login-form/login-form.component';
import { CheckLoginGuard } from './user/guard/check-login.guard';
import { CheckSaveBookFormGuard } from './user/guard/check-save-book-form.guard';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'book-detail/:id', component: BookDetailComponent, canActivate: [ CheckLoginGuard ] , canDeactivate : [CheckSaveBookFormGuard] },
  { path: 'book', component: BookComponent, canActivate: [CheckLoginGuard] },
  { path: 'book-detail', component: BookDetailComponent, canActivate: [ CheckLoginGuard ],  canDeactivate : [CheckSaveBookFormGuard] },
  { path: 'login', component: LoginFormComponent },
  { path: 'product/books', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
