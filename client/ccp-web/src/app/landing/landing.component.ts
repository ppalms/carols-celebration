import { Component, OnInit } from '@angular/core';
import { VirtualGuest } from '../register/shared/virtual-guest.model';

@Component({
  selector: 'ccp-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  virtualGuest: VirtualGuest = new VirtualGuest();

  constructor() {}

  onRegister = (virtualGuest: VirtualGuest) =>
    (this.virtualGuest = virtualGuest);
}
