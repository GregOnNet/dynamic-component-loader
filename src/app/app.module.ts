import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartUpService } from './config/start-up-config.service';
import {
  DynamicComponentLoaderModule,
  DynamicComponentManifest
} from './dynamic-component-loader/dynamic-component-loader.module';
import { DialogComponent } from './dynamic-modules/dialog/dialog.component';
import { DialogModule } from './dynamic-modules/dialog/dialog.module';
import { InterceptorsModule } from './interceptors/interceptors.module';

// This array defines which "componentId" maps to which lazy-loaded module.
const manifests: DynamicComponentManifest[] = [
  {
    componentId: 'message',
    path: 'dynamic-message', // some globally-unique identifier, used internally by the router
    loadChildren: './dynamic-modules/message/message.module#MessageModule'
  },
  {
    componentId: 'dialog',
    path: 'dialog',
    loadChildren: './dynamic-modules/dialog/dialog.module#DialogModule'
  }
];

export function beforeStartFactory(startUp: StartUpService) {
  return () =>
    startUp
      .beforeStart()
      .toPromise()
      .then(message => console.info(message));
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DialogModule,
    HttpClientModule,

    MatDialogModule,
    NoopAnimationsModule,

    DynamicComponentLoaderModule.forRoot(manifests),
    InterceptorsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: beforeStartFactory,
      deps: [StartUpService]
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {}
