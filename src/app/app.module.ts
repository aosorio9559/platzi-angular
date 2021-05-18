import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { ExponentialPipe } from './utils/pipes/exponential.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './utils/directives/highlight.directive';
import { DemoComponent } from './components/demo/demo.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective,
    DemoComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
