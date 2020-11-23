import { Component , OnDestroy, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingController, AlertController } from '@ionic/angular';

import { CrudService } from './../service/crud.service';
import { AuthService } from './../service/auth.service';
import {NotificationsService} from './../service/notifications.service';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


import { Plugins } from "@capacitor/core";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpErrorResponse   } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ToastController } from "@ionic/angular";


import { AngularFirestore } from '@angular/fire/firestore';
import { stringify } from 'querystring';

import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../modals/my-modal/my-modal.page';
import {GlobalService} from '../global.service';
import {MyInterceptorService} from '../service/MyInterceptor.service';

import { SwUpdate, SwPush } from '@angular/service-worker';
import { Events } from '@ionic/angular';
import { identifierModuleUrl } from '@angular/compiler';
import { DatePipe } from '@angular/common'

const {Device } = Plugins; 
//import { Uid } from '@ionic-native/uid/ngx';
//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

//import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})




export class HomePage implements OnDestroy, OnInit, AfterViewInit {

  @ViewChild('SelectDate', {static: false}) DatesList: ElementRef;

  styles: Array<any> = [
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    }
];

 

  public Users: any;
  public Drivers: any;
  public SelectedUser: any;
  public selectedUsermail: any;
  public SelectedDriver: boolean = false;
  public SelectedUserId: any;
  public SelectedUserTel: any;
  public SelectedUserDateDepart: any;
  public VoyageEnCours: any;
  public VoyagesEncoreValides: any;

  public DateVoyageEnCours: any;
  public NbrReservations: any;
  public NbrReservationsClient: any;
  public DateVoyage: string = '';
  public Destination: string;
  public current;
  public existe: number = 0;
  public Mysnapshot: any;
  public selected_value0: string = '';
  public selected_value_user: any;
  public textnotification;
  UserName: string;
  UserAge: number;
  address: string;
  UserRole: string;
  lat: number;
  lng: number;
  Tel: string;

  latme: number;
  lngme: number;
  address0:string;

  Messages: any;
  Theme: string;
  Message: string;
  CodeSecret: string;
  UUID; string;
  info: string;
  
    
  private ngUnsubscribe = new Subject();
  public loading: HTMLIonLoadingElement;

  public isAdmin: boolean = false;
  public isDriver: boolean = false;
  public email: string;
  public NomPrenom: string;
  public isClient = false;
  public Reservations: Array<any>;
  public ResNbr: number;
  public Direction: string;
  public NomDirection: string;

  public DatesVoyages: any;
  public NbrVoyages: number;
  public user: string;
  public userId: string;
  public pended: boolean;
  public Mytoken: any;
  private geoCoder;
  dataReturned: any;
  public todayDate: number;
  

  constructor( private firestore: AngularFirestore, private loadingCtrl: LoadingController, public alertCtrl: AlertController, private crudService: CrudService, private authservice: AuthService, private router: Router,
    private http: HttpClient,
    public toastController: ToastController,
    public modalController: ModalController,
    public alertController: AlertController,
    public global: GlobalService,
    private notificationsService: NotificationsService,
    private interceptor: MyInterceptorService,
    //private uid: Uid,
    //private androidPermissions: AndroidPermissions
    private swUpdate: SwUpdate,
    private swPush: SwPush,
    public events: Events,
    public datepipe: DatePipe
    


    ) { 
     
    }

    ngAfterViewInit() {
      
      if(this.DatesList != undefined)
      this.DatesList.nativeElement.value = "Dates disponibles";
    }

    ngOnInit() {

      this.todayDate = Date.now();
      this.CodeSecret = '0';
      

     this.crudService.read_Users().subscribe(data => {
     
      this.Users = data.map(e => {
        var type_user: string = "";
        
        if(e.payload.doc.data()['isDriver'])
       {
          type_user = "Chauffeur"; 
       }
        else
        {
        if(e.payload.doc.data()['isAdmin'])
          type_user = "Administrateur";
        else
          type_user = "Passager";
        }

        return {
          NomPrenom: e.payload.doc.data()['NomPrenom'], 
          email: e.payload.doc.data()['email'],
          address: e.payload.doc.data()['Address'],
          lat: e.payload.doc.data()['lat'],
          lng: e.payload.doc.data()['lng'],
          Tel: e.payload.doc.data()['Tel'],
          Token: e.payload.doc.data()['Token'],
          type_user: type_user
        };
      })
      console.log(this.Users);
    
    });
/******************************** */

this.crudService.read_Drivers().subscribe(data => {

  this.Drivers = data.map(e => {
  return {
    NomPrenom: e.payload.doc.data()['NomPrenom'], 
    Date_Depart: e.payload.doc.data()['Date_Depart'],      
    address: e.payload.doc.data()['Address'],
    email: e.payload.doc.data()['email'],
    lat: e.payload.doc.data()['lat'],
    lng: e.payload.doc.data()['lng'],
    Tel: e.payload.doc.data()['Tel'],
    Dir: e.payload.doc.data()['Dir'],
  };

});
 
  console.log(this.Drivers.toString());

});
/******************************** */

     firebase.auth().onAuthStateChanged(async user => {
      if (user) {

    /******************************Code ajouté le 15-11-2020********* */
    
    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

          if(confirm("Nouvelle version disponible. Voulez-vous charger la nouvelle version?")) {

              window.location.reload();
          }
      });
    }  
   /***************************Ajouté le 18-11-2020************************************** */ 

 /* const NotifsEvent = this.notificationsService.NotifObservable.subscribe((notification) => {
    console.log(notification);
  })*/
  this.notificationsService.getObservable().subscribe((data) => {
    console.log('Notif Data received', data);

    
    let notifObj = JSON.parse(<string>(data));
    console.log(notifObj);

   this.NotifAlert(JSON.stringify(notifObj.notification.body));
});
/***********************Ajouté le 17-11-2020****************************************** *
   this.swPush.messages.subscribe(

    (notification: any) => {
  
      console.log("Notification reçue", notification);
    
  
      let options = {
  
        body: notification.body,
  
        icon: "assets/icons/logo-blassa.png",
  
        actions: <any>notification.actions,
  
        data: notification.data,
  
        vibrate: [100, 50, 10, 20, 20]
  
      };
  
      this.showNotification(notification.title, options);
  
    },
  
  
  
    err => {
  
      console.error(err);
  
    }
  
  );
  /**************************************************************************** */

        console.log("user:",user)
        // call get current location function on initializing
            this.getCurrentLocation(user.uid);

        await firebase
          .firestore()
          .doc(`/userProfile/${user.uid}`)
          .get()
          .then(  async userProfileSnapshot => {

            console.log("user.uid:", user.uid);
            this.global.UserID = user.uid;


            this.userId = user.uid;
            this.pended = userProfileSnapshot.data().pending;
            this.UUID = userProfileSnapshot.data().UUID;

           // if (userProfileSnapshot.data().email)
            this.user = userProfileSnapshot.data().email;
            console.log("this.user:", this.user);
           // if(userProfileSnapshot.data().Tel)
           // this.user = userProfileSnapshot.data().tel;
           // this.userId = user.uid;
           // this.pended = userProfileSnapshot.data().pending;
            this.isAdmin = userProfileSnapshot.data().isAdmin;

            this.isDriver = userProfileSnapshot.data().isDriver;
            this.NomPrenom = userProfileSnapshot.data().NomPrenom; 
            this.VoyageEnCours = "0";
            if(userProfileSnapshot.data().isDriver)
              {
                       this.VoyageEnCours = userProfileSnapshot.data().Id_Voyage;
                       this.global.VoyageEnCours = userProfileSnapshot.data().Id_Voyage;
              }
            this.DateVoyageEnCours = userProfileSnapshot.data().Date_Depart;
            this.Mytoken = userProfileSnapshot.data().Token;
 /***********************************Controle du Role du User**************************************** */  
 

  if(this.isAdmin)
      console.log("Admin");
   else
   
   {
      if(this.isDriver)  //Chauffeur
      {  
        console.log("Driver");
        /*****************Liste des réservations******************* */

        this.Reservations = [];
        this.ResNbr = 0;
        var email = this.user;
        console.log("email:", email);


       


  /**************************************************** *
        var query = await firebase.firestore().collection("ReservationsList").where('Driver','==', email);
        
       query.get().then(snap => {
           snap.forEach(doc => {
          if(doc.data()['Id_Voyage'] == this.VoyageEnCours)
            this.Reservations.push(doc.data());
         
          });
          this.ResNbr = this.Reservations.length;

          

        });
        ********************************************************* */
  /**************************************************** */
  var ReservationsAuChargement: Array<any> = [];
  var query =   firebase.firestore().collection("ReservationsList").where('Driver','==', email);
        
 await query.get().then(snap => {
  snap.forEach(doc => {
  if(doc.data()['Id_Voyage'] == this.VoyageEnCours)
  ReservationsAuChargement.push(doc.data());
         });
    });
 /********************************************************* *
      await this.crudService.read_New_Reservations_Driver(email, this.VoyageEnCours).subscribe(data => {
        //  if(data.length != this.ResNbr)
       //   {
        this.Reservations = [];
        this.ResNbr = 0;

            this.Reservations = data;
            this.ResNbr = data.length;
            console.log("Nouvelle reservation reçu!");
            this.NotifAlert("Nouvelle reservation reçu!");
       //   }
        
                 
       });
       /*********************************************************** */
       //let Reservations: Array<any> = []; 
       firebase.firestore().collection("ReservationsList").where('Driver', '==', email)
        .onSnapshot(querySnapshot => {
          this.Reservations = [];
          this.ResNbr = 0;
          querySnapshot.forEach(doc => {
              if( doc.data()['Id_Voyage'] == this.VoyageEnCours )
              {
                this.Reservations.push(doc.data());
                this.ResNbr++;
              }
             
             // this.NotifSubject.next(Reservations);
        })
        if(this.Reservations.length != ReservationsAuChargement.length)
        {
          console.log("Reservations au chargement" , ReservationsAuChargement);
          console.log("Nouvelle reservation reçu!" , this.Reservations);

          this.NotifAlert("Nouvelle reservation reçu!"); 
        }
        
      });
      /*****************************************************************/ 
        console.log("Chauffeur");
       }
/*********************old code remplassé par celui au dessus le 19/10/2020********************************
this.firestore.collection('ReservationsList', x => x.where('Driver','==',this.user)).snapshotChanges().subscribe(  data => {
  this.ResNbr =  data.length;

  this.Reservations = data.map(e => {
      return {
        id: e.payload.doc.id,
        ResUserName: e.payload.doc.data()['Client'],
        
        ResTel: e.payload.doc.data()['Tel']
      };
    });
 

  console.log("Nbre de reservations reçus: " + this.ResNbr);
});
***********************************************************/
     else{  //Client
      console.log("Client");
/*************************Afficher Modal en cas de réservations en cours************************************* */

this.VoyagesEncoreValides = [];
var query = firebase.firestore().collection("userProfile").where('isDriver','==', true);

await query.get().then(async snap => {
  
  snap.forEach(doc => {
    this.VoyagesEncoreValides.push(doc.data()['Id_Voyage']);
  });
  console.log("Nbr de voyages encore valides" + snap.size);
  //console.log("Voyages encore valides" + this.VoyagesEncoreValides.length);

this.Reservations = [];
        var query = firebase.firestore().collection("ReservationsList").where('Client','==', this.user);
        //var query2 = query.where('Dir','==', this.Direction);
        //var query3 = query2.where('isDriver','==', true);
      
       await query.get().then(snap => {
         // this.ResNbr =  snap.size;
          snap.forEach(doc => {
          if(this.VoyagesEncoreValides.includes(doc.data()['Id_Voyage']))
            this.Reservations.push(doc.data());
         
          });
          this.ResNbr = this.Reservations.length;
          console.log("ResNbr" + this.ResNbr);


     if(this.ResNbr > 0 )
     {
          
        //  console.log(this.Reservations);
/**********!!!!!!!!******************Update de la destination******************!!!!!!!!**************** */
var Id_Voyage = this.Reservations[0].Id_Voyage;
console.log("Id_Voyage=", Id_Voyage);
//var query = firebase.firestore();
firebase
          .firestore()
          .doc(`/VoyagesList/${Id_Voyage}`)
          .get()
          .then(resp => {
// this.ResNbr =  snap.size;
this.Direction = resp.data().destination;
if(this.Direction == "TK")
            this.NomDirection = "Tunis - Kébili"
if(this.Direction == "KT")            
            this.NomDirection = "Kébili - Tunis"
this.selected_value0 = resp.data().Date_voyage;


var db = firebase.firestore();
db.collection("userProfile").doc(this.userId).update("Dir", this.Direction );



});
var latme: number;
var lngme: number;
var query = firebase.firestore().collection("userProfile").where('isDriver','==', true).where('Id_Voyage','==', Id_Voyage);
        //var query2 = query.where('Dir','==', this.Direction);
        //var query3 = query2.where('isDriver','==', true);
      
        query.get().then(snap => {
         // this.ResNbr =  snap.size;
          snap.forEach(doc => {
          latme = doc.data()['lat'];
          lngme = doc.data()['lng'];
          });
          this.latme = latme;
          this.lngme = lngme;
        });
      
      }   


            });
   });      
  
            console.log("Passager");
          }
      }
 
/*********************************************Controle du device utilisé pour l'accès********************************************* */         
if(this.pended)
{ //compte pas encore validé
  this.CodeSecret = '0';
  await this.presentAlert2("Pas encore validé!!");
 
}
else // detection du id du device
{

  var info = await Device.getInfo();
  this.info = info.uuid;
  console.log("this.info:", this.info);

    if(this.info === this.UUID)
    {

      this.CodeSecret = '123';
      if(!this.isDriver && !this.isAdmin)
                  this.openModal(this.Reservations, 1);

       }
    else
    {
      this.CodeSecret = '0';
      await this.presentAlert3("Vous avez changé d'application!! pour continuer veuillez saisir votre code secret");
                 
    }     
  
 }

/******************************************************************************** */

   });
  }
 });
}
    

