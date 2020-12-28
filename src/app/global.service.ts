import { Injectable } from '@angular/core';
//import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';

//const { Network } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public UserID: string;

  public UserNameAbrev: string;
  
  public Token: string;

  public UUID: string;

  public VoyageEnCours: string = '';

  public directshow: boolean = false;

  public encPassword: string = "**";
 // public networkStatus: any;
 // public networkListener: PluginListenerHandle;
  
  constructor() { }
/************************************************************************************ 
  

  async ngOnInit() {
    this.networkListener = Network.addListener('networkStatusChange', (status) => {
      this.networkStatus = status;
      console.log('Network status changed', status);
    });
  }

  async getNetWorkStatus() {
    this.networkStatus = await Network.getStatus();
    console.log(this.networkStatus);
  }

  endNetworkListener() {
    if (this.networkListener) {
      this.networkListener.remove();
    }
  }

  ngOnDestroy() {
    if (this.networkListener) {
      this.networkListener.remove();
    }
  }
/*********************************************************************************** */
}
