import { Component } from '@angular/core';
import { FamousPeopleC } from '../model/FamousPeople';

@Component({
  selector: 'app-famous-person-row',
  standalone: false,
  templateUrl: './famous-person-row.component.html',
  styleUrl: './famous-person-row.component.css',
})
export class FamousPersonRowComponent {
  person: FamousPeopleC = new FamousPeopleC();

  constructor() {
    this.person = history.state;
  }
}
