import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FamousPeopleC, FamousPeopleT } from './model/FamousPeople';

@Injectable({
  providedIn: 'root',
})
export class CsHallOfFameService {
  apiUrl: string =
    'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json';

  constructor(private http: HttpClient) {}

  getHallOfFameDevC(): Observable<FamousPeopleC[]> {
    return this.http.get<FamousPeopleC[]>(this.apiUrl);
  }

  getHallOfFameDevT(): Observable<FamousPeopleT[]> {
    return this.http.get<FamousPeopleT[]>('this.apiUrl');
  }
}
