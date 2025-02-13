import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Donut } from '../model/donut';

@Component({
  selector: 'app-donut-item',
  standalone: false,

  templateUrl: './donut-item.component.html',
  styleUrl: './donut-item.component.css',
})
export class DonutItemComponent {
  donut?: Donut = undefined;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.http
        .get('https://grandcircusco.github.io/demo-apis/donuts/' + id + '.json')
        .subscribe({
          next: (value: any) => (this.donut = value),
          error: (error) => {
            console.error(error);
            this.router.navigate(['not-found']);
          },
        });
    });
  }
}
