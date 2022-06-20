import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { MainComponent } from './pages/main/main.component';
import { PaymentComponent } from './pages/payment/payment.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/vacxin',
    pathMatch: 'full',
  },
  {
    path: 'vacxin',
    component: MainComponent,
  },
  {
    path: 'vacxin/:id',
    component: DetailComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
];
