import { Component } from '@angular/core';
import { Donut } from '../model/donut';
import { DonutService } from '../donut.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donuts',
  standalone: false,

  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css',
})
export class DonutsComponent {
  donuts: Donut[] = [];

  constructor(private donutService: DonutService, private route: Router) {
    donutService.getDonutList().subscribe({
      next: (donuts: any) => (this.donuts = donuts.results),
      error: (error) => {
        console.error(error);
        this.route.navigate(['not-found']);
      },
    });
  }
}
