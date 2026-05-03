import { Component, Input, OnChanges } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-revenue-chart',
  imports: [BaseChartDirective],
  templateUrl: './revenue-chart.html',
  styleUrl: './revenue-chart.css'
})
export class RevenueChartComponent implements OnChanges {
@Input() data: any[] = [];
lineChartData: ChartConfiguration<'line'>['data'] = {
  labels: [],
  datasets: [
  ]
};

  lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true
  };

  ngOnChanges() {
    this.lineChartData={
      labels: this.data.map(d => d.month),
      datasets: [
        {
          data: this.data.map(d => d.sales),
          label: 'Revenue'
        }
      ]
    }
  }
}
