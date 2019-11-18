import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  panier: any[] =[];

  constructor() {
    this.panier = this.onGetAllProduct();
  }

  onAddProduct(product: Product){

    this.panier.push(product);
    localStorage.setItem("Panier", JSON.stringify(this.panier));
  }

/*  onAddProduct(product: Product){


    const object_name = {
      id: product.id,
      quantite: 1
      };
      this.panier.push(object_name);
    localStorage.setItem("Panier", JSON.stringify(object_name));
  }*/

  onDeleteProduct(product: Product){

    const index= this.panier.findIndex(
      (data)=>{
        if (data.id === product.id) return true;
      }
      );
      console.log(index);
      if (index > -1 ){
        this.panier.splice(index, 1);

  localStorage.setItem("Panier", JSON.stringify(this.panier));
      }
    }

  onGetAllProduct(){

    return JSON.parse(localStorage.getItem("Panier"));

  }
  onGetProductById(id: string){
      return this.panier.find(
        (data) =>{
          if (data.id === id) return data;
        }
      );
  }
}
