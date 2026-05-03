import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-summary-cards',
  imports: [MatCardModule,CommonModule,MatIconModule],
  templateUrl: './summary-cards.html',
  styleUrl: './summary-cards.css'
})
export class SummaryCardsComponent {
  @Input() summary: any = {};
 
}
