import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userData: any;

  message = false;

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [ Validators.required, Validators.email ]],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]]
    });
  }

  onSubmit() {
    this.userData = this.saveUserData();
    this.authenticationService.login(this.userData);
    setTimeout(() => {
      if (this.isAuth() === false) {
        this.message = true;
      }
    }, 2000);
  }

  saveUserData() {
    const savedUserData = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    return savedUserData;
  }

  isAuth() {
    return this.authenticationService.isAuthenticated();
  }
}
