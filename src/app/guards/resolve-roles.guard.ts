import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResolveRolesGuard implements Resolve<string[]> {
  resolve(route: ActivatedRouteSnapshot): Observable<string[]> {
    return timer(1000).pipe(mapTo(route.data.permissions.only));
  }
}
