import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { finalize } from 'rxjs/operators';
import { VirtualGuest } from '../register/shared/virtual-guest.model';

@Component({
  selector: 'ccp-tributes',
  templateUrl: './tributes.component.html',
  styleUrls: ['./tributes.component.scss'],
})
export class TributesComponent {
  @Input() virtualGuest: VirtualGuest;
  flowerCard: string;
  showForm = true;
  validateAll = false;

  constructor(public http: HttpClient) {}

  onSubmit(flowerCardForm: NgForm) {
    if (!flowerCardForm.valid) {
      this.validateAll = true;
      return;
    }

    flowerCardForm.form.disable();

    const body = new HttpParams()
      .set('form-name', 'flowerCardForm')
      .append('firstName', this.virtualGuest.firstName)
      .append('lastName', this.virtualGuest.lastName)
      .append('flowerCard', this.flowerCard);

    this.http
      .post('/', body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'text',
      })
      // Uncomment for testing
      // .pipe(
      //   finalize(() => {
      //     this.showForm = false;
      //   })
      // )
      .subscribe((_data) => {
        this.showForm = false;
        flowerCardForm.form.enable();
      });
  }
}
