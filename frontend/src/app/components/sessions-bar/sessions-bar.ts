import { Component, Input, OnChanges } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-sessions-bar',
  imports: [BaseChartDirective],
  templateUrl: './sessions-bar.html',
  styleUrl: './sessions-bar.css'
})
export class SessionsBarComponent implements OnChanges {

  @Input() data: any[] = [];

  chartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
    ]
  };
    barChartOptions: ChartConfiguration<'bar'>['options'] = {
      responsive: true
    }
  ngOnChanges() {
    this.chartData = {
    labels: this.data.map(d => d.source),
    datasets: [
      {
        label: 'Sessions',
        data: this.data.map(d => d.sessions)
      }
    ]
  };
  } 
}
