import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-birth-chart',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './birth-chart.component.html',
  styleUrl: './birth-chart.component.css'
})
export class BirthChartComponent {

  birthData = {
    userName: '',
    sunSign: '',
    moonSign: '',
    risingSign: '',
    dominantPlanet: '',
    signatureAspect: ''
  };

  zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer',
    'Leo', 'Virgo', 'Libra', 'Scorpio',
    'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  loading = false;
  result = '';
  error = '';

  constructor(private chartService: ChartService) {}

  onSubmit() {
    this.loading = true;
    this.result = '';
    this.error = '';

    this.chartService.generateBirthChart(this.birthData).subscribe({
      next: (response) => {
        this.result = response;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Could not generate reading. Is Spring Boot running?';
        this.loading = false;
        console.error(err);
      }
    });
  }

  isFormValid(): boolean {
    return this.birthData.userName.trim() !== '' &&
           this.birthData.sunSign !== '' &&
           this.birthData.moonSign !== '';
  }
}