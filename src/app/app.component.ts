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
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { AuthService } from './service/auth.service';

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
    private authService: AuthService,
    public http: HttpClient,
    public global: GlobalService,
    private router: Router,
    public events: Events
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
        title : "Accueil",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Espace Louage",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Espace Taxi",
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
      {
        title : "Se déconnecter",
        url   : "/login",
        icon  : "exit"
      },
    ]
  }

  naviguer(event)
  {
    if(event.title == "Espace Louage")
      this.global.directshow = false;
    if(event.title == "Espace Taxi")
      this.global.directshow = true;
      if(event.title == "Se déconnecter")
      this.Logout();
     
    this.router.navigateByUrl('/'+ event.url);  
      
  }

  async Logout(): Promise<void>  {
    this.authService.logoutUser().then(
      () => {
      //this.loading.dismiss().then(() => {
        //this.unsubscribe();
        this.router.navigate(['/login']);
      //  });
      });
     // this.loading = await this.loadingCtrl.create();
     //   await this.loading.present();
    }



}
