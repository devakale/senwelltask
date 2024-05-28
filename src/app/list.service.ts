import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/names';

  constructor(private http: HttpClient) {}

  getNames(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
