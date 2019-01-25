import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadMeLaterRoutingModule } from './load-me-later-routing.module';
import { StartMeUpComponent } from './start-me-up/start-me-up.component';
import { LoadMeLaterComponent } from './load-me-later.component';
import { SecondMemberComponent } from './second-member/second-member.component';

@NgModule({
  declarations: [StartMeUpComponent, LoadMeLaterComponent, SecondMemberComponent],
  imports: [
    CommonModule,
    LoadMeLaterRoutingModule
  ]
})
export class LoadMeLaterModule { }
