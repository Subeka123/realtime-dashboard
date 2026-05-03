import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private socketService: SocketService) { }
  getLiveData() {
    return this.socketService.listen('dashboard-update');
  }
}
