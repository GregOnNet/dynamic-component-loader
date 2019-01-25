import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartMeUpComponent } from './start-me-up/start-me-up.component';

const routes: Routes = [
  {
    path: '',
    component: StartMeUpComponent
    // outlet: 'some-outlet'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadMeLaterRoutingModule {}
