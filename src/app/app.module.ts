import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { CarComponent } from './car/car.component';
import { ModelComponent } from './model/model.component';
import { PriceComponent } from './price/price.component';
import { ClientsComponent } from './company/clients/clients.component';
import { NetworkingComponent } from './company/networking/networking.component';
import { AboutComponent } from './car/about/about.component';
import { ReviewsComponent } from './car/reviews/reviews.component';
import { BaseComponent } from './model/base/base.component';
import { TopComponent } from './model/top/top.component';
import { CalcComponent } from './price/calc/calc.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    CarComponent,
    ModelComponent,
    PriceComponent,
    ClientsComponent,
    NetworkingComponent,
    AboutComponent,
    ReviewsComponent,
    BaseComponent,
    TopComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
