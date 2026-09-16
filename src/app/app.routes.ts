import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home') },
  { path: 'seguridad', loadComponent: () => import('./security') },
  { path: '**', redirectTo: '' },
];
