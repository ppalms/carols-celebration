import { Component } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { VirtualGuest } from './shared/virtual-guest.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ccp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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
