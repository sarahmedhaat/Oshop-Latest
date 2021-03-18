import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AppUser } from './app-user';
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private afs: AngularFirestore) {}

  save(user: firebase.User) {
    this.afs.doc('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
    });
  }

  get(uid: string): Observable<AppUser> {
    return this.afs.doc<AppUser>('/users/' + uid).valueChanges();
  }
}
