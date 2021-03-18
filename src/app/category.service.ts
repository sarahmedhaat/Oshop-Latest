import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private afs: AngularFirestore) {}

  getCategories() {
    return this.afs
      .collection('/categories')
      .snapshotChanges()
      .pipe(
        map((items) => {
          return items.map((a) => {
            const data: any = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }
}
