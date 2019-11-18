import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  products: Product [];
  productSubscription: Subscription;
  monPanier: Product[] = [];

  constructor(private productService: ProductService,private router:Router,
    private panierService: PanierService) { }

  ngOnInit() {

    this.productSubscription=this.productService.getProduits().subscribe(
      (data)=>{
        this.products=data;
        console.log(data);
      }
    )
  }

  onDeleteProduit(id: string){
    this.productService.onDeleteProduit(id).subscribe(
      data=>this.ngOnInit(),
      error=>{
        console.log(error);
        }
      );

  }
  onAddToPanier(product: Product){
    this.panierService.onAddProduct(product);
  }

  onDeleteoPanier(product: Product){
    console.log(product);
    this.panierService.onDeleteProduct(product);
  }
  onGetAllPanier(){
    console.log(this.panierService.onGetAllProduct());
  }


ngOnDestroy(){
  this.productSubscription.unsubscribe();
}

}
