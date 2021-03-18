import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})


export class ProductFormComponent implements OnInit {
  categories$: Observable<{ id: string; name: string }[]>;
  product: any = {};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private ProductService: ProductService
  ) {
    let id = this.route.snapshot.paramMap.get('/id');
    if (id)
      this.ProductService.get(id).pipe(take(1))
      .subscribe(p => this.product = p)
  }
  save(product) {
    this.ProductService.create(product);
    this.router.navigate(['/admin/products']);
  }
  ngOnInit() {
    this.categories$ = this.categoryService.getCategories();
  }
}
