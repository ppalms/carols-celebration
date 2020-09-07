import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { VirtualGuest } from './shared/virtual-guest.model';

@Component({
  selector: 'ccp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  virtualGuest: VirtualGuest = {
    firstName: '',
    lastName: '',
    zoomEmail: '',
  };

  constructor(public http: HttpClient) {}

  onSubmit(zoomRegistration) {
    if (!zoomRegistration.valid) {
      console.log(this.virtualGuest);

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
      .subscribe((res) => {
        console.log(res);
      });
  }
}
