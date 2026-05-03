import { Component, Input, OnChanges } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-traffic-pie',
  imports: [BaseChartDirective],
  templateUrl: './traffic-pie.html',
  styleUrl: './traffic-pie.css'
})
export class TrafficPieComponent implements OnChanges {

  @Input() data: any[] = [];

  chartData: ChartConfiguration<'pie'>['data'] = {
    labels: [],
    datasets: [
     
    ]
  };
    pieChartOptions: ChartConfiguration<'pie'>['options'] = {
      responsive: true
    }
  
  ngOnChanges() {
    this.chartData = {
    labels: this.data.map(d => d.source),
    datasets: [
      {
        label: 'Traffic',
        data: this.data.map(d => d.value)
      }
    ]
  };
  }
}
