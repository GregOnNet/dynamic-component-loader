import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { IsAuthenticatedGuard } from './is-authenticated.guard';

const routes: Route[] = [
  {
    path: 'load-me-later',
    loadChildren: './load-me-later/load-me-later.module#LoadMeLaterModule',
    canActivate: [IsAuthenticatedGuard],
    data: {
      permissions: {
        only: ['administrator', 'server-operator']
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
