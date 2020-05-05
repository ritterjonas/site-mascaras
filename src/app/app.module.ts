import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './screens/header/header.component';
import { ContatoComponent } from './screens/contato/contato.component';
import { FooterComponent } from './screens/footer/footer.component';
import { HomeComponent } from './screens/home/home.component';
import { ProdutosComponent } from './screens/produtos/produtos.component';
import { SobreComponent } from './screens/sobre/sobre.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ExternalSystemsComponent } from './components/external-systems/external-systems.component';
import { FeaturesBoxComponent } from './components/features-box/features-box.component';
import { HeaderBannerComponent } from './components/header-banner/header-banner.component';
import { ScheduleModalComponent } from './components/schedule-modal/schedule-modal.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ExternalSystemsComponent,
    ScheduleModalComponent,
    FeaturesBoxComponent,
    HeaderBannerComponent,
    HeaderComponent,
    ContatoComponent,
    FooterComponent,
    HomeComponent,
    ProdutosComponent,
    SobreComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
