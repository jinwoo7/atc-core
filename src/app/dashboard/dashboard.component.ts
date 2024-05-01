import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { RealEstate } from '../models/realEstate.model';
import { RealEstateService } from '../services/realEstate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  miniCardData: any[];

  constructor(private realEstateService: RealEstateService) {}

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      // console.log('DashboardComponent');
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );

  ngOnInit(): void {
    this.miniCardData = [
      {
        icon: '🌎',
        title: 'Total Sales',
        value: 9465,
        color: 'purple',
        isIncrease: true,
        percentValue: 0.5483,
        isCurrency: true,
      },
      {
        icon: '💸',
        title: 'Average Order Value',
        value: 465,
        color: 'yellow',
        isIncrease: false,
        percentValue: 0.2544,
        isCurrency: true,
      },
      {
        icon: '💡',
        title: 'Total Orders',
        value: 243,
        color: 'red',
        isIncrease: true,
        percentValue: 0.4565,
        isCurrency: false,
      },
      {
        icon: '🔄',
        title: 'Returning Customer',
        value: 35,
        color: 'purple',
        isIncrease: true,
        percentValue: 0.8361,
        isCurrency: false,
      },
    ];
    // this.realEstateService.realEstatesChanged.subscribe(
    //   (realEstates: RealEstate[]) => {
    //     this.miniCardData = realEstates;
    //   }
    // );
  }
}
