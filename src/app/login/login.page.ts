import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoadingController, NavController, AlertController} from '@ionic/angular';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

import { Plugins } from "@capacitor/core";
import { map } from "rxjs/operators";
//import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public loading: HTMLIonLoadingElement;
  verificationId: any;
  code = '';
  showCodeInput = false;
  phoneNumber: any;
  
  lat: number;
  lng: number;
  address: string;


  constructor(public loadingCtrl: LoadingController,
    
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
   // private http: HttpClient,
    ) { 

      this.loginForm = this.formBuilder.group({
        email: ['',
          Validators.compose([Validators.required, Validators.email])],
        password: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
      });
     
    }

  ngOnInit() {
  }
  /*********************************
  signInWithPhoneNumber(phoneNumber) {
    console.log(phoneNumber);
    var applicationVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container');
    var provider = new firebase.auth.PhoneAuthProvider();
    provider.verifyPhoneNumber(`+${phoneNumber}`, applicationVerifier)
      .then((credential) => {
        console.log(credential);
        var verificationCode = window.prompt('Please enter the verification ' +
          'code that was sent to your mobile device.');
      return firebase.auth.PhoneAuthProvider.credential(credential,
          verificationCode);
      }).catch((error) => console.error(error));
  }

  verify() {
    let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.code);
    firebase.auth().signInWithCredential(signInCredential).then((success) => {
      console.log(success);
    })
  }
  
  ********************************************/
  

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
