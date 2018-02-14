import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from '../shared/model/product';
import { SearchProductInput } from '../shared/model/searchProductInput';
import { ProductCart } from '../shared/model/product-cart';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { ConfigService } from './config.service';
// import { BaseService } from './base.service';

@Injectable()
export class ProductService{

  // Event used to trigger the search on the ProductComponent
  searchProduct = new EventEmitter<SearchProductInput>();
  searchInput : SearchProductInput;

  addProductToCart = new EventEmitter<ProductCart>();
  reOrderProducts = new EventEmitter<number>();

  products : ProductCart[] = [];

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private config: ConfigService,
  ){
  }

  getAll(searchTerm: string){
    if(searchTerm != null && searchTerm != undefined && searchTerm != "")
      return this.apiService.get(this.config.api_hybris_url + "/search?query=" + searchTerm);
    else
      return this.apiService.get(this.config.api_hybris_url + "/search");
  }

  onSearch(searchInput: SearchProductInput){
    this.searchInput = searchInput;
    console.log(this.searchInput);
    this.searchProduct.emit(searchInput);
  }

  onAddProductToCart(product: Product, qty: number){
    console.log("onAddProductToCart");
    
    let productCart = new ProductCart();
    productCart.id = product.id;
    productCart.idCategorie = product.idCategorie;
    productCart.name = product.name;
    productCart.price = product.price;
    productCart.images = product.images;
    productCart.totalItens = qty;
    productCart.totalPrice = product.price;
    this.products.push(productCart);
    this.addProductToCart.emit(productCart);
  }

  onReorderProducts(ordenation : number){
    console.log("Emiting Event Reordenation:" + ordenation);
    this.reOrderProducts.emit(ordenation);
  }

}