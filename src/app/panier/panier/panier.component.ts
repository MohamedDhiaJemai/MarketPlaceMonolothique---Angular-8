import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/panier.service';
import { Product } from 'src/app/model/product.model';
import { Panier } from 'src/app/model/panier.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  panier: Product[] = [];
  quantityPanier:Panier[] =[];
  constructor(private panierService: PanierService) {

   }

  ngOnInit() {
    this.panier = this.panierService.onGetAllProduct();
    console.log(this.panier);
    this.quantityPanier = this.panierService.quantites;
    console.log(this.panierService.quantites)
  }

  onDeleteoPanier(product: Product){

    this.panierService.onDeleteProduct(product);
    this.ngOnInit();
  }

  onGetQuantity(id:string){
      console.log(id)
      return id;
    /*for(let i = 0;i<=this.quantityPanier.length;i++){
      console.log(id);
          if(this.quantityPanier[i].id == id){

            return (this.quantityPanier[i].quantity) ? this.quantityPanier[i].quantity : 0;

          }

        }*/



  }

}
