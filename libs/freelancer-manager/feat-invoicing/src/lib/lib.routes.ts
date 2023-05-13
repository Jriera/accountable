import { Route } from '@angular/router';
import {CreateInvoiceSmartComponent} from './smart-components/create-invoice/create-invoice.smart-component';
import {EditInvoiceSmartComponent} from './smart-components/edit-invoice/edit-invoice.smart-component';
import {InvoiceOverviewSmartComponent} from './smart-components/invoice-overview/invoice-overview.smart-component';

export const freelancerManagerFeatInvoicingRoutes: Route[] = [
  { path: '',
    redirectTo:'invoices',
    pathMatch:'full'
  },
  {
    path: 'invoices',
    component: InvoiceOverviewSmartComponent
  },
  {
    path: 'invoice/create',
    component:CreateInvoiceSmartComponent
  },
  {
    path: 'invoice/:id',
    component:EditInvoiceSmartComponent
  }

];
