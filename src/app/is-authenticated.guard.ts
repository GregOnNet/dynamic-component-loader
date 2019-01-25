import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {
  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean {
    return window.confirm(
      `Sure to navigate? Allowed Roles are: ${_next.data.permissions.only.join(
        ', '
      )}`
    );
  }
}
