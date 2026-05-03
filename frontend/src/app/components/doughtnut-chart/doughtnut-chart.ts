import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-doughtnut-chart',
  imports: [BaseChartDirective],
  templateUrl: './doughtnut-chart.html',
  styleUrl: './doughtnut-chart.css',
})
export class DoughtnutChart {
  @Input() data: any[] = [];
  doughnutData: ChartConfiguration<'doughnut'> ['data']= {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  doughtnutChartOptions: ChartConfiguration<'doughnut'> ['options'] = {
    responsive: true
    };

  ngOnChanges() {
    this.doughnutData={
      labels:this.data.map(d=>d.category),
      datasets:[{
        data:this.data.map(d=>d.value),
        label:'Items Sold'
      }]
    };
  }
}
