import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../model/product.model";

@Injectable({
  providedIn: "root"
})
export class ProductService {

  apiUrl = "http://localhost:9999/produit/";

  constructor(private httpClient: HttpClient) {}

  getProduits() {
    return this.httpClient.get<Product[]>(this.apiUrl + "all");
  }

  addProduit(produit: Product) {

    return this.httpClient.post(this.apiUrl + "add", produit);
  }

  onDeleteProduit(id: string) {
    return this.httpClient.delete(this.apiUrl + "delete/" + id);
  }

  onDetails(id: string){
    return this.httpClient.get<Product[]>(this.apiUrl + "designation/" + id);
  }

  onUpdate(id: string, product: Product){
    return this.httpClient.put<Product>(this.apiUrl + "update/" + id, product);
  }
}
