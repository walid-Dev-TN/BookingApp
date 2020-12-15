import { Component , OnDestroy, OnInit, ViewChild, ElementRef, AfterViewInit, NgZone  } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingController, AlertController } from '@ionic/angular';

import { CrudService } from './../service/crud.service';
import { AuthService } from './../service/auth.service';
import {NotificationsService} from './../service/notifications.service';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


import { Capacitor, Plugins, NetworkStatus, PluginListenerHandle  } from "@capacitor/core";
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
import { DatePipe } from '@angular/common';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationService } from '../service/location.service';

const {Device } = Plugins; 
//import { Uid } from '@ionic-native/uid/ngx';
//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

//import { HttpClient, HttpHeaders} from '@angular/common/http';
import { MapsAPILoader } from '@agm/core';

interface marker {
	lat: number;
	lng: number;
	label?: string;
  draggable: boolean;
  content?:string;
  description: string;
  isShown:boolean;
  icon:string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})




export class HomePage implements OnDestroy, OnInit, AfterViewInit {

  @ViewChild('SelectDate', {static: false}) DatesList: ElementRef;

  @ViewChild('search', {static: false}) searchElementRef: ElementRef;

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
  public SelectedUserSource: any;
  public SelectedUserDir: any;
  
  public VoyageEnCours: any;
  public SourceVoyageEnCours: any;
  public DateVoyageEnCours: any;
  public DirVoyageEnCours: any;

  public VoyagesEncoreValides: any;
  public VoyagesEncoreValidesAllInfos: any;

  
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
  latnow: number;
  lngnow: number;
  Tel: string;

  watchId: any;
  latme: number;
  latme0: number;
  lngme: number;
  lngme0: number;
  address0:string;

  radius = 50000;
  radiusLat = 0;
  radiusLong = 0;
  markers: Array<marker> = [];
  

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
  public DestinationsList: Array<any>;
  public SourcesList: Array<any>;
  public Source: string;
  public NomSource: string;
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
  public networkStatus: any;
  public networkListener: PluginListenerHandle;
  public directshow: boolean = false;
  unsubscribe;

  public web_site;
  public nameplace;
  public zip_code;
               //set latitude, longitude and zoom
  public latitudedest: number;
  public longitudedest: number;
  public origin:  any;
  public destination: any;
  public zoom: number;
  public iconurl: string = "assets/icons/placeholder.png";



  constructor( private firestore: AngularFirestore, private loadingCtrl: LoadingController, public alertCtrl: AlertController, private crudService: CrudService, private authservice: AuthService, private router: Router,
    private http: HttpClient,
    public toastController: ToastController,
    public modalController: ModalController,
    public alertController: AlertController,
    public global: GlobalService,
    private notificationsService: NotificationsService,
    private interceptor: MyInterceptorService,
    //private uid: Uid,
    private androidPermissions: AndroidPermissions,
    private swUpdate: SwUpdate,
    private swPush: SwPush,
    public events: Events,
    public datepipe: DatePipe,
    private locationService: LocationService,
    public ngZone: NgZone,
    public mapsAPILoader: MapsAPILoader
    
   

    ) { 
     
    }

    ngAfterViewInit() {
      
      if(this.DatesList != undefined)
      this.DatesList.nativeElement.value = "Dates disponibles";
      if(this.global.directshow)
          this.findAdress();
    }

    showHideMarkers(){
      Object.values(this.markers).forEach(value => {
        value.isShown = this.getDistanceBetween(value.lat,value.lng,this.radiusLat,this.radiusLong);
      });
    }

    radiusDragEnd($event: any) {
      console.log($event);
      this.radiusLat = $event.coords.lat;
      this.radiusLong = $event.coords.lng;
      this.showHideMarkers();
    }
  
    event(type,$event) {
      console.log(type,$event);
      this.radius = $event;
      this.showHideMarkers();
    }

    clickedMarker(label: string, index: number) {
      console.log(`clicked the marker: ${label || index}`)
    }
    
    getDistanceBetween(lat1,long1,lat2,long2){
      var from = new google.maps.LatLng(lat1,long1);
      var to = new google.maps.LatLng(lat2,long2);
  
      if(google.maps.geometry.spherical.computeDistanceBetween(from,to) <= this.radius){    
        console.log('Radius',this.radius);
        console.log('Distance Between',google.maps.geometry.spherical.computeDistanceBetween(
          from,to
        ));
        return true;
      }else{
        return false;
      }
    }


