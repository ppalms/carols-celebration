import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { VirtualGuest } from './shared/virtual-guest.model';

@Component({
  selector: 'ccp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  showForm = true;
  validateAll = false;

  virtualGuest: VirtualGuest = {
    firstName: '',
    lastName: '',
    zoomEmail: '',
  };

  constructor(public http: HttpClient) {}

  onSubmit(registerForm: NgForm) {
    if (!registerForm.valid) {
      this.validateAll = true;
      return;
    }

    registerForm.form.disable();

    const body = new HttpParams()
      .set('form-name', 'zoom-register')
      .append('firstName', this.virtualGuest.firstName)
      .append('lastName', this.virtualGuest.lastName)
      .append('zoomEmail', this.virtualGuest.zoomEmail);

    this.http
      .post('/', body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'text',
      })
      .subscribe((_res) => {
        this.showForm = false;
        registerForm.form.enable();
      });
  }
}
