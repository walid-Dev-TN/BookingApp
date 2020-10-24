import { Component, OnInit } from '@angular/core';
import { 
ModalController, 
NavParams 
} from '@ionic/angular';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})
export class MyModalPage implements OnInit {


  modalTitle: string;
  modalId: string;
  modalDate: string;
  chauffeur: string;
  confirme: string;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modalId = this.navParams.data.paramID;
    this.modalDate = this.navParams.data.paramDate;
    this.modalTitle = this.navParams.data.paramTitle;
    this.chauffeur = this.navParams.data.paramChauffeur;
    if(this.navParams.data.paramConfirme)
    this.confirme = "confirmé";
    else
    this.confirme = "pas encore confirmé";
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}