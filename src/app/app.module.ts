import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';

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
import { ScheduleModalComponent } from './components/schedule-modal/schedule-modal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { ScheduleModalAdminComponent } from './components/schedule-modal-admin/schedule-modal-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    ExternalSystemsComponent,
    ScheduleModalComponent,
    ScheduleModalAdminComponent,
    FeaturesBoxComponent,
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
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollToModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
