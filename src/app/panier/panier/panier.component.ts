import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/panier.service';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  panier: Product[] = [];

  constructor(private panierService: PanierService) {

   }

  ngOnInit() {
    this.panier = this.panierService.onGetAllProduct();
    console.log(this.panier);
  }

  onDeleteoPanier(product: Product){

    this.panierService.onDeleteProduct(product);
    this.ngOnInit();
  }

}
