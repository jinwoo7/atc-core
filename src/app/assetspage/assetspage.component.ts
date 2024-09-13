import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { data } from '../data/assetData';

@Component({
  selector: 'app-assetspage',
  templateUrl: './assetspage.component.html',
  styleUrl: './assetspage.component.css',
})
export class AssetsPageComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      // console.log('DashboardComponent');
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
      };
    })
  );

  vehicles: any[];
  realEstates: any[];

  ngOnInit(): void {
    this.vehicles = data.vehicleData;
    this.realEstates = data.realEstateData;
  }
}
