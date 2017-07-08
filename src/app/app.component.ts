import { Component, OnInit } from '@angular/core';
import { SignupService } from './core';
import { FormControl, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

declare let ga: Function;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'The Chicago Boulevards Project!';
  email: string;
  emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
  isEmailSuccess: boolean;

  constructor(private signupService: SignupService, public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
   }

  public submitEmail(): void {
    this.signupService.AddEmail(this.email)
      .subscribe(
        success => this.isEmailSuccess = true,
        error => console.log(error)
      );
  }

}
