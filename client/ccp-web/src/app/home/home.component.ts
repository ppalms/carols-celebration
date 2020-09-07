import { Component } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { VirtualGuest } from './shared/virtual-guest.model';

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

  onSubmit(registerForm) {
    if (!registerForm.valid) {
      this.validateAll = true;
      return;
    }

    const body = new HttpParams()
      .set('form-name', 'zoom-register')
      .append('firstName', this.virtualGuest.firstName)
      .append('lastName', this.virtualGuest.lastName)
      .append('zoomEmail', this.virtualGuest.zoomEmail);

    this.http
      .post('/', body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .subscribe((_res) => {
        this.showForm = false;
      });
  }
}
