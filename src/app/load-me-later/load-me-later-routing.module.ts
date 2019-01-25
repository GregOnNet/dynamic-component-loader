import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveRolesGuard } from '../guards/resolve-roles.guard';
import { LoadMeLaterComponent } from './load-me-later.component';
import { StartMeUpComponent } from './start-me-up/start-me-up.component';

const routes: Routes = [
  {
    path: '',
    component: LoadMeLaterComponent,
    children: [
      {
        path: '',
        component: StartMeUpComponent,
        outlet: 'load-me-later',
        resolve: {
          resolvedRoles: ResolveRolesGuard
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ResolveRolesGuard]
})
export class LoadMeLaterRoutingModule {}
