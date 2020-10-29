import { NgAnalyzeModulesHost } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


@Component({
  selector: 'app-qrcode-scanner',
  templateUrl: './qrcode-scanner.page.html',
  styleUrls: ['./qrcode-scanner.page.scss'],
})
export class QrcodeScannerPage implements OnInit {
  
  
  scannedData: string;

  constructor(
    private qrScanner: QRScanner,
    private AlertController : AlertController,
    public androidPermissions: AndroidPermissions,
    private router: Router
  ) {  }

  ngOnInit() {
   
  }
  
  ionViewDidEnter(){
    window.document.querySelector('ion-app').classList.add('cameraView');

  }

  ionViewWillLeave(){

    window.document.querySelector('ion-app').classList.remove('cameraView');
  
  }

  qrscanner() {

    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          console.log('authorized');

         // this.qrScanner.show();
          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            //console.log(text[0]);
            this.scannedData =  JSON.stringify(text).split('"')[3];
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

          this.qrScanner.resumePreview();

          // show camera preview
          this.qrScanner.show();

          // wait for user to scan something, then the observable callback will be called

        } else if (status.denied) {
          console.log('denied');
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          console.log('else');
        }
      })
      .catch((e: any) => {
        console.log('Error is' + e);
      });
    }

    stopScanning() {
    
    
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
    window.document.body.style.backgroundColor = '#FFF';
    
    this.qrScanner.hide();
    this.qrScanner.destroy();
    this.router.navigateByUrl('/home');
    }
    
  

}
