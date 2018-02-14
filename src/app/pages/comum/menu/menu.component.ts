import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SiteService } from '../../../services/site.service';
import { ProductService } from './../../../services/product.service';

import { Site } from '../../../shared/model/site';
import { Categorie } from '../../../shared/model/categorie';
import { SearchProductInput } from '../../../shared/model/searchProductInput';
import { ShopService } from '../../../services/shop.service';
import { CategorieService } from '../../../services/categorie.service';
import { MockData } from '../../../mock/mock-data';
import { UserService } from '../../../services/index';
import { User } from '../../../shared/model/security/user';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  sites : Site[] = [];
  categories: Categorie[] = [];
  categorie: Categorie;
  selectedCategorie : number;
  totalOrderItens = 0;
  site : Site = null;
  searchTerm : string = "";
  error : any;
  logo : string = "";

  user: User;

  constructor(
    private router: Router,
    private siteService : SiteService,
    private categorieService: CategorieService,
    private productService: ProductService,
    private shopService: ShopService,
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log("Menu");
    MockData.loadData();
    this.getSiteConfiguration();
    this.getMenu();

    this.shopService.updateTotalItens.subscribe(total => {
      this.totalOrderItens = total;
    });

    this.user = this.userService.currentUser;
  }
  
  // Get some configuration to render the page, actually just the logo
  // The idea is to customize the site with a diferent logo per User
  getSiteConfiguration(): void {
    // this.siteService
    //   .getAll().toPromise()
    //   .then(sites => {
    //     if(sites.length > 0)
    //     {
    //       this.site = sites[0];
    //     }
    //   })
    //   .catch(error => this.error = error);

    //Mock
    this.site = MockData.sites[0];
  }

  // This method has the responsability of search in the database by the term sended, or category Id.
  search(searchTerm : string, categorieId : number, categorie: string) : void {
    if(searchTerm && searchTerm != ""){

      this.selectedCategorie = 0;
      categorieId = 0;
      this.searchTerm = searchTerm;
      
      if(this.router.url.indexOf('/catalog/(content:categorie/0)') > -1){
        let input : SearchProductInput = new SearchProductInput();
    
        input.searchTerm = this.searchTerm;
        input.categorieId =  this.selectedCategorie;
        input.categorie = categorie;
        
        this.productService.searchProduct.emit(input);
      }
      else{
        this.router.navigate(['/catalog', { outlets: { 'content': ['categorie',0] } }],{queryParams:{search:this.searchTerm}});
      }
    }else if(categorieId && categorieId != 0){
      this.selectedCategorie = categorieId;
      this.searchTerm = "";
      searchTerm = "";

      if(categorieId != 0)
      {
        // this.categorieService
        // .getAll().toPromise()
        // .then(categories => {
        //   this.categories = categories
        //   this.categorie = this.categories.find(c=>c.id == categorieId);
        // }); 


        //Mock
        this.categories = MockData.categories;
        this.categorie = this.categories.find(c=>c.id == categorieId);
      }

      this.router.navigate(['/catalog', { outlets: { 'content': ['categorie',categorieId] } }]);
    }
  }

  // This Method get the list of Categories to create the main menu.
  getMenu() : void {
    // this.categorieService
    // .getAll().toPromise()
    // .then(categories => this.categories = categories)
    // .catch(error => this.error = error);


    //mock
    this.categories = MockData.categories;
  }

  // This method trigger the event to open the side Menu that contains the shopping cart.
  openShoppingCart(action : string){
      this.shopService.onShoppingCartEvent(action);
  }

  //this method has the responsability of reordenate the list of products by getting the option
  // ZA | AZ
  reorder(option : number) {
    this.productService.onReorderProducts(+option);
  }
}
