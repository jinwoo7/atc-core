import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
})
export class LineChartComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public lineChartType: ChartType = 'line';

  public lineChartData: ChartConfiguration['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        // backgroundColor: 'rgba(131, 182, 146,0.5)',
        borderColor: 'rgba(131, 182, 146,1)',
        pointBackgroundColor: 'rgba(131, 182, 146,1)',
        pointBorderColor: '#fff',
        // fill: 'origin',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        // backgroundColor: 'rgba(249, 173, 160,0.5)',
        borderColor: 'rgba(249, 173, 160,1)',
        pointBackgroundColor: 'rgba(249, 173, 160,1)',
        pointBorderColor: '#fff',
        // fill: 'origin',
      },
      {
        data: [18, 48, 47, 60, 49, 27, 40],
        label: 'Series C',
        // backgroundColor: 'rgba(249, 98, 125, 0.5)',
        borderColor: 'rgba(249, 98, 125)',
        pointBackgroundColor: 'rgba(249, 98, 125)',
        pointBorderColor: '#fff',
        // fill: 'origin',
      },
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      y: {
        position: 'left',
      },
    },
    plugins: {
      legend: { display: true },
    },
  };

  public config: ChartConfiguration = {
    type: this.lineChartType,
    data: this.lineChartData,
    options: this.lineChartOptions,
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }
}
