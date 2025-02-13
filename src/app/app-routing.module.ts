import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutsComponent } from './donuts/donuts.component';
import { FamousPeopleComponent } from './FamousPeople/FamousPeople.component';
import { DonutItemComponent } from './donut-item/donut-item.component';
import { FamousPersonRowComponent } from './famous-person-row/famous-person-row.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: DonutsComponent },
  { path: 'donuts', component: DonutsComponent },
  { path: 'famouspeople', component: FamousPeopleComponent },
  {
    path: 'famouspeople/person',
    component: FamousPersonRowComponent,
  },
  { path: 'donutItem/:id', component: DonutItemComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: 'not-found', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
