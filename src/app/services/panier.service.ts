import { Injectable, Input } from "@angular/core";
import { Product } from "../model/product.model";
import { Panier } from "../model/panier.model";

@Injectable({
  providedIn: "root"
})
export class PanierService {
  panier: Product[] = [];
  quantites: Panier[] = [];

  constructor() {
    // this.panier = this.onGetAllProduct();
    const temp = this.onGetAllProduct();
    this.panier = temp ? temp : [];
  }

  onAddProduct(product: Product) {
    const index = this.panier.findIndex(data => {
      if (data.id === product.id) {
        for (let i = 0; i < this.quantites.length; i++) {
          if (this.quantites[i].id == product.id) {
            this.quantites[i].quantity = this.quantites[i].quantity + 1;
          }
        }
        return true;
      }
    });

    if (index === -1) {
      this.panier.push(product);
      localStorage.setItem("Panier", JSON.stringify(this.panier));
      this.quantites.push(new Panier(product.id, 1));
    }
    //console.log("Quantité final : "+ this.quantites[0].quantity);
  }

  /*  onAddProduct(product: Product){


    const object_name = {
      id: product.id,
      quantite: 1
      };
      this.panier.push(object_name);
    localStorage.setItem("Panier", JSON.stringify(object_name));
  }*/

  onDeleteProduct(product: Product) {
    const index = this.panier.findIndex(data => {
      if (data.id === product.id) return true;
    });

    console.log(index);
    if (index > -1) {
      this.panier.splice(index, 1);
      localStorage.setItem("Panier", JSON.stringify(this.panier));
    }
  }

  onGetAllProduct() {
    return JSON.parse(localStorage.getItem("Panier"));
  }
  onGetProductById(id: string) {
    return this.panier.find(data => {
      if (data.id === id) return data;
    });
  }
}
