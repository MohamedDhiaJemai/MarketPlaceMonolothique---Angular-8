import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  panier: Product[] =[];

  constructor() { }

  onAddProduct(product: Product){
    this.panier.push(product);
    localStorage.setItem("Panier", JSON.stringify(this.panier));
  }


  onDeleteProduct(product: Product){
    const index= this.panier.findIndex(
      (data)=>{
        if (data.id === product.id) return true;
      }
      );
      if (index > -1 ){
        this.panier.splice(index, 1);
    console.log(index);
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
