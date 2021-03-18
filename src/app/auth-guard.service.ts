import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route, state: RouterStateSnapshot) {
    return this.auth.user$.pipe(
      map((user) => {
        if (!user) {
          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url,
            },
          });
          return false;
        }
        return true;
      })
    );
  }
}
