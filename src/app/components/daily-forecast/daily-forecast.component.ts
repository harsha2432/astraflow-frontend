import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ForecastService } from '../../services/forecast.service';

@Component({
  selector: 'app-daily-forecast',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './daily-forecast.component.html',
  styleUrl: './daily-forecast.component.css'
})
export class DailyForecastComponent implements OnInit {

  userName = '';
  sunSign  = '';
  moonSign = '';

  zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer',
    'Leo', 'Virgo', 'Libra', 'Scorpio',
    'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  forecast  = '';
  loading   = false;
  error     = '';
  today     = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  constructor(private forecastService: ForecastService) {}

  ngOnInit() {}

  getForecast() {
    if (!this.userName || !this.sunSign || !this.moonSign) {
      this.error = 'Please fill in all fields';
      return;
    }

    this.loading  = true;
    this.forecast = '';
    this.error    = '';

    this.forecastService.getDailyForecast({
      userName: this.userName,
      sunSign:  this.sunSign,
      moonSign: this.moonSign
    }).subscribe({
      next: (response) => {
        this.forecast = response;
        this.loading  = false;
      },
      error: (err) => {
        this.error   = 'Could not get forecast. Is Spring Boot running?';
        this.loading = false;
        console.error(err);
      }
    });
  }

  isFormValid(): boolean {
    return this.userName.trim() !== '' &&
           this.sunSign !== '' &&
           this.moonSign !== '';
  }

  // Parse forecast sections for display
  getForecastSections(): string[] {
    if (!this.forecast) return [];
    return this.forecast.split('\n').filter(line => line.trim() !== '');
  }
}