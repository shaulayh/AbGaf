import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterComponent} from '../register/register.component';
import {AuthenticationService, AuthResponse} from '../authentication/authentication.service';
import {LoginResource} from './login.resource';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() name;

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  showLoading = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              public activeModal: NgbActiveModal,
              public authService: AuthenticationService,
              private loginResource: LoginResource) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      password: new FormControl('', [Validators.required]),
    });

  }

  openRegisterPage() {
    this.router.navigate(['register']);

    this.activeModal.close(
      'Closed');
  }

  onSubmit() {
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;
    this.showLoading = true;
    if (!this.authService.authenticate(username, password)) {
      this.showLoading = false;
      this.activeModal.close('Close click');
    }
  }

}
