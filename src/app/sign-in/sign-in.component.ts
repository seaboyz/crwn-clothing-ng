import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  email = '';
  password = '';
  user$ = this.authService.user;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      if (user) {
        this.email = '';
        this.password = '';
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit(): void {
    this.authService.login(this.email, this.password);
  }

  signInWithGoogle() {
    try {
      this.authService.signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  }
}
