import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
    selector: 'home-component',
    templateUrl: 'login.component.html'
})
export class LoginComponent {

     error = '';

    constructor(private router: Router, private loginService: LoginService) {

    }

    CheckLogin(value: any) {

        console.log(value);
        if (   this.loginService.login(value.username ,value.password  ) ) {
            // this.loginService.setLogin(true);
            this.router.navigate(['/']);

        } else {
           // login failed
           this.error = 'Email or password is incorrect';
           this.loginService.loginChange(false);
        }

    }
}
