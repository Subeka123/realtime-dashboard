import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RevenueChartComponent } from '../revenue-chart/revenue-chart';
import { TrafficPieComponent } from '../traffic-pie/traffic-pie';
import { SessionsBarComponent } from '../sessions-bar/sessions-bar';
import { SummaryCardsComponent } from '../summary-cards/summary-cards';
import { OrdersTableComponent } from '../orders-table/orders-table';
import { DoughtnutChart } from '../doughtnut-chart/doughtnut-chart';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatProgressSpinnerModule, SessionsBarComponent, RevenueChartComponent, TrafficPieComponent,
    SummaryCardsComponent, OrdersTableComponent, DoughtnutChart],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})

export class DashboardComponent implements OnInit, OnDestroy{
  
  summary: any = {};
  monthlyRevenue: any[] = [];
  trafficSources: any[] = [];
  sessions: any[] = [];
  orders: any[] = [];
  sales:any[]=[];
  doughtnutData:any[]=[];
  loading: boolean = true;
  
  subscription: any;
  
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.subscription = this.dashboardService.getLiveData().subscribe(data => {
       this.summary = data.summary;
      this.monthlyRevenue = data.monthlyRevenue;
      this.trafficSources = data.trafficSources;
      this.sessions = data.sessions;
      this.orders = data.orders;
      this.sales=data.productSales;
      this.doughtnutData=data.doughtnutData;
      this.loading = false;
    });
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
