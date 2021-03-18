import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
})
export class BsNavbarComponent implements OnInit {
  user$: Observable<firebase.User>;
  // user$: Observable<any> = from([]);
  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    this.user$ = this.auth.user$;
  }

  logout() {
    this.auth.logout();
  }
}
