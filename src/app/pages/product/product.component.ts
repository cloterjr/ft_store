import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from './../../services/product.service';

import { SearchProductInput } from '../../shared/model/searchProductInput';
import { Categorie } from '../../shared/model/categorie';
import { CategorieService } from '../../services/categorie.service';
import { MockData } from '../../mock/mock-data';
import { Product } from '../../shared/model/interfaces/product/product';
import { ProductCategorySearchPageWsDTO } from '../../shared/model/interfaces/product/product-category-search-page-dto';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  searchProductInput : SearchProductInput;

  productCategorySearchPageWsDTO: ProductCategorySearchPageWsDTO;
  products : Product[] = [];
  error : any;

  categorie : Categorie;
  categories : Categorie[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private productService : ProductService, private categorieService : CategorieService) { }

  async ngOnInit() {
    this.categories = MockData.categories;
    
    this.productService.searchProduct.subscribe(input=>{
      this.searchProductInput = input;
      this.getProducts();
    });

    this.searchProductInput = new SearchProductInput();
      await this.route.params.subscribe(params => {
        let _search = this.route.snapshot.queryParams['search'];
        if(_search != undefined && _search != null && _search != ""){
          this.searchProductInput.searchTerm = _search;
        }else{
          this.searchProductInput.searchTerm = "";
        }
        this.searchProductInput.categorieId = +params.id;

        if(this.searchProductInput && this.searchProductInput.categorieId != 0)
        {
        //   this.categorieService
        //   .getAll().toPromise()
        //   .then(categories => {
        //     this.categories = categories
        //     this.categorie = this.categories.find(c=>c.id == this.searchProductInput.categorieId);
        //   }); 

        //Mock
        this.categories = MockData.categories;
        this.categorie = this.categories.find(c=>c.id == this.searchProductInput.categorieId);
        }

        this.getProducts();

    });

    this.productService.reOrderProducts.subscribe(ordenation => {
      if(ordenation == 1){
        this.products = this.products.sort(function(a, b){
          if(a.name < b.name) return -1;
          if(a. name > b.name) return 1;
          return 0;
        });
      }else if(ordenation == 2){
        this.products = this.products.sort(function(a, b){
          if(a.name < b.name) return 1;
          if(a. name > b.name) return -1;
          return 0;
        });
      }
  });
  }

  getProducts(): void {
    this.productService
      .getAll(this.searchProductInput != undefined && this.searchProductInput != null ? this.searchProductInput.searchTerm : "").toPromise()
      .then(productSearch =>{
        this.productCategorySearchPageWsDTO = productSearch;
        console.log(this.productCategorySearchPageWsDTO)

        // let products: any = MockData.products;

        // let productsAux: Product [] = [];

        // Case the searchTerm is not null, the return of the Product Services is filtered by the searchTerm variable
        // if(this.searchProductInput && this.searchProductInput.searchTerm && this.searchProductInput.searchTerm != "")
        // {
        //   products.forEach(p=>{
        //     if(this.searchProductInput == undefined || this.searchProductInput.searchTerm == "" || p.name.toLowerCase().indexOf(this.searchProductInput.searchTerm.toLowerCase()) > -1){
        //         productsAux.push(p);
        //     }
        //   });
        //   products = productsAux;
        // }
        // else if(this.searchProductInput && this.searchProductInput.categorieId != 0)
        // {
        //   products.forEach(p=>{
        //     if(this.searchProductInput == undefined || this.searchProductInput.categorieId == 0 || p.idCategorie == this.searchProductInput.categorieId){
        //         productsAux.push(p);
        //     }
        //   });

        //   products = productsAux;
        // }
        this.products = this.productCategorySearchPageWsDTO.products;
      })
      .catch(error => this.error = error);
  }

  viewProductDetail(productId : number) : void {
    this.router.navigate(['/catalog', { outlets: { 'content': ['product', productId] } }]);
  }

  onScroll(){
    console.log('scrolled!!');
  }
}
