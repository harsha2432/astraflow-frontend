import { Routes } from '@angular/router';
import { BirthChartComponent } from './components/birth-chart/birth-chart.component';

export const routes: Routes = [
  { path: '', redirectTo: '/chart', pathMatch: 'full' },
  { path: 'chart', component: BirthChartComponent },
  { path: '**', redirectTo: '/chart' }
];