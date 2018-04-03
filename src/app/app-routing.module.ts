import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyComponent} from './company/company.component';
import {CarComponent} from './car/car.component';
import {ModelComponent} from './model/model.component';
import {PriceComponent} from './price/price.component';

const routes: Routes = [
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'car',
    component: CarComponent
  },
  {
    path: 'model',
    component: ModelComponent
  },
  {
    path: 'price',
    component: PriceComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
