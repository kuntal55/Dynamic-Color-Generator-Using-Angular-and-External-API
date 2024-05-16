import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Abc } from '../interfaces/abc';
@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private http: HttpClient) { }

  getRandomColor(): Observable<Abc> {
    const url = "https://random-data-api.com/api/color/random_color";
    return this.http.get<Abc>(url);
  }
}
