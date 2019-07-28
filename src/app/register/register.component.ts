import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['email', [Validators.email, Validators.required]],
      phone: ['phone number', Validators.required],
      role: ['Select Role', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  // onSubmit() {
  //   this.submitted = true;
  //
  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //     return;
  //   }
  //
  //   this.loading = true;
  //   this.userService.register(this.registerForm.value)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         this.alertService.success('Registration successful', true);
  //         this.router.navigate(['/login']);
  //       },
  //       error => {
  //         this.alertService.error(error);
  //         this.loading = false;
  //       });
  // }


  onSubmit() {
    console.log(this.f);
  }
}
