import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public chartData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 62],

        fill: true,
        backgroundColor: [
          'rgba(131, 182, 146)',
          'rgba(249, 173, 160)',
          'rgba(249, 98, 125)',
          'rgba(198, 91, 124)',
          'rgba(91, 55, 88)',
        ],
      },
    ],
  };

  config: ChartConfiguration = {
    type: 'doughnut', // 'pie'
    data: this.chartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: "Jinwoo's Pie Chart",
        },
      },
    },
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

  // Fun actions to try:

  // changeLabels(): void {
  //   const words = [
  //     'hen',
  //     'variable',
  //     'embryo',
  //     'instal',
  //     'pleasant',
  //     'physical',
  //     'bomber',
  //     'army',
  //     'add',
  //     'film',
  //     'conductor',
  //     'comfortable',
  //     'flourish',
  //     'establish',
  //     'circumstance',
  //     'chimney',
  //     'crack',
  //     'hall',
  //     'energy',
  //     'treat',
  //     'window',
  //     'shareholder',
  //     'division',
  //     'disk',
  //     'temptation',
  //     'chord',
  //     'left',
  //     'hospital',
  //     'beef',
  //     'patrol',
  //     'satisfied',
  //     'academy',
  //     'acceptance',
  //     'ivory',
  //     'aquarium',
  //     'building',
  //     'store',
  //     'replace',
  //     'language',
  //     'redeem',
  //     'honest',
  //     'intention',
  //     'silk',
  //     'opera',
  //     'sleep',
  //     'innocent',
  //     'ignore',
  //     'suite',
  //     'applaud',
  //     'funny',
  //   ];
  //   const randomWord = () => words[Math.trunc(Math.random() * words.length)];
  //   this.pieChartData.labels = new Array(3).map(() => randomWord());

  //   this.chart?.update();
  // }

  // addSlice(): void {
  //   if (this.pieChartData.labels) {
  //     this.pieChartData.labels.push(['Line 1', 'Line 2', 'Line 3']);
  //   }

  //   this.pieChartData.datasets[0].data.push(400);

  //   this.chart?.update();
  // }

  // removeSlice(): void {
  //   if (this.pieChartData.labels) {
  //     this.pieChartData.labels.pop();
  //   }

  //   this.pieChartData.datasets[0].data.pop();

  //   this.chart?.update();
  // }

  // changeLegendPosition(): void {
  //   if (this.pieChartOptions?.plugins?.legend) {
  //     this.pieChartOptions.plugins.legend.position =
  //       this.pieChartOptions.plugins.legend.position === 'left'
  //         ? 'top'
  //         : 'left';
  //   }

  //   this.chart?.render();
  // }

  // toggleLegend(): void {
  //   if (this.pieChartOptions?.plugins?.legend) {
  //     this.pieChartOptions.plugins.legend.display =
  //       !this.pieChartOptions.plugins.legend.display;
  //   }

  //   this.chart?.render();
  // }
}
