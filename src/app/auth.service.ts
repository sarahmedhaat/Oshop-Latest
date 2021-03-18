import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// tslint:disable-next-line:quotemark
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public user$: Observable<firebase.User>;
  authState: Observable<firebase.User>;
  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user$ = afAuth.authState;
  }
  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth
      .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this.router.navigateByUrl('/');
      });
  }
  // tslint:disable-next-line:whitespace
  logout() {
    this.afAuth.signOut();
  }
}
