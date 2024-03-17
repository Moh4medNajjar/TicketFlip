import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
credentials!: FormGroup;
PageSelected : boolean = true;

constructor(
  private fb: FormBuilder,
  private loadingController: LoadingController,
  private alertController: AlertController,
  private authService: AuthService,
  private router: Router) {} 

get email() {
  return this.credentials?.get('email');
}

get password() {  
  return this.credentials?.get('password');
}

get confirmPassword() { 
  return this.credentials?.get('confirmPassword');
}

ngOnInit() {
  this.credentials = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });
}

async register() {
  const loading = await this.loadingController.create();
  await loading.present();
  
  const user = await this.authService.register(this.credentials?.value);
  await loading.dismiss();

  if (user) {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  } else {
    this.showAlert('Registration failed','Please try again!');
  }
}

async showAlert(header: string, message: string) {
  const alert = await this.alertController.create({
    header,
    message,
    buttons: ['OK'],
  });
  await alert.present();
}

}
