import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public UserID: string;
  
  public Token: string;

  public UUID: string;

  public VoyageEnCours: string = '';

  public encPassword: string = "LinaDali2020*NadiaWalid2020*";
  
  constructor() { }
}
