import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  firstname = '';
  lastname = '';
  email = '';
  password = '';
  confirmPassword = '';
  user$ = this.authService.user;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      if (user) {
        this.clearInputs();
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert("password don't match");
      return;
    }
    this.authService
      .signUp(this.email, this.password)
      .then((result) => console.log(result))
      .catch(console.log);
  }

  clearInputs() {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
