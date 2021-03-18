import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  db: any;
  constructor(private afs: AngularFirestore) {}
  //need review
  create(product) {
    this.afs.collection('/products').snapshotChanges(product);
  }
  getAll() {
    return this.afs
      .collection('/products')
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
  get(productId) {
    return this.afs.collection('/products/' + productId).snapshotChanges();
  }
}
