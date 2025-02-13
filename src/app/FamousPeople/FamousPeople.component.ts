import { Component } from '@angular/core';
import { CsHallOfFameService } from '../FamousPeopleservice';
import { FamousPeopleC, FamousPeopleT } from '../model/FamousPeople';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-famous-people',
  standalone: false,

  templateUrl: './FamousPeople.component.html',
  styleUrl: './FamousPeople.component.css',
})
export class FamousPeopleComponent {
  completedDevs: FamousPeopleC[] = [];
  TinyDevs: FamousPeopleT[] = [];
  constructor(private hallOfFameService: CsHallOfFameService) {
    this.hallOfFameService.getHallOfFameDevC().subscribe({
      next: (devs: any) => (this.completedDevs = devs.complete),
      error: (error) => console.log(error), 
    });
  }
}
