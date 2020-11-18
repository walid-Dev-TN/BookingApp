import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {firebase} from '@firebase/app';
//import * as firebase from 'firebase'
import {environment} from '../environments/environment';
import {NotificationsService} from './service/notifications.service';

import { HttpClient} from '@angular/common/http';
import {GlobalService} from './global.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  navigate : any;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private notificationsService: NotificationsService,
    public http: HttpClient,
    public global: GlobalService
   )
   {
    console.log(this.platform);

    //if (!this.http.headers.has('User-Agent')) {
      //  this.global.UserAgent = this.request.headers.get('User-Agent');
       // console.log(this.global.UserAgent);
    //}
    //updates.available.subscribe(() => updates.activateUpdate().then(() => {
    //  console.log('reload for update');
    //  document.location.reload();
    //}));
    //push.messages.subscribe(msg => console.log('push message', msg));
    //push.notificationClicks.subscribe(click => console.log('notification click', click));
    //if (!firebase.apps.length) {
    //  firebase.initializeApp(environment.firebase);
    //  navigator.serviceWorker.getRegistration().then(swr => firebase.messaging().useServiceWorker(swr));
    //}

    this.sideMenu();
    this.initializeApp();
   }

  async ngOnInit() {



    firebase.initializeApp(environment.firebase);
    await this.notificationsService.init();
}
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });

    
  }

  ngAfterViewInit() {
    this.platform.ready().then(async () => {
       await this.notificationsService.requestPermission();
    });
}



sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "News",
        url   : "/News",
        icon  : "chatboxes"
      },
      {
        title : "Contacts",
        url   : "/contacts",
        icon  : "contacts"
      },
    ]
  }

}
