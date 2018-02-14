import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './pages/login/login.component';

//Mock Api
import { InMemoryWebApiModule  } from 'angular-in-memory-web-api';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemCatalogService } from './mock/in-memory-data.service';


// import { MessageService } from './services/message.service';
// import { LoginService } from './shared/services/security/login.service';
// import { ProductService } from './shared/services/product.service';
// import { SiteService } from './shared/services/site.service';
// import { ShopService } from './shared/services/shop.service';
// import { CategorieService } from './shared/services/categorie.service';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SideMenuComponent } from './pages/comum/side-menu/side-menu.component';
import { FooterComponent } from './pages/comum/footer/footer.component';
import { MenuComponent } from './pages/comum/menu/menu.component';
import { AuthService, MessageService, SiteService, ShopService, CategorieService, ApiService, UserService, ConfigService, ProductService } from './services/index';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { GuestGuard, AdminGuard, LoginGuard } from './guards/index';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MockData } from './mock/mock-data';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { NgxCarousel } from 'ngx-carousel/src/ngx-carousel/ngx-carousel.interface';
import { NgxCarouselModule } from 'ngx-carousel/src/ngx-carousel.module';

export function initUserFactory(userService: UserService) {
  return () => userService.initUser();
}

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ProductComponent,
    MenuComponent,
    SideMenuComponent,
    ProductDetailComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent,
    ForbiddenComponent,
    ChangePasswordComponent,
    SignupComponent,
    AdminComponent,
    CarouselComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    InfiniteScrollModule,
    NgxCarouselModule
  ],
  providers: [
    GuestGuard,
    AdminGuard,
    LoginGuard,
    ApiService,
    AuthService,
    UserService,
    ConfigService,
    MessageService,
    // LoginService,
    ProductService,
    SiteService,
    ShopService,
    CategorieService,
    {
      'provide': APP_INITIALIZER,
      'useFactory': initUserFactory,
      'deps': [UserService],
      'multi': true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
