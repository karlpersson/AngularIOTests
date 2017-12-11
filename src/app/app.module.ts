import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BannerInline } from './banner-inline.component/banner-inline.component.component';
import { BannerInlineComponent } from './banner-inline/banner-inline.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerInline.ComponentComponent,
    BannerInlineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
