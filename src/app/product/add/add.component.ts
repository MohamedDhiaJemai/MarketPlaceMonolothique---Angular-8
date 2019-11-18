import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  product: Product= new Product();


  constructor(private productService: ProductService, private router:Router) {

   }

  onAddProduit(){
    this.productService.addProduit(this.product).subscribe(
      data=>this.router.navigate(['product/list']),
      error=>console.log(error)
      );
    
  }
  ngOnInit() {
  }

}
