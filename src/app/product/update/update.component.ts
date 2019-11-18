import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Product } from "src/app/model/product.model";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss"]
})
export class UpdateComponent implements OnInit, OnDestroy {
  product: Product = new Product();
  detailSubscription: Subscription;

  constructor(
    private productservice: ProductService,
    private router: ActivatedRoute,
    private routerNav: Router
  ) {}

  ngOnInit() {
    const id = this.router.snapshot.params["id"];
    this.getProduct(id);
  }

  getProduct(id: string) {
    this.detailSubscription = this.productservice
      .onDetails(id)
      .subscribe(data => {
        this.product = data[0];
        console.log(data[0]);
      });
  }

  ngOnDestroy() {
    this.detailSubscription.unsubscribe();
  }

  ngOnUpdate() {

    this.detailSubscription = this.productservice
      .onUpdate(this.product.id, this.product)
      .subscribe(data => {
        this.routerNav.navigate([""]);
      });
  }
}
