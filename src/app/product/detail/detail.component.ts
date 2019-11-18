import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product.model';
import {  ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit , OnDestroy {
   product: Product = new Product();
   detailSubscription: Subscription;
  constructor(private productservice: ProductService, private router: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.router.snapshot.params['des'];

    this.getProduct(id);


  }

  getProduct(id: string){

    this.detailSubscription = this.productservice.onDetails(id).subscribe(
      (data)=>{
        this.product  = data[0];
        console.log(data[0]);
      }
  );
  }
    ngOnDestroy(){

      this.detailSubscription.unsubscribe();
    }
}
