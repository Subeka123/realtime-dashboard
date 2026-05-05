import { Routes } from '@angular/router';
export const routes: Routes = [
   {
  path: 'dashboard',
  loadComponent: () =>
    import('./components/dashboard/dashboard').then(m => m.DashboardComponent)
}
];
