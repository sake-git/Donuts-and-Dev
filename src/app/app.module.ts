import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { FamousPeopleComponent } from './FamousPeople/FamousPeople.component';
import { provideHttpClient } from '@angular/common/http';
import { DonutItemComponent } from './donut-item/donut-item.component';
import { FamousPersonRowComponent } from './famous-person-row/famous-person-row.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, DonutsComponent, FamousPeopleComponent, DonutItemComponent, FamousPersonRowComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
