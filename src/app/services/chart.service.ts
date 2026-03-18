import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface BirthChartRequest {
  userName: string;
  sunSign: string;
  moonSign: string;
  risingSign: string;
  dominantPlanet: string;
  signatureAspect: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  generateBirthChart(data: BirthChartRequest): Observable<string> {
    return this.http.post(
      `${this.apiUrl}/birthchart/generate`,
      data,
      { responseType: 'text' }
    );
  }

  testAi(): Observable<string> {
    return this.http.get(
      `${this.apiUrl}/birthchart/test-ai`,
      { responseType: 'text' }
    );
  }
}