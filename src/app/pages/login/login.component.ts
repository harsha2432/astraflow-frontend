import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  onLogin() {
    // Temporary — just navigate to chart for now
    // Real JWT login comes in Day 8
    if (this.email && this.password) {
      this.router.navigate(['/chart']);
    } else {
      this.error = 'Please enter email and password';
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}