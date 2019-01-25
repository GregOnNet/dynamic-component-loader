import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadMeLaterRoutingModule } from './load-me-later-routing.module';
import { StartMeUpComponent } from './start-me-up/start-me-up.component';
import { LoadMeLaterComponent } from './load-me-later.component';

@NgModule({
  declarations: [StartMeUpComponent, LoadMeLaterComponent],
  imports: [
    CommonModule,
    LoadMeLaterRoutingModule
  ]
})
export class LoadMeLaterModule { }
