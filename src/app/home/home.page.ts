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
import { stringify } from 'querystring';

import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../modals/my-modal/my-modal.page';
import { Title } from '@angular/platform-browser';

//import { HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})




export class HomePage implements OnDestroy, OnInit {

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
  public DateVoyage;
  public Destination: string;
  public current;
  public existe: number = 0;
  public Mysnapshot: any;
  public selected_value0;
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
  
  
  
  
    
  private ngUnsubscribe = new Subject();
  public loading: HTMLIonLoadingElement;

  public isAdmin: boolean = false;
  public isDriver: boolean = false;
  public email: string;
  public NomPrenom: string;
  public isClient = false;
  public Reservations: any;
  public ResNbr: number;
  public Direction: string;
  public DatesVoyages: any;
  public NbrVoyages: number;
  public user: string;
  public userId: string;
  public pended: boolean;
  public Mytoken: any;
  private geoCoder;
  dataReturned: any;


  constructor( private firestore: AngularFirestore, private loadingCtrl: LoadingController, public alertCtrl: AlertController, private crudService: CrudService, private authservice: AuthService, private router: Router,
    private http: HttpClient,
    public toastController: ToastController,
    public modalController: ModalController,
    public alertController: AlertController

    ) {}


   ngOnInit() {

  
      this.crudService.read_Users().subscribe(data => {
     
      this.Users = data.map(e => {
        var driver: string = "";
        
        if(e.payload.doc.data()['isDriver'])
       {
          driver = "chauffeur"; 
       }
        else
          driver = "Client";
       
        return {
          NomPrenom: e.payload.doc.data()['NomPrenom'], 
          email: e.payload.doc.data()['email'],
          address: e.payload.doc.data()['Address'],
          lat: e.payload.doc.data()['lat'],
          lng: e.payload.doc.data()['lng'],
          Tel: e.payload.doc.data()['Tel'],
          driver: driver
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


     firebase.auth().onAuthStateChanged(user => {
      if (user) {

        // call get current location function on initializing
            this.getCurrentLocation(user.uid);

        firebase
          .firestore()
          .doc(`/userProfile/${user.uid}`)
          .get()
          .then(  userProfileSnapshot => {

            console.log(user.uid);
            
           if (userProfileSnapshot.data().email)
            this.user = userProfileSnapshot.data().email;
            this.userId = user.uid;
            this.pended = userProfileSnapshot.data().pending;
            this.isAdmin = userProfileSnapshot.data().isAdmin;

            this.isDriver = userProfileSnapshot.data().isDriver;
            this.NomPrenom = userProfileSnapshot.data().NomPrenom; 
            this.VoyageEnCours = userProfileSnapshot.data().Id_Voyage;
            this.DateVoyageEnCours = userProfileSnapshot.data().Date_Depart;
           // this.Direction = userProfileSnapshot.data().Dir;
            
          }).then(() => {

            if(this.pended){
              this.presentAlert2("Pas encore validé!!")
              this.Logout();
              this.router.navigateByUrl("login");
            }



            if(this.isAdmin)
            console.log("Admin");
            else
            {
              if(this.isDriver)
              {  
        /*****************Liste des réservations******************* */

        this.Reservations = [];
        var query = firebase.firestore().collection("ReservationsList").where('Driver','==', this.user);
        //var query2 = query.where('Dir','==', this.Direction);
        //var query3 = query2.where('isDriver','==', true);
      
        query.get().then(snap => {
         // this.ResNbr =  snap.size;
          snap.forEach(doc => {
          if(doc.data()['Id_Voyage'] == this.VoyageEnCours)
            this.Reservations.push(doc.data());
         
          });
          this.ResNbr = this.Reservations.length;

      //    if(this.ResNbr > 0)
      //    this.openModal(this.Reservations);


        });
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
          else{

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


          if(this.ResNbr > 0)
          this.openModal(this.Reservations, 1);
          console.log(this.Reservations);
        });
 });      
/************************************************************************************ */       

            console.log("Passager");
          }
      }
          });
      }
    });
    

}
 

async openModal(Reservations, option: number) {
  
    try {
      var reservations = Reservations;
      var Date_Depart;
      var Titlem = "";
        if(option == 1)
        Titlem="Vous avez déja réservé une place dont voici les détails!";
        else
        Titlem="Votre réservation dont voici les détails, est envoyée avec succès";
      var query = await firebase.firestore().collection("VoyagesList").doc(reservations[0].Id_Voyage).get().then(snap => {
        
 
    Date_Depart = snap.data()['Date_voyage'];
  
 });



      console.table(reservations);
          const modal = await this.modalController.create({
      component: MyModalPage,
      componentProps: {
        "paramID": reservations[0].Id_Voyage,
        "paramDate": Date_Depart,
        "paramChauffeur": reservations[0].Driver,
        "paramConfirme": reservations[0].Confirme,
        
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
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Pour rappel',
      message: MessageText,
      buttons: ['OK']
    });

    await alert.present();
  }

  
  async presentAlert2(MessageText) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: '',
      message: MessageText,
      //buttons: ['OK']
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

/*****************Tentatives précedentes******************* */
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


          if(this.ResNbr > 0)
          this.openModal(this.Reservations, 2);
       //   console.log(this.Reservations);
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
  ConfirmeRes(email : string){}

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

   this.DatesVoyages = [];
    var query = firebase.firestore().collection("userProfile").where('Dir','==', this.Direction).where('isDriver','==', true);
    //var query2 = query.where('Dir','==', this.Direction);
    //var query3 = query2.where('isDriver','==', true);
  
    query.get().then(snap => {
      this.NbrVoyages =  snap.size;
      snap.forEach(doc => {
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

   dateChanged()
  {
    if(this.ResNbr > 0){
    let message = "Réservations déja faites pour le voyage en cours";
    this.presentAlert(message);
    }
    else
    {
    let record = {};
    record['Date_voyage'] = this.DateVoyage;
    record['Driver'] = this.user;
    record['confirme']= true;
    record['destination']= this.Destination;
    var id_voyage : any;
    /********************Ajout du nouveau voyage à la collection VoyagesList ********************************** */
 this.firestore.collection('VoyagesList').add(record).then( resp =>  {
      
  id_voyage = resp.id;

  console.log(resp.id);
  console.log("Date du voyage ajouté avec succès!");
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
            db.collection("userProfile").doc(this.userId).update("Date_Depart", this.DateVoyage ).then( resp => {
        
            
              console.log(resp);
              console.log("Date de départ changée avec succès!");
    
            })
              .catch(error => {
                console.log(error);
              });

   })
     .catch(error => {
     console.log(error);
    });
      }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}

}
