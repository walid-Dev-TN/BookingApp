import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';


import { AgmCoreModule } from "@agm/core";
import { AgmDirectionModule } from 'agm-direction';

import { environment } from "../../environments/environment";






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsAPIKey,
      libraries: ["places", "geometry"]
    }),
    AgmDirectionModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
