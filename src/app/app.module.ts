import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ServiceWorkerModule } from '@angular/service-worker';
import { MyModalPageModule } from './modals/my-modal/my-modal.module';
import { QRScanner} from '@ionic-native/qr-scanner/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import {GlobalService} from './global.service';
import {NotificationsService} from './service/notifications.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MyInterceptorService} from './service/MyInterceptor.service';
import { DatePipe } from '@angular/common';
//import { AgmCoreModule } from '@agm/core';  



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MyModalPageModule,
    HttpClientModule,
    
    ServiceWorkerModule.register('combined-sw.js', { enabled: environment.production })
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    AndroidPermissions,
    Geolocation,
    GlobalService,
    NotificationsService,
    DatePipe,
    
    [
      { provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi: true }
  ],
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
