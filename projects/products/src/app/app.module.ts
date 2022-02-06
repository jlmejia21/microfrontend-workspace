import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductsComponent } from './products/products.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule {
  constructor(
    private injector: Injector,
  ) { }

  ngDoBootstrap() {
    const productscomponent = createCustomElement(ProductsComponent, { injector: this.injector });
    customElements.define('app-products', productscomponent);
  }
}
