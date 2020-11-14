import {Injectable} from '@angular/core';
import {firebase} from '@firebase/app';
//import * as firebase from 'firebase'
import '@firebase/messaging';
import {environment} from '../../environments/environment';
import {GlobalService} from '../global.service';
import { AngularFireMessaging} from '@angular/fire/messaging';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

    currentMessage: any;

     messaging: any;


   // public registration: ServiceWorkerRegistration;
    constructor(public global: GlobalService, private angularFireMessaging: AngularFireMessaging  ) {}
  
  init(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        navigator.serviceWorker.ready.then((registration) => {


           // console.log(registration);

            // Don't crash an error if messaging not supported
            if (!firebase.messaging.isSupported()) {
                   resolve();
                   return;
            }

            this.messaging = firebase.messaging();

            // Register the Service Worker
            this.messaging.useServiceWorker(registration);
           // this.registration = registration;
            // Initialize your VAPI key
            this.messaging.usePublicVapidKey(
                  environment.firebase.vapidKey
            );

            
            // Listen to messages when your app is in the foreground
            this.messaging.onMessage((payload) => {
                console.log(JSON.stringify(payload));
            });

           

            

            
            // Handle token refresh
            this.messaging.onTokenRefresh(() => {
                this.messaging.getToken().then(
                (refreshedToken: string) => {
                    this.global.Token = refreshedToken;
                    console.log("refreshedToken", refreshedToken);
                }).catch((err) => {
                    console.error(err);
                });
            });

            resolve();
        }, (err) => {
            reject(err);
        });
    });
  }

  async refreshToken(): Promise<void>
  {
      return new Promise<void>(async (resolve, reject) => {

     //   navigator.serviceWorker.register('../firebase-messaging-sw.js').then(async (registration) => {

        

        console.log("refreshing token!!!!!!");
        
            // Don't crash an error if messaging not supported
     //       console.log(registration);
            //const messaging = firebase.messaging();

            // Register the Service Worker
         //   messaging.useServiceWorker(this.registration);

            // Initialize your VAPI key
          
            
            await this.messaging.deleteToken();
        console.log("token deleted");
            await this.messaging.getToken().then(
                (refreshedToken: string) => {
                    this.global.Token = refreshedToken;
                    console.log("refreshedToken", refreshedToken);
                }).catch((err) => {
                    console.error(err);
                });
       
    
        resolve();
        
  //  })
  });
}

  requestPermission(): Promise<void> {
    return new Promise<void>(async (resolve) => {
        if (!Notification) {
            resolve();
            return;
        }
        if (!firebase.messaging.isSupported()) {
            resolve();
            return;
        }
        try {
            this.messaging = firebase.messaging();
            await Notification.requestPermission();

            const token: string = await this.messaging.getToken();
            
            console.log('User notifications token:', token);
            this.global.Token =  token;
            console.log('global variable token:', this.global.Token);
        } catch (err) {
            console.log('No token received', err);
            // No notifications granted
        }

        resolve();
    });
}



}


