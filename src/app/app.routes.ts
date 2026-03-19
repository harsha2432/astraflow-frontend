import { Routes } from '@angular/router';
import { LoginComponent }
  from './pages/login/login.component';
import { SignupComponent }
  from './pages/signup/signup.component';
import { DashboardComponent }
  from './pages/dashboard/dashboard.component';
import { BirthChartComponent }
  from './components/birth-chart/birth-chart.component';
import { DailyForecastComponent }
  from './components/daily-forecast/daily-forecast.component';

export const routes: Routes = [
  { path: '',         redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',    component: LoginComponent },
  { path: 'signup',   component: SignupComponent },
  { path: 'dashboard',component: DashboardComponent },
  { path: 'chart',    component: BirthChartComponent },
  { path: 'forecast', component: DailyForecastComponent },
  { path: '**',       redirectTo: '/login' }
];