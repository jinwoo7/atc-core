import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: 'rgba(131, 182, 146)',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: 'rgba(249, 98, 125)',
      },
      {
        data: [91, 82, 42, 85, 74, 64, 9],
        label: 'Series C',
        backgroundColor: 'rgba(249, 173, 160)',
      },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  public config: ChartConfiguration = {
    type: this.barChartType,
    data: this.barChartData,
    options: this.barChartOptions,
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

  public randomize(): void {
    for (var ds_i = 0; ds_i < this.barChartData.datasets.length; ds_i++) {
      for (var i = 0; i < this.barChartData.datasets[ds_i].data.length; i++) {
        this.barChartData.datasets[ds_i].data[i] = Math.round(
          Math.random() * 100
        );
      }
    }

    this.chart?.update();
  }
}
