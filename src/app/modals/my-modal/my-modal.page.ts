import { Component, OnInit } from '@angular/core';
import { 
ModalController, 
NavParams 
} from '@ionic/angular';

import * as CryptoJS from 'crypto-js';
import {GlobalService} from '../../global.service';
//import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

//declare let window: any;

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})
export class MyModalPage implements OnInit {
 
 // domElement: any;
  
 public textToCode: string;
 public myAngularxQrCode: string = null;

  modalUser: string;
  modalClient: string;
  modalTitle: string;
  modalId: string;
  modalDate: string;
  chauffeur: string;
  source: string;
  direction: string;
  type_user: number;
  data: any;
  conversionEncryptOutput: string;

  constructor(
    private modalController: ModalController,
    public navParams: NavParams,
    public global: GlobalService
    //private barcodeScanner: BarcodeScanner
    //private qrScanner: QRScanner
  ) {}

  ngOnInit() {
    console.table(this.navParams);
    this.modalUser = this.navParams.data.paramUser;
    this.modalClient = this.navParams.data.paramClient;
    this.modalId = this.navParams.data.paramID;
    this.modalDate = this.navParams.data.paramDate;
    this.modalTitle = this.navParams.data.paramTitle;
    this.chauffeur = this.navParams.data.paramChauffeur;
    this.type_user = this.navParams.data.paramtype_user;
    this.source = this.navParams.data.paramSource;
    this.direction = this.navParams.data.paramDir;
    if(this.type_user == 3){
    this.textToCode= this.modalClient + ":" + this.modalId + ":" + this.modalDate+":" + this.modalUser;
    this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.textToCode.trim(), this.global.encPassword.trim()).toString();  
   
    this.createQRCode();
    }

    //this.domElement = window.document.querySelector('ion-app') as HTMLElement;
    //this.prepare();
  }

  createQRCode() {
    this.myAngularxQrCode = this.conversionEncryptOutput;
    this.conversionEncryptOutput = "";
  }

/*********************************************************
  scanBarcode() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
      };

    window.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scannedData = barcodeData;

    }).catch(err => {
      console.log('Error', err);
    });
  }

  createBarcode() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.inputData).then((encodedData) => {
      console.log(encodedData);
      this.encodedData = encodedData;
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }
***********************************************************************************/
/**********************************************************************

ionViewWillLeave() {
  this.hideCamera();
}

prepare() {
  this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      console.log(status.authorized);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Run this function.
showCamera() {
  this.qrScanner.show();
  this.domElement.classList.add('has-camera');

  const scanSub = this.qrScanner.scan()
    .subscribe((text: string) => {
      scanSub.unsubscribe();
      this.onScan(text);
    });
}

hideCamera() {
  this.qrScanner.hide();
  this.domElement.classList.remove('has-camera');
}

onScan(text: string) {
  this.hideCamera();
  console.log('Scanned:', text);
}


*******************************************************************************/

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}