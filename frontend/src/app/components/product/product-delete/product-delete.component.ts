import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    name: '',
    price: 0,
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id + '').subscribe(() => {
      this.productService.showMessage(
        `Produto '${this.product.name}' excluído com sucesso!`
      );
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
