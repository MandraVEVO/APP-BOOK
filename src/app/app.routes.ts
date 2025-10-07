import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'header',
    loadComponent: () => import('./pages/shared/header/header.component').then( m => m.HeaderComponent)
  },
  {
    path: 'book-detail',
    loadComponent: () => import('./book-detail/book-detail.page').then( m => m.BookDetailPage)
  },
];
