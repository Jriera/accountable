import { Route } from '@angular/router';
import { FreelancerManagerFeatShellComponent } from './freelancer-manager-feat-shell/freelancer-manager-feat-shell.component';

export const freelancerManagerFeatShellRoutes: Route[] = [
  {
    path: '',
    component: FreelancerManagerFeatShellComponent,
    children: [
      {
        path:'',
        redirectTo:'invoicing',
        pathMatch:'full'
      },
      {
        path:'invoicing',
        loadChildren: () => import('@accountable/freelancer-manager/feat-invoicing').then(m => m.freelancerManagerFeatInvoicingRoutes)
      },
      {
        path:'reporting',
        loadChildren: () => import('@accountable/freelancer-manager/feat-reporting').then(m => m.freelancerManagerFeatReportingRoutes)
      },
      {
        path:'unauthorized',
        loadChildren: () => import('@accountable/freelancer-manager/feat-auth').then(m => m.freelancerManagerFeatAuthRoutes)
      },
      ],
  },
];
