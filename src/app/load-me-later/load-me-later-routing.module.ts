import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveRolesGuard } from '../guards/resolve-roles.guard';
import { LoadMeLaterComponent } from './load-me-later.component';
import { SecondMemberComponent } from './second-member/second-member.component';
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
      },
      {
        path: '',
        component: SecondMemberComponent,
        outlet: 'load-me-later-2',
        resolve: {
          resolvedRoles: ResolveRolesGuard
        }
      }
    ]
  },
  {
    path: 'sample/:name/other',
    component: SecondMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ResolveRolesGuard]
})
export class LoadMeLaterRoutingModule {}
