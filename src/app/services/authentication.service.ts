import { element } from 'protractor';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthenticationService {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  signUpUser(userData) {
    firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
      .catch(error => {
        console.log(error);
      });
  }

  login(userData) {
    firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.log(error);
      });
  }

  isAuthenticated() {
    const user = firebase.auth().currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    firebase.auth().signOut();
  }
}
