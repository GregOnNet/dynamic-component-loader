import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        outlet: 'load-me-later'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadMeLaterRoutingModule {}
