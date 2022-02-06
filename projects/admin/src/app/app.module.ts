import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdminComponent } from './admin/admin.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const admincomponent = createCustomElement(AdminComponent, { injector: this.injector });
    customElements.define('app-admin', admincomponent);
  }
}
