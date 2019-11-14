import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from './../service/auth.service';
import { CrudService } from './../service/crud.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import {global} from "src/global";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {NotificationsService} from '../service/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  public loginForm: FormGroup;
  public loading: HTMLIonLoadingElement;
/************* */

public UserRef$: Observable<unknown[]>;
public data;
public id;
/************** */
  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private authService: AuthService,
    private crudService: CrudService,
    private router: Router,
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    private global: global,
    private notificationsService: NotificationsService) { 
      this.loginForm = this.formBuilder.group({
        email: ['',
          Validators.compose([Validators.required, Validators.email])],
        password: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
      });

    }

  

  async ngOnInit() {
    
    await this.notificationsService.init();
}
  async ngAfterViewInit() {
 
     await this.notificationsService.requestPermission();
  }
  
  async loginUser(loginForm: FormGroup): Promise<void> {
    if (!loginForm.valid) {
      console.log('Form is not valid yet, current value:', loginForm.value);
    } else {
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();
  
      const email = loginForm.value.email;
      const password = loginForm.value.password;
  
      this.authService.loginUser(email, password).then(
        () => {
          this.loading.dismiss().then(() => {
/********************************** */
            
this.UserRef$ = this.firestore.collection('Passagers/', ref =>
ref.where('Email', '==', email)).snapshotChanges().pipe(
  
  map(actions => {
      return actions.map(a => {
        this.data = a.payload.doc.data();
        this.id = a.payload.doc.id;
        
      });
    })
    
);

            this.firestore.doc('Passagers/' + this.id).update({PushToken : this.global.PushToken});

 /******************************************* */           
            this.router.navigateByUrl('home');
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
    }
  }
}
