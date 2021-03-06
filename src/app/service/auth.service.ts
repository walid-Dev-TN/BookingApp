import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signupUser(email: string, password: string, pending: boolean): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((newUserCredential: firebase.auth.UserCredential) => {
        firebase
          .firestore()
          .doc(`/userProfile/${newUserCredential.user.uid}`)
          .set({ email });

          firebase
          .firestore()
          .doc(`/userProfile/${newUserCredential.user.uid}`)
          .set({ pending });
      })
      .catch(error => {
        console.error(error);
        throw new Error(error);
      });
  }
  
  loginUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  
   logoutUser(){
     return new Promise((resolve, reject) => {
       if(firebase.auth().currentUser){
         firebase.auth().signOut()
         .then(() => {
           console.log("LOG Out");
           resolve();
         }).catch((error) => {
           reject();
         });
       }
     })
   }
  
   userDetails(){
     return firebase.auth().currentUser;
   }



}