afficherModal()
{
this.openModal(this.Reservations, 2);
}

  async openModal(Reservations, option: number) {
  
    try {
      var reservations: Array<any> = Reservations;
      var Date_Depart;
      var Titlem = "";
      var type_user=1;
        if(option == 1){
        Titlem="Vous avez déja réservé une place dont voici les détails!";
        
        }
        else{
        Titlem="Votre réservation dont voici les détails, est envoyée avec succès";
        
        }
        if(this.isDriver)
        type_user=1;
        else
          if(this.isAdmin)
          type_user=2;
          else
          type_user=3;

      var query = await firebase.firestore().collection("VoyagesList").doc(reservations[0].Id_Voyage).get().then(snap => {
        
 
    Date_Depart = snap.data()['Date_voyage'];
  
 });



      console.table(reservations);
          const modal = await this.modalController.create({
      component: MyModalPage, 
      componentProps: {
        "paramUser": this.user,
        "paramClient": this.NomPrenom, 
        "paramID": reservations[0].Id_Voyage,
        "paramDate": Date_Depart,
        "paramChauffeur": reservations[0].Driver,
        "paramConfirme": reservations[0].Confirme,
        "paramtype_user": type_user,
        "paramTitle": Titlem

      }
      
      
      
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
    console.log("modal affichée");
    return await modal.present();
  }
  catch(e) { 
    console.log(e);
   }
}

showNotification(title: string, options: NotificationOptions) {

  navigator.serviceWorker.getRegistration().then(reg => {

    reg.showNotification(title, options).then(res => {

      console.log("showed notification", res)

    }, err => {

      console.error(err)

    });

 });

}



   async getCurrentLocation(userId: string) {
    var lat0: number;
      var lng0: number;
      this.address0 = "Pas de geolocalisation";
    await Plugins.Geolocation.getCurrentPosition().then(result => {
     lat0 = result.coords.latitude;
     lng0 = result.coords.longitude;
      this.latme = lat0;
      this.lngme = lng0;
         
      // calling getAddress function to decode the address
     
      });

      // Activer cet appel quand vous payerez l'accès à cette API google
      //this.getAddress(this.latme, this.lngme).subscribe(decodedAddress => {
      //  this.address0 = decodedAddress;
      //});
      
      this.address0 = "Quelque part dans le monde"

      console.log(this.address0);
      /******************Update DB (Userprofile) */

      
      await firebase
      .firestore()
      .doc(`/userProfile/${userId}`)
      .get()
      .then(userProfileSnapshot => {
        this.email = userProfileSnapshot.data().email;
      });

      let latlng = this.latme.toString() + "" + this.lngme.toString() + this.email ;

      var db = firebase.firestore();
        
                db.collection("userProfile").doc(userId).update("Address", this.address0 );
                db.collection("userProfile").doc(userId).update("lat", this.latme);
                db.collection("userProfile").doc(userId).update("lng", this.lngme);
                db.collection("userProfile").doc(userId).update("latlng", latlng);
 
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
  


  onMarkerClick(event) {
    if( this.ResNbr == 0)
    this.presentToast(event);
    else
     this.presentAlert("Vous avez déja réservé une place!");
  }

   async presentAlert(MessageText) {
    const alert = await this.alertController.create({
     // cssClass: 'my-custom-class',
      header: 'Alerte',
      subHeader: MessageText,
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }

  async NotifAlert(MessageText) {
    const alert = await this.alertController.create({
     // cssClass: 'my-custom-class',
      header: 'Notification reçu',
      subHeader: MessageText,
      message: '',
      buttons: ['Ok']

      //buttons: ['OK']
    });

    await alert.present();
  }


  async presentAlert2(MessageText) {
    const alert = await this.alertController.create({
     // cssClass: 'my-custom-class',
      header: 'Alerte',
      subHeader: MessageText,
      message: '',
      buttons: [
        {
            text: 'Ok',
            handler: async (alertData) => {
                this.Logout(); 
                //console.log(alertData.codesecret);
            }
        }
    ]

      //buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlert3(MessageText) {
    const alert = await this.alertController.create({
     // cssClass: 'my-custom-class',
      header: 'Alerte',
      subHeader: MessageText,
      message: '',
      inputs: [{
                name : 'codesecret',
                type: 'password',
                placeholder : 'Code-secret'
              }],
      buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: async () => {
                        console.log('Confirm Cancel');
                        await this.Logout();
                    }
                }, {
                    text: 'Ok',
                    handler: async (alertData) => {
                        this.CodeSecret = alertData.codesecret; 
                        if(this.CodeSecret != '123')
                        await this.Logout();
                        else
                        {
                          var db = firebase.firestore();
                           db.collection("userProfile").doc(this.userId).update("UUID", this.info ).then(() => {
                          this.UUID = this.info;
                          //this.afficherUserInfos();
                          if(!this.isDriver && !this.isAdmin)
                            this.openModal(this.Reservations, 1);
                          });

                      
                          // this.notificationsService.requestPermission().then (() => {
                            this.notificationsService.refreshToken().then( () =>{
                              console.log("le global est devenu:", this.global.Token);
                              db.collection("userProfile").doc(this.userId).update("Token", this.global.Token );
                            }); 
                        //  });

                            // On successful registration, the device will send us the Device Token. 
                        }
                        //console.log(alertData.codesecret);
                    }
                }
            ]
    });

    await alert.present();
  }

  async presentAlert4() {
    const alert = await this.alertController.create({
     // cssClass: 'my-custom-class',
      header: 'Alerte',
      subHeader: 'Vous confirmer la date du voyage?' + this.datepipe.transform( new Date(this.DateVoyage), 'dd/MM/yyyy'),
      message: '',
      
      buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: async () => {
                        console.log('Confirm Cancelled');
                      //  await this.Logout();
                    }
                }, {
                    text: 'Ok',
                    handler: async () => {
                      let DateNow = this.datepipe.transform( new Date(Date.now()), 'dd/MM/yyyy');   
                      let DateAVerifie = this.datepipe.transform( new Date(this.DateVoyage), 'dd/MM/yyyy');
     if(DateAVerifie >= DateNow)  
     {                 
                      let record = {};
    record['Date_voyage'] = DateAVerifie;
    record['Driver'] = this.user;
    record['confirme']= true;
    record['destination']= this.Destination;
    var id_voyage : any;
    /********************Ajout du nouveau voyage à la collection VoyagesList ********************************** */
 this.firestore.collection('VoyagesList').add(record).then( resp =>  {
      
  id_voyage = resp.id;

  console.log(resp.id);
  console.log("Date du voyage ajoutée avec succès!");
     /*******************Update du Id_Voyage du driver**************************************** */
        var db = firebase.firestore();
        
        db.collection("userProfile").doc(this.userId).update("Id_Voyage", id_voyage ).then( resp => {
        
          console.log(resp);
          console.log("id_voyage en cours changée avec succès!");

        })
          .catch(error => {
            console.log(error);
          });
/**************************Remise à zéro du NbrReservations du driver*********************************** */
          db.collection("userProfile").doc(this.userId).update("NbrReservations", 0 ).then( resp => {
        
            console.log(resp);
            console.log("id_voyage en cours changée avec succès!");
  
          })
            .catch(error => {
              console.log(error);
            });
/****************************Update de la destination********************************** */
        db.collection("userProfile").doc(this.userId).update("Dir", this.Destination ).then( resp => {
          
            console.log(resp);
            console.log("Dir changée avec succès!");
  
          })
            .catch(error => {
              console.log(error);
            });
/************************************************************** */
            db.collection("userProfile").doc(this.userId).update("Date_Depart", DateAVerifie ).then( resp => {
        
            
              console.log(resp);
              console.log("Date de départ changée avec succès!");
    
            })
              .catch(error => {
                console.log(error);
              });
   /************************************************************ */           

   })
     .catch(error => {
     console.log(error);
    });
                      
  /************************************************************************** */                    
  }
  else
  {
    console.log('Date invalide!');
  }               
}             
  }      
                    
            ]
    });

    await alert.present();
  }
    // function to display the toast with location and dismiss button

  async presentToast(event) {
           
      let latlgn = event.lat.toString() + event.lng.toString() + event.email.toString();
      var db = firebase.firestore();
       db.collection("userProfile").where("latlng","==",latlgn).get()
      .then( querySnapshot => {

          querySnapshot.forEach(doc => {
            this.SelectedUserId = doc.id;
            console.log(doc.id, " => ", doc.data());
              // doc.data() is never undefined for query doc snapshots
             
                   /****************************************** */
firebase
.firestore()
.doc(`/userProfile/${this.SelectedUserId}`)
.get()
.then( userProfileSnapshot => {
  //this.NbrReservations = userProfileSnapshot.data().NbrReservations;
  //this.NbrReservations = 1;
  this.SelectedDriver = userProfileSnapshot.data().isDriver;
  this.SelectedUser = userProfileSnapshot.data().NomPrenom;
  this.selectedUsermail = userProfileSnapshot.data().email;
  this.SelectedUserTel = userProfileSnapshot.data().Tel;
  this.SelectedUserDateDepart = userProfileSnapshot.data().Date_Depart;
  this.VoyageEnCours = userProfileSnapshot.data().Id_Voyage;


}).then(async  () => {
    


  /********************Nbr reservations******************************* */

 var db = firebase.firestore();
await db.collection("ReservationsList").where('Driver','==', event.email).where('Id_Voyage','==', this.VoyageEnCours).get()
.then( querySnapshot => {
  this.NbrReservations = querySnapshot.size;
 

});

/*************** old code modifié le 19/10/2020 par celui au desssus
  await this.firestore.collection('ReservationsList', x => x.where('Driver','==', event.email)).snapshotChanges().subscribe(data => {
    if(data.length > 0)
    {
      this.NbrReservations = data.length;
      console.log("------------------------" + this.NbrReservations);
    }  
    else
    this.NbrReservations = 0;
  
  });
  ****************************/
  /*************************************************** */
  var driver: any;
  if(this.SelectedDriver)
  driver = 'le chauffeur';
  else
  driver = '';
  var mess ='';
  if(this.NbrReservations < 8)
    mess = driver + ': ' +  this.SelectedUser + '.<br/>Tél:' + this.SelectedUserTel + '<br/> Nombre de places réservés: ' + this.NbrReservations + '<br/>Partira le:' + this.SelectedUserDateDepart;
  else
    mess= 'Toutes les places du ' + driver + ': ' +  this.SelectedUser + ' sont réservées';
  const toast = await this.toastController.create({
  //message: this.address,

  message: mess,
 //message: driver +  this.SelectedUser  + 'places réservés',

  duration: 8000,
   // showCloseButton: true,
  //  closeButtonText: "Reserver",
  position: "middle",
  buttons: [
    {
      //icon: "close-circle",
     // role: "cancel",
     side: 'start',
     text: 'Réserver une place',
      handler: () => {
        this.onToastClick(event.email, event.Tel, event.lat.toString(), event.lng.toString()).then(()=>{
           
        })
     },
    }
    ]
});

toast.present();

});

/****************************************** */
         
             // this.SelectedUser = doc.data().email;
            });

      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
  
    }
  
  
    

    async onToastClick(email:string, Tel:string, lat:string , lng:string){

      /********************Obtenir le nombre de reservations du Driver where email (Client) selected*********** */
      const toasterror =   await this.toastController.create({
        //message: this.address,
      
       message: 'Vous avez déja réservé une place auparavant!',
       //message: driver +  this.SelectedUser  + 'places réservés',
      
        duration: 5000,
         // showCloseButton: true,
        //  closeButtonText: "Reserver",
        position: "middle",
        
      });

      const toastsuccess =   await this.toastController.create({
        //message: this.address,
      
       message: '"Reservation faite avec succès!"!',
       //message: driver +  this.SelectedUser  + 'places réservés',
      
        duration: 5000,
         // showCloseButton: true,
        //  closeButtonText: "Reserver",
        position: "middle",
        
      });



      var db = firebase.firestore();
      db.collection("userProfile").where("email","==", this.selectedUsermail).get()
      .then( async querySnapshot => {

/*****************Chercher des tentatives précedentes******************* */
var db = firebase.firestore();
await db.collection("ReservationsList").where('Client','==', this.user).where('Id_Voyage','==', this.VoyageEnCours).get()
.then( querySnapshot => {
  this.existe = querySnapshot.size;
  console.log('Tentatives précedentes pour le voyage en cours:' + this.existe);
 

});

/******************old code remplacé par celui au dessus le 19/10/2020
await this.firestore.collection('ReservationsList', x => x.where('Client','==',this.user)).snapshotChanges().subscribe(  data => {
  this.existe =  data.length ;
  console.log('Tentatives précedentes:' + this.existe);
});
/********************************************************** */

          querySnapshot.forEach( doc => {
            console.log(doc.id, " => ", doc.data());
            firebase
.firestore()
.doc(`/userProfile/${doc.id}`)
.get()
.then(  userProfileSnapshot => {

    //console.log(user.uid);
    console.log('NbrReservations du chauffeur selectionné:'  + this.NbrReservations);
      /******************************* */
      if(this.NbrReservations < 8){
       
        
        if(this.existe == 0)
        {
        let record = {};
        record['Client'] = this.user;
        record['NomPrenom'] = this.NomPrenom;
        record['Tel'] = userProfileSnapshot.data().Tel;
        record['Driver']= this.selectedUsermail;
        record['Id_Voyage']= this.VoyageEnCours;
        record['Confirme']=false;
       // record['NbrReservations'] = this.NbrReservations + 1;
      this.firestore.collection('ReservationsList').add(record).then( resp => {
        var db = firebase.firestore();
           db.collection("userProfile").doc(`${this.SelectedUserId}`).update("NbrReservations",userProfileSnapshot.data().NbrReservations + 1 ).then(() => {
        //this.address = this.address;
             // console.log(resp);
            // console.log("Reservation faite avec succès!");
            /*************************Réservations en cours************************************* */

this.VoyagesEncoreValides = [];
var query = firebase.firestore().collection("userProfile").where('isDriver','==', true);

 query.get().then(snap => {
  
  snap.forEach(doc => {
    this.VoyagesEncoreValides.push(doc.data()['Id_Voyage']);
  });
  console.log("Voyages encore valides" + snap.size);
  //console.log("Voyages encore valides" + this.VoyagesEncoreValides.length);

this.Reservations = [];
        var query = firebase.firestore().collection("ReservationsList").where('Client','==', this.user);
        //var query2 = query.where('Dir','==', this.Direction);
        //var query3 = query2.where('isDriver','==', true);
      
        query.get().then(snap => {
         // this.ResNbr =  snap.size;
          snap.forEach(doc => {
          if(this.VoyagesEncoreValides.includes(doc.data()['Id_Voyage']))
            this.Reservations.push(doc.data());
         
          });
          this.ResNbr = this.Reservations.length;
          console.log("ResNbr" + this.ResNbr);


          if(this.ResNbr > 0 && this.CodeSecret == '123')
          this.openModal(this.Reservations, 2);
        });
 });      
/************************************************************************************ */       



           });
      })
        .catch(error => {
          console.log(error);
        });
      }
      else
      {
        console.log("Vous avez déja réservé une place auparavant!");
        toasterror.present();

        
      }
      }
      else
      {
        console.log('Nbr max atteint!! essayer un autre chauffeur');
        toastsuccess.present();
      }

    })
  });
});

   
    }




   
  sendPostRequest() {
      let token = this.global.Token;
     // const headers = new HttpHeaders().set('Content-Type', 'application/json')
      //                           .set('Accept', '*/*')
      //                           .set('Connection', 'keep-alive')
      //                           .set('Accept-Encoding', 'gzip, deflate, br')                            
      //                           .set('Authorization',  'Bearer ' + "AAAAXS_wR8g:APA91bEG4yu_VvWHs_hhd9D89Bxzdubp-WIpufJalmytHPx4uLOzePPrPwyHUrHmiFslSUV3ykpNxnsugrYR1mh9hJbirGuc-sGV6uomLA75OkH6NLsxk7pLgemTom_PVLzBhX7gTEZy")
                                 //.set('Access-Control-Allow-Origin','*');
      const httpOptions = {
                                  headers: new HttpHeaders({
                                     'Accept': '*/*',
                                     //'Connection': 'keep-alive',
                                     'Content-Type': 'application/json',
                                     'Authorization': 'key=' +  'AAAAXS_wR8g:APA91bEG4yu_VvWHs_hhd9D89Bxzdubp-WIpufJalmytHPx4uLOzePPrPwyHUrHmiFslSUV3ykpNxnsugrYR1mh9hJbirGuc-sGV6uomLA75OkH6NLsxk7pLgemTom_PVLzBhX7gTEZy',
                                    // 'Accept-Encoding': 'gzip, deflate, br'
                                  })
                                }



       let postData = {
        "notification": {
        "title": "Message du Admin à l'utilisateur:" + this.selected_value_user.NomPrenom,
        "body": this.textnotification,
        "icon": "assets/icons/logo-blassa.png"
        },
        //"to" : this.global.Token
        "to" : this.selected_value_user.Token
      }
    
//console.log(postData);
      this.http.post("https://fcm.googleapis.com/fcm/send", 
       JSON.stringify(postData) , httpOptions)
      .subscribe(data => {
            console.log(data);
             }, (error: HttpErrorResponse) => {
               console.log(error);
              });
  
  }




  async Logout(): Promise<void>  {
  this.authservice.logoutUser().then(
    () => {
    //this.loading.dismiss().then(() => {
      this.router.navigate(['/login']);
    //  });
    });
   // this.loading = await this.loadingCtrl.create();
   //   await this.loading.present();
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
  ConfirmeRes(email : string)
  {
    var db = firebase.firestore();
        let id_reservation: any;
    db.collection("ReservationsList").where('Client','==', email).where('Id_Voyage','==',this.VoyageEnCours).get().then(res => {
     //  id_reservation = res.id;
      res.forEach(doc => {
        id_reservation = doc.id;
        var db2 = firebase.firestore();
        db.collection("ReservationsList").doc(id_reservation).update("Confirme", true ).then(res =>{
          console.log("confirmation faite avec succès!")
        });
        
        });
    });
    
    
  }

  RemoveRes(email : string){}
/*************************************************** */
  latlngChange(email: string){
    var query = firebase.firestore().collection("userProfile").where('email','==', email).where('isDriver','==', true);
    //var query2 = query.where('Dir','==', this.Direction);
    //var query3 = query2.where('isDriver','==', true);
  
    query.get().then(snap => {
   //   this.NbrVoyages =  snap.size;
      snap.forEach(doc => {
      this.latme = doc.data()['lat'];
      this.lngme = doc.data()['lng'];
    
  
     
      });
     
  });
}
/**************************************************************** */

  DirChange()
  {
   /***********************************************************/ 
  // if (this.DatesList != undefined)
  //  this.DatesList.nativeElement.value = '------';
    this.selected_value0 = '';
   this.DatesVoyages = [];
    var query = firebase.firestore().collection("userProfile").where('Dir','==', this.Direction).where('isDriver','==', true);
    //var query2 = query.where('Dir','==', this.Direction);
    //var query3 = query2.where('isDriver','==', true);
  
    query.get().then(snap => {
      this.NbrVoyages =  snap.size;
      snap.forEach(doc => {
        //let UneDateVoyage = new Date(JSON.stringify(doc.data()));  
        //let DateNow = new Date(Date.now()); 
        let DateNow = this.datepipe.transform( new Date(Date.now()), 'dd/MM/yyyy');
        console.log("Aujourd'hui", DateNow)
        if(doc.data()['Date_Depart'] >= DateNow)
      this.DatesVoyages.push(doc.data());
         
      console.log(this.DatesVoyages);
      console.log(this.NbrVoyages);
      });
    
  });
   
 
   /*********************************************
   
    this.firestore.collection('userProfile', x => x.where('Dir','==', this.Direction)).snapshotChanges().subscribe(data => {
      this.NbrVoyages =  data.length;
  this.DatesVoyages = data.map(e => {
      return {
        Date: e.payload.doc.data()['Date_voyage'],
        Driver: e.payload.doc.data()['Driver'],
        confirme: e.payload.doc.data()['confirme'],
        destination: e.payload.doc.data()['destination']
      };
    });
   });
/***********************************************/


  }

  formatDate(DateString: string): string {
    var d = new Date(DateString);
      var  month = '' + (d.getMonth() + 1);
       var day = '' + d.getDate();
      var  year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return day + "-" + month + "-" + year;
    
} 

   async dateChanged()
  {

    if(this.ResNbr > 0){
    let message = "Il ya des réservations en attente pour le voyage en cours";
    this.presentAlert(message);
    }
    else
    {
    await this.presentAlert4();
    }
  }
RemisedateAzero()
{
  this.DateVoyage = '';
}
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}

}
