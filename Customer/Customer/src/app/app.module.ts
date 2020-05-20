import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpModule,CommonModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
      BarcodeScanner,
      FormsModule,
        ReactiveFormsModule,
      Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
