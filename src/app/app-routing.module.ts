import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CompanyComponent} from './company/company.component';
import {CarComponent} from './car/car.component';
import {ModelComponent} from './model/model.component';
import {PriceComponent} from './price/price.component';
import { ClientsComponent } from './company/clients/clients.component';
import { NetworkingComponent } from './company/networking/networking.component';
import { AboutComponent } from './car/about/about.component';
import { ReviewsComponent } from './car/reviews/reviews.component';
import {TopComponent} from './model/top/top.component';
import {BaseComponent} from './model/base/base.component';
import {CalcComponent} from './price/calc/calc.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'company',
    component: CompanyComponent, children: [
      {
        path: 'clients',
        component: ClientsComponent
      },
      {
        path: 'networking',
        component: NetworkingComponent
      }
    ]
  },
  {
    path: 'car',
    component: CarComponent, children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'reviews',
        component: ReviewsComponent
      }
    ]
  },
  {
    path: 'model',
    component: ModelComponent, children: [
      {
        path: 'top',
        component: TopComponent
      },
      {
        path: 'base',
        component: BaseComponent
      }
    ]
  },
  {
    path: 'price',
    component: PriceComponent, children: [
      {
        path: 'calc',
        component: CalcComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
