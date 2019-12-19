import { Component , OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingController, AlertController } from '@ionic/angular';

import { CrudService } from './../service/crud.service';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


import { Plugins } from "@capacitor/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ToastController } from "@ionic/angular";


import { AngularFirestore } from '@angular/fire/firestore';

//import { HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy, OnInit {

  Users: any;
  UserName: string;
  UserAge: number;
  
  address: string;
  lat: number;
  lng: number;

  latme: number;
  lngme:number;

  Messages: any;
  Theme: string;
  Message: string;
  
  
  
  
    
  private ngUnsubscribe = new Subject();
  public loading: HTMLIonLoadingElement;

  public isAdmin = false;
  public user: string;
  public Mytoken: any;

  constructor( private firestore: AngularFirestore, private loadingCtrl: LoadingController, public alertCtrl: AlertController, private crudService: CrudService, private authservice: AuthService, private router: Router,
    private http: HttpClient,
    public toastController: ToastController
    ) {}


  ngOnInit() {
    

    firebase.auth().onAuthStateChanged(user => {
      if (user) {

          // call get current location function on initializing
            this.getCurrentLocation(user.uid);

        firebase
          .firestore()
          .doc(`/userProfile/${user.uid}`)
          .get()
          .then(userProfileSnapshot => {

            firebase.database().ref(`userProfile/${user.uid}/isAdmin`).once("value", snapshot => {
              if (snapshot.exists()){
            this.isAdmin = userProfileSnapshot.data().isAdmin;
              }
            });
            console.log(user.uid);
            this.user = userProfileSnapshot.data().email;
          });
      }
    });


    
    this.crudService.read_Messages().subscribe(data => {
 
      this.Messages = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Theme: e.payload.doc.data()['Theme'],
          Message: e.payload.doc.data()['Message'],
          User: e.payload.doc.data()['User']
        };
      })
      console.log(this.Messages);
/*****************************************************



    const httpOptions = {
      headers: new HttpHeaders({
        "Accept": 'application/json',
        'Content-Type':  'application/json'
        })
      };

    let postData : {
       
        "notification":
         {
          "title": "Test title",
          "body": "Test Body",
          "click_action" : "https://github.com/walid-Dev-TN/BookingApp"
         },
         
         "to" : "",
        
    };

    this.httpClient.post("https://fcm.googleapis.com/fcm/send", postData, httpOptions)
      .subscribe(data => {
        console.log("Message envoyé portant sur le theme" + this.Theme);
       }, error => {
        console.log(error);
      });
****************************************************** */
      
 
    });

    
    this.crudService.read_Users().subscribe(data => {
 
      this.Users = data.map(e => {
        return {
          
          address: e.payload.doc.data()['Address'],
          lat: e.payload.doc.data()['lat'],
          lng: e.payload.doc.data()['lng']
        };
      })
      console.log(this.Users);
      
 
    });


   
  }
 
  // Function to get the current geo position of the device

   async getCurrentLocation(userId: string) {
    var lat0: number = 0;
      var lng0: number = 0;
      var address0: string = "Pas de geolocalisation";
    await Plugins.Geolocation.getCurrentPosition().then(result => {
      lat0 = result.coords.latitude;
      lng0 = result.coords.longitude;
      this.latme = lat0;
      this.lngme = lng0;
    });
      
      // calling getAddress function to decode the address

      await this.getAddress(lat0, lng0).subscribe(decodedAddress => {
        address0 = decodedAddress;
       
      });
      console.log(address0);
      /******************Update DB (Userprofile) */

      
  
      

      var db = firebase.firestore();
        
                db.collection("userProfile").doc(userId).update("Address", address0 );
                db.collection("userProfile").doc(userId).update("lat", lat0);
                db.collection("userProfile").doc(userId).update("lng", lng0);

            
    

      

      /****************** */



  }

  





  // This function makes an http call to google api to decode the cordinates

  private getAddress(lat: number, lan: number) {
    return this.http
      .get<any>(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lan}&key=${
          environment.googleMapsAPIKey
        }`
      )
      .pipe(
        map(geoData => {
          if (!geoData || !geoData.results || geoData.results === 0) {
            return null;
          }
          return geoData.results[0].formatted_address;
        })
      );
  }
  
  
    // function to display the toast with location and dismiss button

    async presentToast() {
      const toast = await this.toastController.create({
        message: this.address,
  
        position: "middle",
        buttons: [
          {
            icon: "close-circle",
            role: "cancel"
          }
        ]
      });
      toast.present();
    }
  
    // click function to display a toast message with the address
  
    onMarkerClick() {
      this.presentToast();
    }




  async Logout(): Promise<void>  {
  this.authservice.logoutUser().then(
    () => {
      this.loading.dismiss().then(() => {
        this.router.navigateByUrl('login');
      });
    },
    error => {
      this.loading.dismiss().then(async () => {
        const alert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role: 'cancel' }],
        });
        await alert.present();
      });
    }
    );
    this.loading = await this.loadingCtrl.create();
      await this.loading.present();
  }


  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}

  CreateRecord() {
    let record = {};
    record['Name'] = this.UserName;
    record['Age'] = this.UserAge;
    record['Address'] = this.address;
    /***************************** */
    this.crudService.create_NewUser(record).then(resp => {
      this.UserName = "";
      this.UserAge = undefined;
      this.address = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
      /*********************************** */
  }

  CreateMessage() {
    let record = {};
    record['Theme'] = this.Theme;
    record['Message'] = this.Message;
    record['User'] = this.user;

    
    this.crudService.create_NewMessage(record).then(resp => {
      
      //this.address = this.address;
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

 
  RemoveRecord(rowID) {
    this.crudService.delete_User(rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.crudService.update_User(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
