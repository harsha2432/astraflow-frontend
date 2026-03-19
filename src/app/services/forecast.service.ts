import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ForecastRequest {
  userName: string;
  sunSign: string;
  moonSign: string;
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getDailyForecast(data: ForecastRequest): Observable<string> {
    return this.http.post(
      `${this.apiUrl}/forecast/daily`,
      data,
      { responseType: 'text' }
    );
  }
}