import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService, UserResponse} from '../authentication/authentication.service';
import {LoginResource} from '../login/login.resource';
import {DashboardResource} from './dashboard.resource';
import {NotificationsService} from '../module/notifications.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  addProductForm: FormGroup;
  sellerEmail: string;
  productImage: any = File;
  showMessage = false;

  constructor(private authService: AuthenticationService,
              private loginResource: LoginResource,
              private notification: NotificationsService,
              private dashBoardResource: DashboardResource) {
  }

  ngOnInit() {
    this.addProductForm = new FormGroup({
      email: new FormControl('', []),
      billingAddress: new FormControl('kuawska', [Validators.required]),
      price: new FormControl('12', [Validators.required]),
      availableUnit: new FormControl('12', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      productName: new FormControl('good', [Validators.required]),
      description: new FormControl('ffka', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
    this.getDetails();
  }

  getDetails() {
    this.loginResource.getLoggedInUser(localStorage.getItem('accessToken')).subscribe(
      (next: UserResponse) => {
        this.sellerEmail = next.email;
      }
    );
  }

  handleUpload(event) {
    const file = event.target.files[0];
    console.log(file);
    this.productImage = file;
  }

  onSubmit() {

    this.addProductForm.controls['email'].setValue(
      this.sellerEmail
    );

    const productFormInfo = this.addProductForm.value;
    const formData = new FormData();
    console.log(productFormInfo);
    formData.append('product', JSON.stringify(productFormInfo));
    formData.append('file', this.productImage);
    console.log(this.productImage);
    this.dashBoardResource.saveUserToServer(formData).toPromise().then(() => {
        this.addProductForm.reset();
        this.showMessage = true;
        this.notification.success('was added succesfullyy');
      }
    ).catch(reason => {
      console.log('rejected ' + reason);
      this.notification.error('not added because' + reason);
    });

  }

}
