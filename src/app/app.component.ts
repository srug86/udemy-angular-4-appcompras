import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDHu5hnhAxQk1tyAI7MCe4egGoNUL-Ok8E",
      authDomain: "comprasapp-udemy.firebaseapp.com"
    });
  }

}
