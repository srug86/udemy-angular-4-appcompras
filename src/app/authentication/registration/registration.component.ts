import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  userData: any;

  errorsForm = {
    'email': '',
    'password': ''
  };

  validationMessages = {
    'email': {
      'required': 'Email is mandatory.',
      'email': 'Enter a valid email address.'
    },
    'password': {
      'required': 'Password is mandatory.',
      'pattern': 'Password must have at least one number and one letter.',
      'minlength': 'Password must have more than six characters.'
    }
  };

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      'email': ['', [ Validators.required, Validators.email ]],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]]
    });

    this.registrationForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onSubmit() {
    this.userData = this.saveUserData();
    this.authenticationService.signUpUser(this.userData);
    this.router.navigate(['/home']);
  }

  saveUserData() {
    const savedUserData = {
      email: this.registrationForm.get('email').value,
      password: this.registrationForm.get('password').value
    };
    return savedUserData;
  }

  onValueChanged(data?: any) {
    if (!this.registrationForm) { return; }
    const form = this.registrationForm;
    for (const field in this.errorsForm) {
      this.errorsForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.errorsForm[field] += messages[key] + ' ';
         }
       }
     }
   }
}
