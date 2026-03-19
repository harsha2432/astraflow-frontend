import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  name = '';
  email = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  onSignup() {
    // Temporary — just navigate to chart for now
    // Real registration comes in Day 8
    if (this.name && this.email && this.password) {
      this.router.navigate(['/chart']);
    } else {
      this.error = 'Please fill in all fields';
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}