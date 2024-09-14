import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-asset-card',
  templateUrl: './mini-asset-card.component.html',
  styleUrls: ['./mini-asset-card.component.css'],
})
export class MiniAssetCardComponent {
  @Input() picturePath: string;
  @Input() name: string;
  @Input() icon: string;
  @Input() type: string;
  @Input() isActive: boolean;
  // vehicles
  @Input() year: string;
  @Input() make: string;
  @Input() model: string;
  // real estate
  @Input() streetAddress: string;
  @Input() unit: string;
  @Input() city: string;
  @Input() state: string;

  constructor() {}
}
