import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';  
import { MatListModule } from '@angular/material/list';  
import { MatButtonModule } from '@angular/material/button';  
import { FlexLayoutModule } from '@angular/flex-layout';
import { PortoviejoCityComponent } from './portoviejo-city/portoviejo-city.component';
import { HomePageComponent } from './home-page/home-page.component';  
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PortoviejoCityComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
