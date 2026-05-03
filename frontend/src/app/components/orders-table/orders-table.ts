import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-orders-table',
  imports: [MatTableModule,MatCardModule,MatChipsModule],
  templateUrl: './orders-table.html',
  styleUrl: './orders-table.css'
})
export class OrdersTableComponent implements OnInit, OnChanges {
  @Input() orders: any[] = [];
  ordersData: MatTableDataSource<any> = new MatTableDataSource();
  cols = ['id','date','name','status','total','payment'];
  isMobile =false;

  constructor(private breakpointObserver: BreakpointObserver) {
  }
  ngOnInit() {
     this.breakpointObserver.observe(['(max-width: 599px)']).subscribe((result: any) => {
      this.isMobile = result.matches;
    });
  }

  ngOnChanges(){
    this.ordersData=new MatTableDataSource(this.orders);
  }
}
