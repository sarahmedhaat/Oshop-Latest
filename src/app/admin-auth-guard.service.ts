import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Observable, of } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class AdminAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private userService: UserService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    // return this.auth.user$
    //   .switchMap((user) => this.userService.get(user.uid))
    //   .map((appUser) => {
    //     console.log(appUser);
    //     // return appUser.isAdmin;
    //     return true;
    //   });
    return of(true);
  }
}
