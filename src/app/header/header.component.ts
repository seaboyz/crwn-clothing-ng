import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$ = this.authService.user;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  signOut() {
    this.authService.logout();
  }
}
