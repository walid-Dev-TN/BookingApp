import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import {GlobalService} from '../global.service'; 
import { AuthService } from './../service/auth.service';
import { from, Observable, throwError } from 'rxjs';
import { delay, finalize, map, retryWhen, switchMap, tap } from 'rxjs/operators';

import * as firebase from 'firebase/app';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService implements HttpInterceptor
{

  auth: AuthService;


  constructor(
    private loadingCtrl: LoadingController,
    private inj: Injector
  ) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

     /********************************************* */
     if (req.url.indexOf('http') !== 0) {
       console.log("header variables:", req.headers.getAll('User-Agent'));
      return next.handle(req);
    }
  
    return from(this.loadingCtrl.create())
      .pipe(
        tap((loading) => {
          return loading.present();
        }),
        switchMap((loading) => {
          console.log("header variables:", req.headers.getAll('User-Agent'));
          return next.handle(req).pipe(
            finalize(() => {
              loading.dismiss();
            })
          );
        })
      );
     /********************************************* *

      this.auth = this.inj.get(AuthService) // inject the authservice manually (see https://github.com/angular/angular/issues/18224)

    
     firebase.auth().onAuthStateChanged(user => {
       console.log("Request header:", req.headers.getAll('User-Agent'))
     });
      

              return next.handle(req);
        
  }
  *****************************************************/
 }
}