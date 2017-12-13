import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BannerInlineComponent } from './banner-inline/banner-inline.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TwainComponent } from './twain/twain.component';
import { DashboardHeroComponent } from './dashboard-hero/dashboard-hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerInlineComponent,
    WelcomeComponent,
    TwainComponent,
    DashboardHeroComponent,
    DashboardComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
