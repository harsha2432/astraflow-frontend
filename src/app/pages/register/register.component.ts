import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name     = '';
  email    = '';
  password = '';
  errorMessage  = '';
  successMessage = '';
  loading  = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onRegister(): void {
    this.loading = true;
    this.errorMessage  = '';
    this.successMessage = '';

    // Basic validation
    if (!this.name || !this.email || !this.password) {
      this.errorMessage = 'All fields are required';
      this.loading = false;
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters';
      this.loading = false;
      return;
    }

    this.authService.register(this.name, this.email, this.password).subscribe({
      next: (response) => {
        console.log('Registration success:', response);
        this.successMessage = 'Account created! Redirecting to login...';
        this.loading = false;

        // Redirect to login after 2 seconds
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Registration failed';
        this.loading = false;
      }
    });
  }
}