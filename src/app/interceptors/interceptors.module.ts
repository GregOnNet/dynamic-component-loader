import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PokeInterceptor } from './poke.interceptor.service';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PokeInterceptor,
      multi: true
    }
  ]
})
export class InterceptorsModule {}
