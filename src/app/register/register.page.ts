import { Component, OnInit } from '@angular/core';
import { AuthService } from './../service/auth.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public signupForm: FormGroup;
  public loading: any;

  constructor(private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    private router: Router) {
      this.signupForm = this.formBuilder.group({
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        password: [
          '',
          Validators.compose([Validators.minLength(6), Validators.required]),
        ],
      });

     }

  ngOnInit() {
  }

  async signupUser(signupForm: FormGroup): Promise<void> {
    if (!signupForm.valid) {
      console.log(
        'Need to complete the form, current value: ', signupForm.value
      );
    } else {
      const email: string = signupForm.value.email;
      const password: string = signupForm.value.password;
      
  
      this.authService.signupUser(email, password, true).then(
        () => {
          this.loading.dismiss().then(() => {
          //  this.router.navigateByUrl('home');
          this.presentAlert("Demande d'inscription envoyée avec succès! <br/> Veuillez attendre la validation de l'administrateur de la plateforme");
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
  }

  async presentAlert(MessageText) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: '',
      message: MessageText,
      buttons: ['OK']
    });

    await alert.present();
  }

}
