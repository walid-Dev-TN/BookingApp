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

  public Users: any;
  public Drivers: any;
  public SelectedUser: any;
  public SelectedDriver: boolean = false;
  public SelectedUserId: any;
  public SelectedUserTel: any;
  public NbrReservations: any;
  public DateVoyage;
  public Destination: string;
  public current;
  public existe: number = -1;
  public Mysnapshot: any;
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
  public isClient = false;
  public Reservations: any;
  public ResNbr: number;
  

  public user: string;
  public Mytoken: any;

  constructor( private firestore: AngularFirestore, private loadingCtrl: LoadingController, public alertCtrl: AlertController, private crudService: CrudService, private authservice: AuthService, private router: Router,
    private http: HttpClient,
    public toastController: ToastController
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
      
          driver = "Client"
       
        return {
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
          
    address: e.payload.doc.data()['Address'],
    email: e.payload.doc.data()['email'],
    lat: e.payload.doc.data()['lat'],
    lng: e.payload.doc.data()['lng'],
    Tel: e.payload.doc.data()['Tel'],
    
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



            this.isAdmin = userProfileSnapshot.data().isAdmin;

            this.isDriver = userProfileSnapshot.data().isDriver;

          
/*************************************************

            /********************************************
              firebase.database().ref(`userProfile/${user.uid}/isAdmin`).once("value").then( snapshot => {
              if (snapshot.exists()){
                this.Mysnapshot = snapshot.val();
            
              }
            }).then(() => {

              console.log("" + this.Mysnapshot);
              this.isAdmin = this.Mysnapshot.isAdmin;
             
            });
            /********************************************** */
            
          }).then(() => {
            if(this.isAdmin)
            console.log("Admin");
            else
            {
                
        /*****************Tentatives précedentes******************* */
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
/***********************************************************/





            console.log("Utilisateur normal");

            }
          });
      }
    });


 

  }
 
  // Function to get the current geo position of the device

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

      this.getAddress(this.latme, this.lngme).subscribe(decodedAddress => {
        this.address0 = decodedAddress;
       
      });
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
    this.presentToast(event);
  }
  
    // function to display the toast with location and dismiss button

    async presentToast(event) {
     

      await this.firestore.collection('ReservationsList', x => x.where('Driver','==', event.email)).snapshotChanges().subscribe(data => {
        if(data.length > 0)
        {
          this.NbrReservations = data.length;
          console.log("------------------------" + this.NbrReservations);
        }  
        else
        this.NbrReservations = 0;
      
      });
      
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
  this.SelectedUser = userProfileSnapshot.data().email;
  this.SelectedUserTel = userProfileSnapshot.data().Tel;


}).then(async  () => {

  
  var driver: any;
  if(this.SelectedDriver)
  driver = 'le chauffeur';
  else
  driver = '';
  const toast = await this.toastController.create({
  //message: this.address,

 message: driver + ': ' +  this.SelectedUser + '.<br/>Tél:' + this.SelectedUserTel + '<br/> Nombre de places réservés: ' + this.NbrReservations,
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
     text: 'RESERVER',
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
      db.collection("userProfile").where("email","==", this.SelectedUser).get()
      .then( async querySnapshot => {

/*****************Tentatives précedentes******************* */
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
        record['Tel'] = userProfileSnapshot.data().Tel;
        record['Driver']= this.SelectedUser;
       // record['NbrReservations'] = this.NbrReservations + 1;
      this.firestore.collection('ReservationsList').add(record).then( resp => {
        
      //  db.collection("userProfile").doc(`${doc.id}`).update("NbrReservations",userProfileSnapshot.data().NbrReservations + 1 ).then(() => {
        //this.address = this.address;
        console.log(resp);
        console.log("Reservation faite avec succès!");
      //});
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



  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}

}
