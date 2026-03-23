import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  // Default → login
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },

  // Public routes
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },

  // 🔒 Protected routes
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component')
        .then(m => m.DashboardComponent),
    canActivate: [authGuard]   // ← Guard applied here
  },

  // Wildcard → redirect to login
  { 
    path: '**', 
    redirectTo: '/login' 
  }
];