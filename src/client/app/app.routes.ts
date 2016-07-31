import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { NewsRoutes } from './+news/index';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  },
  ...NewsRoutes,
  ...AboutRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