    findAdress(){
      this.mapsAPILoader.load().then(() => {
           let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
           autocomplete.addListener("place_changed", () => {
             this.ngZone.run(() => {
               // some details
               let place: google.maps.places.PlaceResult = autocomplete.getPlace();
               this.address = place.formatted_address;
               this.web_site = place.website;
               this.nameplace = place.name;
               this.zip_code = place.address_components[place.address_components.length - 1].long_name;
               //set latitude, longitude and zoom
               this.latitudedest = place.geometry.location.lat();
               this.longitudedest = place.geometry.location.lng();
               this.zoom = 8;
               console.log("Adresse:", this.address);
             });
           });
         });
     }

    ngOnInit() {


      this.directshow = this.global.directshow;
      this.todayDate = Date.now();
      this.CodeSecret = '0';
      /****************************************** *
      this.networkListener = Device.addListener('networkStatusChange', (status) => {
        this.networkStatus = status;
        console.log('Network status changed', status);
      });
      ****************************************** */

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
    console.log('Notification reçue!', data);

    
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
     //       this.getCurrentLocation(user.uid);

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
            this.global.UserNameAbrev = this.NomPrenom.substring(0,4) + "...";
            this.VoyageEnCours = "0000";
            this.DateVoyageEnCours = '01/01/1900';
            if(userProfileSnapshot.data().isDriver)
              {
               // if(Date.parse(userProfileSnapshot.data().Date_Depart) >= Date.parse(this.datepipe.transform( new Date(Date.now()), 'dd/MM/yyyy')))
               // {
                       this.VoyageEnCours = userProfileSnapshot.data().Id_Voyage;
                       this.global.VoyageEnCours = userProfileSnapshot.data().Id_Voyage;

                        firebase
                          .firestore()
                          .doc(`/VoyagesList/${this.VoyageEnCours}`)
                          .get()
                          .then(  Snapshot => {

                            if(Snapshot.data() != undefined)
                            {


                              firebase.firestore().collection("DestinationsList")
                             .get().then(snap => {
                                snap.forEach(doc => {
                             //   if(this.VoyagesEncoreValides.includes(doc.data()['Id_Voyage']))
                                  if(Snapshot.data().Source == doc.data()['Id_Destination'])
                                  this.SourceVoyageEnCours = doc.data()['NomDestination'];
                                    if(Snapshot.data().destination == doc.data()['Id_Destination'])
                                    this.DirVoyageEnCours = doc.data()['NomDestination'];  
                               
                                })
                             //   this.ResNbr = this.Reservations.length;
                            //    console.log("ResNbr" + this.ResNbr);
                              });

                              this.DateVoyageEnCours = Snapshot.data().Date_voyage;

                            }
                          });
              //  }
              }
            
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

   //     this.Reservations = [];
   //     this.ResNbr = 0;
        var email = this.user;
        console.log("email:", email);


        this.SourcesList = [];
        var query0 = firebase.firestore().collection("DestinationsList");
    
        await query0.get().then(async snap => {
         
         snap.forEach(async doc => {
           if(doc.data() != undefined)
           {
             this.SourcesList.push(doc.data());
           }
          })
        });
  


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
  this.ResNbr = 0;
  var query =   firebase.firestore().collection("ReservationsList").where('Driver','==', email);
        
 await query.get().then(snap => {
  snap.forEach(doc => {
  if(doc.data()['Id_Voyage'] == this.VoyageEnCours)
  {
    ReservationsAuChargement.push(doc.data());
    //this.Reservations.push(doc.data());
   // this.Reservations.push(doc.data());
  
   this.ResNbr++;
  }
  
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
       this.Reservations = [];
       this.ResNbr = 0;
       
       this.unsubscribe = firebase.firestore().collection("ReservationsList").where('Driver', '==', email)
        .onSnapshot(querySnapshot => {
        
         
         
          querySnapshot.docChanges().forEach(change => {

              if( change.doc.data()['Id_Voyage'] == this.VoyageEnCours )
              {
                if (change.type === "added") {
                this.Reservations.push(change.doc.data());
                this.ResNbr++;
                if(querySnapshot.size != ReservationsAuChargement.length)
                this.NotifAlert("Nouvelle reservation reçu!" + JSON.stringify(change.doc.data())); 
              }
              if (change.type === "modified") {
              //    this.Reservations.push(change.doc.data());
               // this.ResNbr++;
               this.Reservations.forEach( (element) => {
                if(element.Client == change.doc.data()['Client'])
                  element.Confirme = change.doc.data()['Confirme'];
                });
               console.log("Le champs modifié: ", change.doc.data());
              }
              if (change.type === "removed") {
              //  this.Reservations.push(change.doc.data());
                this.ResNbr--;
                console.log("Le champs supprimé: ", change.doc.data());
              }

              }
             
             // this.NotifSubject.next(Reservations);
        });
  
     /*   if(this.Reservations.length != ReservationsAuChargement.length)
        {
          console.log("Reservations au chargement" , ReservationsAuChargement);
          console.log("Nouvelle reservation reçu!" , this.Reservations);

          this.NotifAlert("Nouvelle reservation reçu!"); 
        }*/
        
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

//this.VoyagesEncoreValides = [];
//var query = firebase.firestore().collection("userProfile").where('isDriver','==', true);

//await query.get().then(async snap => {
  
  //snap.forEach(doc => {
  // if(doc.data()['Date_Depart'] >= this.datepipe.transform( new Date(Date.now()), 'dd/MM/yyyy'))
  //  this.VoyagesEncoreValides.push(doc.data()['Id_Voyage']);
    
  //});
  //console.log("Nbr de voyages encore valides" + snap.size);
  //console.log("Voyages encore valides" + this.VoyagesEncoreValides.length);
      

  this.VoyagesEncoreValides = [];
  var query = firebase.firestore().collection("userProfile").where('isDriver','==', true);
  
   await query.get().then(async snap => {
    
    snap.forEach(async doc => {
      if(doc.data() != undefined)
      {
             var Id_Voyage = doc.data()['Id_Voyage'];
             
             if(Id_Voyage != '')
             {
              console.log("Id_Voyage", Id_Voyage);
                await firebase
                   .firestore()
                   .doc(`/VoyagesList/${Id_Voyage}`)
                   .get()
                   .then(resp => {
                     if(resp.data() != undefined)
                     {
                       console.log(Date.parse(this.datepipe.transform(resp.data().Date_voyage, 'yyyy-MM-dd  h:mm:ss')));
                       console.log(Date.parse(this.datepipe.transform( new Date(Date.now()), 'yyyy-MM-dd  h:mm:ss')));
                       if(Date.parse(resp.data().Date_voyage) >= Date.parse(this.datepipe.transform( new Date(Date.now()), 'yyyy-MM-dd  h:mm:ss')))
                          this.VoyagesEncoreValides.push(Id_Voyage);
                     }
                  })
              }
      }
    })
  });


this.Reservations = [];
this.ResNbr = 0;
        var query = firebase.firestore().collection("ReservationsList").where('Client','==', this.user);

        await query.get().then(async snap => {
         
          snap.forEach( doc => {
              if(this.VoyagesEncoreValides.includes(doc.data()['Id_Voyage']))
              this.Reservations.push(doc.data());
            })
            
          this.ResNbr = this.Reservations.length;
          console.log("this.Reservations:" + this.Reservations);
          console.log("ResNbr:" + this.ResNbr);
      
      });

 if(this.ResNbr > 0 )
 {
          
        //  console.log(this.Reservations);
/**********!!!!!!!!******************Update de la destination******************!!!!!!!!**************** */
var Id_Voyage = this.Reservations[0].Id_Voyage;
console.log("Id_Voyage=", Id_Voyage);
//var query = firebase.firestore();
await firebase
          .firestore()
          .doc(`/VoyagesList/${Id_Voyage}`)
          .get()
          .then(resp => {
// this.ResNbr =  snap.size;
this.Direction = resp.data().destination;
if(this.Direction == "TK")
            this.NomDirection = "Tunis - Kébili";
if(this.Direction == "KT")            
            this.NomDirection = "Kébili - Tunis";
this.selected_value0 = resp.data().Date_voyage;


//var db = firebase.firestore();
//db.collection("userProfile").doc(this.userId).update("Dir", this.Direction );



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


       //     });
 //  });      
  
            console.log("Passager");
          }
      }
 
/*********************************************Controle du device utilisé pour l'accès********************************************* */         
if(this.pended)
{ //compte pas encore validé
  this.CodeSecret = '0';
  await this.presentAlert2("Votre inscription n'est pas encore validée");
 
}
else // detection du id du device
{

  var info = await Device.getInfo();
  this.info = info.uuid;
  console.log("this.info:", this.info);

    if(this.info === this.UUID)
    {

      this.CodeSecret = '123';
      if(!this.isDriver && !this.isAdmin  && this.ResNbr > 0)
                  this.openModal(this.Reservations, 1);
     await this.getMyLocation();

      
      
   }
   else
   {
      this.CodeSecret = '0';
      await this.presentAlert3("Vous avez changé de Device! pour continuer veuillez saisir votre code secret");
                 
   }     

   /********************************************************** */
   firebase.firestore().collection("ReservationsList").where('Client', '==', this.user)
   .onSnapshot(querySnapshot => {
   
    
    
     querySnapshot.docChanges().forEach(change => {

        
           if (change.type === "modified") {
          
           this.Reservations[0].Confirme = change.doc.data()['Confirme'];
           if(this.Reservations[0].Confirme && !this.Reservations[0].scanned)
             alert('Votre réservation est confirmé!, vous pouvez consulter votre ticket électronique');
           this.Reservations[0].scanned = change.doc.data()['scanned']; 
           if(this.Reservations[0].Confirme && this.Reservations[0].scanned)
             alert('Votre ticket est scannée avec succès!')
           }
        
       })
     });
   /********************************************************** */
  
  
 }

/******************************************************************************** */

   });
  }
 });
}
    
checkGPSPermission() 
{ 			  
 this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
  result => {
    if (result.hasPermission) {
      this.getCurrentLocation(this.userId);
    } else {
      this.requestLocationPermission();
    }
  },
  err => {
    alert(err);
  }
);
}


requestLocationPermission() { this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
  result => {
    if (result.hasPermission) {
      this.getCurrentLocation(this.userId);
    } else {
      alert("Vous ne pouvez pas utiliser l'application! Veuillez activer la localisation")
    }
  },
  err => {
    alert(err);
  }
);

}


afficherModal()
{
this.openModal(this.Reservations, 2);
}

async openModal(Reservations, option: number) {
  
  var query0 = firebase.firestore().collection("ReservationsList").where('Client','==', this.user);
  //var query2 = query.where('Dir','==', this.Direction);
  //var query3 = query2.where('isDriver','==', true);
  var confirme: boolean =  false;
 await query0.get().then(async snap => {
   snap.forEach(doc => {
     if(Reservations[0].Id_Voyage == doc.data()['Id_Voyage'])
     {
          confirme = doc.data()['Confirme'];
     }
   })
 });

 if( this.Reservations[0] != undefined)
 {
    try {
      var reservations: Array<any> = Reservations;
      var Source;
      var Direction;
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
   
      var query = await firebase.firestore().collection("VoyagesList").doc(this.Reservations[0].Id_Voyage)
      .get()
      .then(async snapshot => {
        

       await firebase.firestore().collection("DestinationsList")
        .get().then(snap => {
         // this.ResNbr =  snap.size;
          snap.forEach(doc => {
       //   if(this.VoyagesEncoreValides.includes(doc.data()['Id_Voyage']))
            if(snapshot.data().Source == doc.data()['Id_Destination'])
            {
              this.NomSource =  doc.data()['NomDestination'];
              Source = doc.data()['NomDestination'];
            }
                    
            if(snapshot.data().destination == doc.data()['Id_Destination'])
            {
              this.NomDirection = doc.data()['NomDestination']; 
              Direction = doc.data()['NomDestination'];  
            }
                    
         
          })

        });

                   Date_Depart = snapshot.data()['Date_voyage'];

  
          });
     



      console.table(reservations);
      const modal = await this.modalController.create({
      component: MyModalPage, 
      componentProps: {
        "paramUser": this.user,
        "paramClient": this.NomPrenom, 
        "paramID": this.Reservations[0].Id_Voyage,
        "paramDate": Date_Depart,
        "paramSource": Source,
        "paramDir": Direction,
        "paramChauffeur": reservations[0].Driver,
        //"paramConfirme": reservations[0].Confirme,
        "paramConfirme": confirme,
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

async getMyLocation() {
  const hasPermission = await this.locationService.checkGPSPermission();
  if (hasPermission) {
    if (Capacitor.isNative) {
      const canUseGPS = await this.locationService.askToTurnOnGPS();
      this.postGPSPermission(canUseGPS);
    }
    else { this.postGPSPermission(true); }
  }
  else {
    const permission = await this.locationService.requestGPSPermission();
    if (permission === 'CAN_REQUEST' || permission === 'GOT_PERMISSION') {
      if (Capacitor.isNative) {
        const canUseGPS = await this.locationService.askToTurnOnGPS();
        this.postGPSPermission(canUseGPS);
      }
      else { this.postGPSPermission(true); }
    }
    else {
      const alert = await this.toastController.create({
        message: 'User denied location permission'
      })
      alert.present();
    }
  }
}

async postGPSPermission(canUseGPS: boolean) {
 // if (canUseGPS) { this.watchPosition(this.userId); }
  if(canUseGPS) { this.getCurrentLocation(this.userId)}
  else {
    const alert = await this.toastController.create({
      // cssClass: 'my-custom-class',
       header: 'Alerte',
       
       message: 'Please turn on GPS to get location',
       buttons: ['OK']
     });
 
     await alert.present();
  }
}

async watchPosition(userId: string) {
  var lat0: number;
  var lng0: number;
  this.address0 = "Pas de geolocalisation";
  try {
    this.watchId = await Plugins.Geolocation.watchPosition({}, (position, err) => {
      this.ngZone.run(() => {
        if (err) { console.log('err', err); return; }
        this.latnow = position.coords.latitude;
        this.lngnow = position.coords.longitude;
        this.latme = position.coords.latitude;
        this.latme0 = position.coords.latitude;
        this.lngme = position.coords.longitude;
        this.lngme0 = position.coords.longitude;
        this.clearWatch();
      })
    })

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

      console.log('latme', this.latme);
      console.log('lngme', this.lngme);
      let latlng = this.latme.toString() + "" + this.lngme.toString() + this.email ;

      var db = firebase.firestore();
        
                db.collection("userProfile").doc(userId).update("Address", this.address0 );
                db.collection("userProfile").doc(userId).update("lat", this.latme);
                db.collection("userProfile").doc(userId).update("lng", this.lngme);
                db.collection("userProfile").doc(userId).update("latlng", latlng);
 
      /****************** */

  }
  catch (err) { console.log('err', err) }
}

clearWatch() {
  if (this.watchId != null) {
    Plugins.Geolocation.clearWatch({ id: this.watchId });
  }
}

 async getCurrentLocation(userId: string) {
    var lat0: number;
      var lng0: number;
      this.address0 = "Pas de geolocalisation";
    await Plugins.Geolocation.getCurrentPosition().then(result => {
     lat0 = result.coords.latitude;
     lng0 = result.coords.longitude;
      this.latme = lat0;
      this.latme0 = lat0;
      this.lngme = lng0;
      this.lngme0 = lng0;

      this.latitudedest = lat0;
      this.longitudedest = lng0;

      this.radiusLat = lat0;
      this.radiusLong = lng0;
      this.zoom = 8;
      /**************************************************** */
      this.SourcesList = [];

      var query = firebase.firestore().collection("DestinationsList");
        
         query.get().then(snap => {
           
          snap.forEach(doc => {
            let from = new google.maps.LatLng(this.radiusLat,this.radiusLong);
            let to = new google.maps.LatLng(doc.data()['lat'],doc.data()['lng']);
            let isShown: boolean;
            if(google.maps.geometry.spherical.computeDistanceBetween(from,to) <= this.radius){ 
                isShown = true;
                this.SourcesList.push(doc.data());
            }
            else
                isShown = false;
            this.markers.push(
              {
                
                lat: doc.data()['lat'],
                lng: doc.data()['lng'],
                label: doc.data()['Id_Destination'],
                draggable: false,
                content: doc.data()['NomDestination'],
                description: doc.data()['Desc'],
                isShown:isShown,
                icon:'assets/icons/mapMarker.png'
              }
              
            );
            
          })
       
        });
     
     
      /**************************************************** */
      
      this.origin = { lat: this.latme, lng: this.lngme };
      this.destination = { lat: 33.72769, lng: 8.98021 };

      // calling getAddress function to decode the address
      });

      // Activer cet appel quand vous payerez l'accès à cette API google
      //this.getAddress(this.latme, this.lngme).subscribe(decodedAddress => {
      //  this.address0 = decodedAddress;
      //});
      
      this.address0 = "Quelque part dans le monde";

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
  
 onVoyageSelected(event, directshow: boolean){
  console.log(event);
  
  if( this.ResNbr == 0)
  this.presentToast(event, directshow);
  else
   this.presentAlert("Vous avez déja réservé une place!");
 }

  onMarkerClick(event, directshow: boolean) {
    if( this.ResNbr == 0)
    this.presentToast(event, directshow);
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
                        this.getMyLocation();
                        

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
                      let DateNow = this.datepipe.transform( new Date(Date.now()), 'yyyy-MM-dd  h:mm:ss');   
                      let DateAVerifie = this.datepipe.transform( new Date(this.DateVoyage), 'yyyy-MM-dd  h:mm:ss');
     if(Date.parse(DateAVerifie) >= Date.parse(DateNow))  
     {                 
                      let record = {};
    record['Date_voyage'] = DateAVerifie;
    record['Driver'] = this.user;
    record['confirme']= true;
    record['Source']= this.Source;
    record['destination']= this.Destination;
    record['NbrReservations']= 0;
    var id_voyage : any;
    /********************Ajout du nouveau voyage à la collection VoyagesList ***************** */
 this.firestore.collection('VoyagesList').add(record).then( resp =>  {
      
 // id_voyage = resp.id;

  console.log(resp.id);
  this.VoyageEnCours = resp.id;
  
  this.SourceVoyageEnCours= this.Source;
  this.DateVoyageEnCours= DateAVerifie;
  this.DirVoyageEnCours= this.Destination;


  console.log("Date du voyage ajoutée avec succès!");
     /*******************Update du Id_Voyage du driver**pour savoir tjs le voyage en cours********* */
        var db = firebase.firestore();
        
        db.collection("userProfile").doc(this.userId).update("Id_Voyage", this.VoyageEnCours ).then( resp => {
        
          console.log(resp);
          console.log("id_voyage en cours changée avec succès!");
          

        })
          .catch(error => {
            console.log(error);
          });
/**************************Remise à zéro du NbrReservations du driver*************************** *
          db.collection("VoyagesList").doc(this.VoyageEnCours).update("NbrReservations", 0 ).then( resp => {
        
            console.log(resp);
            console.log("NbrVoyages remis à zéro!");
  
          })
            .catch(error => {
              console.log(error);
            });
/****************************Update de la destination******************************************* *
        db.collection("VoyagesList").doc(this.VoyageEnCours).update("Destination", this.Destination ).then( resp => {
          
            console.log(resp);
            console.log("Dir changée avec succès!");
  
          })
            .catch(error => {
              console.log(error);
            });
/**************************Update de la date de départ******************************************* *
            db.collection("VoyagesList").doc(this.VoyageEnCours).update("Date_voyage", DateAVerifie ).then( resp => {
        
            
              console.log(resp);
              console.log("Date de départ changée avec succès!");
    
            })
              .catch(error => {
                console.log(error);
              });
   /********************************************************************************************* */           

   })
     .catch(error => {
     console.log(error);
    });
                      
  /********************************************************************************************** */                    
  }
  else
  {
    console.log('Date choisie doit etre supèrieure ou égale à la date d\'aujourd\'hui!');
  }               
}             
  }      
                    
            ]
    });

    await alert.present();
  }
    // function to display the toast with location and dismiss button

  async presentToast(event, directshow: boolean) {
   // this.NbrReservations = 0;    
    var mess ='';
      if(directshow)
      {
      let latlgn = event.lat.toString() + event.lng.toString() + event.email.toString();
      var db = firebase.firestore();
      await db.collection("userProfile").where("latlng","==",latlgn).get()
      .then( querySnapshot => {

          querySnapshot.forEach(async doc => {
            this.SelectedUserId = doc.id;
            console.log(doc.id, " => ", doc.data());
              // doc.data() is never undefined for query doc snapshots
       })
      })
      .catch(function(error) {
        console.log("Error getting lat & lng: ", error);
     });
    }
    else
    {
      var db = firebase.firestore();
      await db.collection("userProfile").where("email","==",event.Driver).get()
      .then( querySnapshot => {

          querySnapshot.forEach(async doc => {
            this.SelectedUserId = doc.id;
            console.log(doc.id, " => ", doc.data());
              // doc.data() is never undefined for query doc snapshots
       })
      })
      .catch(function(error) {
        console.log("Error getting lat & lng: ", error);
     });

    }
            
      var Tel: string = '';             /****************************************** */
await firebase
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
  this.VoyageEnCours = userProfileSnapshot.data().Id_Voyage;
  this.latitudedest = userProfileSnapshot.data().lat;
  this.longitudedest = userProfileSnapshot.data().lng;
 // Tel = userProfileSnapshot.data().Tel;
});

await firebase
.firestore()
.doc(`/VoyagesList/${this.VoyageEnCours}`)
.get()
.then( Snapshot => {
  
  this.SelectedUserDateDepart = Snapshot.data().Date_voyage;
  //this.VoyageEnCours = Snapshot.id;
  this.SelectedUserSource = Snapshot.data().Source; 
  this.SelectedUserDir = Snapshot.data().destination;
  this.NbrReservations = Snapshot.data().NbrReservations;
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
  var visibilite: string = '';
  
  if(Date.parse(this.SelectedUserDateDepart) < Date.parse(this.datepipe.transform( new Date(Date.now()), 'yyyy-MM-dd  h:mm:ss')) )
  {
    mess = 'Aujourd\'hui ce Driver n\'a pas de voyage en cours';
    visibilite = 'error';
  }
    else
  {
    if(this.NbrReservations < 8)
    {



      var query = firebase.firestore().collection("DestinationsList");
        //var query2 = query.where('Dir','==', this.Direction);
        //var query3 = query2.where('isDriver','==', true);
      
       await  query.get().then(snap => {
         // this.ResNbr =  snap.size;
          snap.forEach(doc => {
       //   if(this.VoyagesEncoreValides.includes(doc.data()['Id_Voyage']))
            if(this.SelectedUserSource == doc.data()['Id_Destination'])
              this.NomSource = doc.data()['NomDestination'];
              if(this.SelectedUserDir == doc.data()['Id_Destination'])
              this.NomDirection = doc.data()['NomDestination'];  
         
          })
       //   this.ResNbr = this.Reservations.length;
      //    console.log("ResNbr" + this.ResNbr);
        });


      mess = 'Le Driver' +  this.SelectedUser + '.<br/>Tél:' + this.SelectedUserTel + '<br/> Nombre de places réservés: ' + this.NbrReservations + '<br/>Partira le:' + this.SelectedUserDateDepart + 'De' + this.NomSource + 'Vers ' + this.NomDirection;
      visibilite = 'success'
    }
    else
    {
      mess= 'Toutes les 8 places du Driver: ' +  this.SelectedUser + ' sont réservées';
      visibilite = 'error';
    }
  }

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
        if(directshow)
         this.onToastClick(event.email, event.Tel, event.lat.toString(), event.lng.toString()).then(()=>{
                   
        })
        else
        this.onToastClick(event.Driver, this.SelectedUserTel, this.latitudedest.toString(), this.longitudedest.toString()).then(()=>{
                   
        })
        
     },
    }
    ]
});

