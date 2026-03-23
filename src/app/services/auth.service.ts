import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth';

  // Store in memory (NOT localStorage)
  private token: string | null = null;
  private userId: number | null = null;
  private userEmail: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  // ── REGISTER ──────────────────────────────
  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, {
      name, email, password
    });
  }

  // ── LOGIN ─────────────────────────────────
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, {
      email, password
    }).pipe(
      tap((response: any) => {
        this.token     = response.token;
        this.userId    = response.userId;
        this.userEmail = response.email;
        console.log('Token saved for:', this.userEmail);
      })
    );
  }

  // ── LOGOUT ────────────────────────────────
  logout(): void {
    this.token     = null;
    this.userId    = null;
    this.userEmail = null;
    this.router.navigate(['/login']);
  }

  // ── GETTERS ───────────────────────────────
  getToken(): string | null {
    return this.token;
  }

  getUserId(): number | null {
    return this.userId;
  }

  getUserEmail(): string | null {
    return this.userEmail;
  }

  isLoggedIn(): boolean {
    return this.token !== null;
  }
}