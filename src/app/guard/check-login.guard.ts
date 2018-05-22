import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../login.service';


@Injectable()
export class CheckLoginGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) {

    }

    canActivate() {

         /*const status = this.loginService.isLogged();
        if (status === false) {

          alert('You don\'t have permission access to this page');
          // start a new navigation to redirect to login page
          this.router.navigate(['/login']);
          // abort current navigation
          return false;
          return status;
        }*/

        if (localStorage.getItem('currentUser')) {
          // logged in so return true
          return true;
         }
         alert('You don\'t have permission access to this page');
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}
