import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://restcountries.com/v3.1/capital/'

  constructor(private http: HttpClient) { }
  
  getData(capital: string): Observable<any> {
    const url = this.baseUrl + capital;
    return this.http.get<any>(url);
  }
}



