import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './product/add/add.component';
import { UpdateComponent } from './product/update/update.component';
import { ListComponent } from './product/list/list.component';
import { DetailComponent } from './product/detail/detail.component';

import { NotFoundComponent } from './product/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './services/product.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PanierComponent } from './panier/panier/panier.component';


const appRoute: Routes= [
{ path: 'product/add', component: AddComponent },
{ path: 'product/update/:id', component: UpdateComponent },
{ path: 'product/list', component: ListComponent },
{ path: 'product/detail/:des', component: DetailComponent },
{ path: 'panier/panier', component: PanierComponent },
{ path: '', component: ListComponent },
{ path: 'product/notfound', component: NotFoundComponent },
{ path: '**', redirectTo: '/product/notfound' }
];



@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    ListComponent,
    DetailComponent,
    NotFoundComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]

})
export class AppModule { }
