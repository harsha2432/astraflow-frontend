import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  // This will come from the API in Day 12
  // For now using sample data
  userName = 'Cosmic Explorer';
  sunSign = 'Scorpio';
  moonSign = 'Pisces';
  risingSign = 'Libra';

  todayForecast = 'The cosmos are aligned in your favour today. ' +
    'Your intuition is especially sharp — trust it. ' +
    'A meaningful connection may surprise you. 🌙';

  constructor(private router: Router) {}

  goToChart() {
    this.router.navigate(['/chart']);
  }

  goToForecast() {
    this.router.navigate(['/forecast']);
  }
}