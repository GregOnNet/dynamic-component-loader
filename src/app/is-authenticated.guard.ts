import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean {
    const decision = window.confirm(
      `Sure to navigate? Allowed Roles are: ${_next.data.permissions.only.join(
        ', '
      )}`
    );

    if (!decision) {
      // this._router.navigate(['main', 'admin', 2313]); // main/admin/2313;
      this._router.navigateByUrl('');
    }

    return decision;
  }
}
