import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { LoginComponent } from './login/login.component';
import { CheckLoginGuard } from './guard/check-login.guard';
import { CheckSaveBookFormGuard } from './guard/check-save-book-form.guard';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'book-detail/:id', component: BookDetailComponent, canActivate: [ CheckLoginGuard ] , canDeactivate : [CheckSaveBookFormGuard] },
  { path: 'book', component: BookComponent, canActivate: [CheckLoginGuard] },
  { path: 'book-detail', component: BookDetailComponent, canActivate: [ CheckLoginGuard ],  canDeactivate : [CheckSaveBookFormGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
