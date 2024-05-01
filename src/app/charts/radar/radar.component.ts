import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css'],
})
export class RadarChartComponent {
  // Radar
  public radarChartType: ChartType = 'radar';
  public radarChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      {
        data: [65, 59, 90, 81, 56, 55, 40],
        label: 'Series A',
        fill: true,
        backgroundColor: ['rgba(131, 182, 146, 0.5)'],
      },
      {
        data: [28, 48, 66, 19, 96, 27, 100],
        label: 'Series B',
        fill: true,
        backgroundColor: ['rgba(249, 98, 125, 0.5)'],
      },
      {
        data: [67, 31, 24, 51, 26, 78, 62],
        label: 'Series C',
        fill: true,
        backgroundColor: ['rgba(91, 55, 88, 0.5)'],
      },
    ],
  };
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'center',
      },
      title: {
        display: true,
        position: 'top',
        align: 'center',
        text: "Jinwoo's Radar Chart",
      },
    },
  };

  public config: ChartConfiguration = {
    type: this.radarChartType,
    data: this.radarChartData,
    options: this.radarChartOptions,
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }
}