const toasterror = await this.toastController.create({
  //message: this.address,

  message: mess,
 //message: driver +  this.SelectedUser  + 'places réservés',

  duration: 8000,
   // showCloseButton: true,
  //  closeButtonText: "Reserver",
  position: "middle",
  
});
if(visibilite == 'success')
    toast.present();
else
    toasterror.present();







/****************************************** */
         
             // this.SelectedUser = doc.data().email;
          //  });

   

}
  

    

    async onToastClick(email:string, Tel:string, lat:string , lng:string){

      /********************Obtenir le nombre de reservations du Driver where email (Client) selected*********** */
      const toasterror =   await this.toastController.create({
        //message: this.address,
      
       message: 'Vous avez déja réservé une place auparavant OU le max de place est atteint!',
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



    //  var db = firebase.firestore();
    //  db.collection("userProfile").where("email","==", this.selectedUsermail).get()
   //   .then( async querySnapshot => {

/*****************Chercher des tentatives précedentes qui ne sont pas dépassé par la date d'aujourd'hui******************* */
//var db = await firebase.firestore().collection("VoyagesList").doc(this.VoyageEnCours).get().then( snap => {

 
    //if(snap.data()['Date_Depart'] >= this.datepipe.transform( new Date(Date.now()), 'dd/MM/yyyy'))
    //{
      var db = firebase.firestore();
       db.collection("ReservationsList").where('Client','==', this.user).where('Id_Voyage','==', this.VoyageEnCours).get()
      .then( querySnapshot => {
        
        this.existe = querySnapshot.size;
        console.log('Tentatives précedentes pour le voyage en cours:' + this.existe);
       
      
      });

    //}
 
//});


/******************old code remplacé par celui au dessus le 19/10/2020
await this.firestore.collection('ReservationsList', x => x.where('Client','==',this.user)).snapshotChanges().subscribe(  data => {
  this.existe =  data.length ;
  console.log('Tentatives précedentes:' + this.existe);
});
/********************************************************** */

  //        querySnapshot.forEach( doc => {
  //          console.log(doc.id, " => ", doc.data());
    //        firebase
//.firestore()
//.doc(`/userProfile/${doc.id}`)
//.get()
//.then(  async userProfileSnapshot => {

    //console.log(user.uid);
   // console.log('NbrReservations du chauffeur selectionné:'  + this.NbrReservations);
      /******************************* */
      if(this.NbrReservations < 8){
       
        
        if(this.existe == 0)
        {
        let record = {};
        record['Client'] = this.user;
        record['NomPrenom'] = this.NomPrenom;
        record['Tel'] = Tel;
        record['Driver']= this.selectedUsermail;
        record['Id_Voyage']= this.VoyageEnCours;
        record['Confirme']=false;
       // record['NbrReservations'] = this.NbrReservations + 1;
      this.firestore.collection('ReservationsList').add(record).then(async resp => {

        this.ResNbr = 1;

        var db = firebase.firestore();
         await  db.collection("VoyagesList").doc(`${this.VoyageEnCours}`).update("NbrReservations",this.NbrReservations + 1 ).then(async () => {
        //this.address = this.address;
             // console.log(resp);
            // console.log("Reservation faite avec succès!");
            /*************************Réservations en cours************************************* */
            if(this.Direction == "TK")
            this.NomDirection = "Tunis - Kébili";
if(this.Direction == "KT")            
            this.NomDirection = "Kébili - Tunis";

this.selected_value0 = this.SelectedUserDateDepart;

//this.VoyagesEncoreValides = [];
//var query = firebase.firestore().collection("userProfile").where('isDriver','==', true);

 //await query.get().then(async snap => {
  
 // snap.forEach(doc => {
//    if(doc.data()['Date_Depart'] >= this.datepipe.transform( new Date(Date.now()), 'dd/MM/yyyy'))
//    this.VoyagesEncoreValides.push(doc.data()['Id_Voyage']);
 // });
  //console.log("Voyages encore valides" + snap.size);
  //console.log("Voyages encore valides" + this.VoyagesEncoreValides.length);
//  this.ResNbr = 0;
this.Reservations = [];
        var query = firebase.firestore().collection("ReservationsList").where('Client','==', this.user).where('Id_Voyage','==', this.VoyageEnCours);
        //var query2 = query.where('Dir','==', this.Direction);
        //var query3 = query2.where('isDriver','==', true);
      
       await  query.get().then(snap => {
         // this.ResNbr =  snap.size;
          snap.forEach(doc => {
       //   if(this.VoyagesEncoreValides.includes(doc.data()['Id_Voyage']))
            this.Reservations.push(doc.data());
         
          })
       //   this.ResNbr = this.Reservations.length;
      //    console.log("ResNbr" + this.ResNbr);
        });

          if(this.ResNbr > 0 && this.CodeSecret == '123' && this.Reservations != undefined)
          this.openModal(this.Reservations, 2);

     
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
        toasterror.present();
      }

 //   })
 // });
//});

   
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
      //this.unsubscribe();
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
  async SelectDir()
  {
    this.DestinationsList = [];
    var query = firebase.firestore().collection("DestinationsList").where('Id_Destination','!=', this.Source);
  
     await query.get().then(async snap => {
     
     snap.forEach(async doc => {
       if(doc.data() != undefined)
       {
         this.DestinationsList.push(doc.data());
       }
      })
    });
  }

  async DirChange()
  {
   /***********************************************************/ 
  // if (this.DatesList != undefined)
  //  this.DatesList.nativeElement.value = '------';
    this.selected_value0 = '';
   this.DatesVoyages = [];
   this.VoyagesEncoreValidesAllInfos = [];
   if(this.global.directshow)
   {
    var query = firebase.firestore().collection("userProfile").where('Dir','==', this.Direction).where('isDriver','==', true);
  
    query.get().then(snap => {
      this.NbrVoyages =  snap.size;
      snap.forEach(doc => {
        //let UneDateVoyage = new Date(JSON.stringify(doc.data()));  
        //let DateNow = new Date(Date.now()); 
        let DateNow = this.datepipe.transform( new Date(Date.now()), 'yyyy-MM-dd  h:mm:ss');
     //   console.log("Aujourd'hui", DateNow)
        if(Date.parse(doc.data()['Date_Depart']) >= Date.parse(DateNow))
      this.DatesVoyages.push(doc.data());
         
      console.log(this.DatesVoyages);
      console.log(this.NbrVoyages);
      });
    
  });
  }
  else
  {

    this.VoyagesEncoreValidesAllInfos = [];
    var query = firebase.firestore().collection("userProfile").where('isDriver','==', true);
  
     await query.get().then(async snap => {
     
     snap.forEach(async doc => {
       if(doc.data() != undefined)
       {
              var Id_Voyage = doc.data()['Id_Voyage'];
              
              if(Id_Voyage != '')
              {
               console.log("Id_Voyage", Id_Voyage);
                 await firebase
                    .firestore()
                    .doc(`/VoyagesList/${Id_Voyage}`)
                    .get()
                    .then(resp => {
                      if(resp.data() != undefined)
                      {
                        console.log('Direction', this.Direction);
                        console.log('destination', resp.data().destination);
                        console.log('resp.data()', resp.data());
                        console.log(Date.parse(this.datepipe.transform(resp.data().Date_voyage, 'yyyy-MM-dd  h:mm:ss')));
                        console.log(Date.parse(this.datepipe.transform( new Date(), 'yyyy-MM-dd  h:mm:ss')));
                       
                        if(resp.data().destination == this.Direction && Date.parse(resp.data().Date_voyage) >= Date.parse(this.datepipe.transform( new Date(), 'yyyy-MM-dd  h:mm:ss')))
                          {
                             this.VoyagesEncoreValidesAllInfos.push(resp.data());
                             console.log('pushed!');
                          }
                         
                      }
                   });
               }
       }
     })
    
   });

   console.log(this.VoyagesEncoreValidesAllInfos);


  }

   
 
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
