import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donut } from './model/donut';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  apiUrl: string = 'https://grandcircusco.github.io/demo-apis/donuts.json';
  constructor(public http: HttpClient) {}

  getDonutList(): Observable<Donut[]> {
    return this.http.get<Donut[]>(this.apiUrl);
  }
}
