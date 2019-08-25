import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegisterRequest} from '../login/login.resource';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      role: ['Select Role', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordRepeat: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    const request: any = {};
    request.email = this.f['email'].value;
    request.name = this.f['firstName'].value + ' ' + this.f['lastName'].value;
    request.password = this.f['password'].value;
    request.role = this.f['role'].value;
    this.registrationForm.reset();
    this.authService.signUp(request);
  }
}
