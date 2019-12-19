import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';


import { AgmCoreModule } from "@agm/core";

import { environment } from "../../environments/environment";


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsAPIKey
    })
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
