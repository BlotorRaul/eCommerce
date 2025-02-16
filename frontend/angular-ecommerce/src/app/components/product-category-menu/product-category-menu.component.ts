import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ProductCategory } from '../../commmon/product-category';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.css'
})
export class ProductCategoryMenuComponent implements OnInit {


productCategories: ProductCategory[] = [];

constructor(private productService: ProductService){}

ngOnInit(): void {
  this.listProductCategories();
}

listProductCategories(){
  this.productService.getProductCategories().subscribe(
    data =>{
      console.log('Product Categories =' + JSON.stringify(data));
      this.productCategories = data;
    }
  );
}

}
