import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginGuard } from './guards';
import { GuestGuard, AdminGuard } from './guards';
import { NotFoundComponent } from './pages/not-found';
import { ChangePasswordComponent } from './pages/change-password';
import { ForbiddenComponent } from './pages/forbidden';
import { SignupComponent } from './pages/signup';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
 
// export const routes: Routes = [
//   {
//     path: '',
//     component: CatalogComponent,
//     pathMatch: 'full'
//   },
//   {
//     path:'signup',
//     component: SignupComponent,
//     canActivate: [GuestGuard],
//     pathMatch:'full'
//   },
//   {
//     path: 'login',
//     component: LoginComponent,
//     canActivate: [GuestGuard]
//   },
//   {
//     path: 'change-password',
//     component: ChangePasswordComponent,
//     canActivate: [LoginGuard]
//   },
//   {
//     path: 'admin',
//     component: AdminComponent,
//     canActivate: [AdminGuard]
//   },
//   {
//     path: '404',
//     component: NotFoundComponent
//   },
//   {
//     path: '403',
//     component: ForbiddenComponent
//   }
// //   ,
// //   {
// //     path: '**',
// //     redirectTo: '/404'
// //   }
// ];


export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "catalog" },
  { path: "catalog", component: CatalogComponent,
  children:
    [
        { path: 'categorie/:id', component: ProductComponent, outlet: 'content' },
        { path: 'product/:id', component: ProductDetailComponent, outlet: 'content' }
    ]
  },
    { path: 'login', component: LoginComponent, canActivate: [GuestGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
