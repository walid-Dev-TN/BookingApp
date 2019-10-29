import { Component , OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingController, AlertController } from '@ionic/angular';

import { CrudService } from './../service/crud.service';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy, OnInit {

  students: any;
  studentName: string;
  studentAge: number;
  studentAddress: string;

  Messages: any;
  Theme: string;
  Message: string;
  
    
  private ngUnsubscribe = new Subject();
  public loading: HTMLIonLoadingElement;

  public isAdmin = false;
  public user: string;

  constructor( private loadingCtrl: LoadingController, public alertCtrl: AlertController, private crudService: CrudService, private authservice: AuthService, private router: Router) {}


  ngOnInit() {

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .firestore()
          .doc(`/userProfile/${user.uid}`)
          .get()
          .then(userProfileSnapshot => {
            this.isAdmin = userProfileSnapshot.data().isAdmin;
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
      
 
    });


    this.crudService.read_Students().subscribe(data => {
 
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
        };
      })
      console.log(this.students);
      
 
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


  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}

  CreateRecord() {
    let record = {};
    record['Name'] = this.studentName;
    record['Age'] = this.studentAge;
    record['Address'] = this.studentAddress;
    this.crudService.create_NewStudent(record).then(resp => {
      this.studentName = "";
      this.studentAge = undefined;
      this.studentAddress = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  CreateMessage() {
    let record = {};
    record['Theme'] = this.Theme;
    record['Message'] = this.Message;
    record['User'] = this.user;
    
    this.crudService.create_NewMessage(record).then(resp => {
      this.studentName = "";
      this.studentAge = undefined;
      this.studentAddress = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

 
  RemoveRecord(rowID) {
    this.crudService.delete_Student(rowID);
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
    this.crudService.update_Student(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
