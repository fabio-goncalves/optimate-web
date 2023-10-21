import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { EventBusService } from '../event-bus.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  mobileQuery: MediaQueryList;
  currentUser: any;
  isLoggedIn = false;
  eventBusSub?: Subscription;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private eventBusService: EventBusService
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      this.currentUser = this.storageService.getUser();
    } else {
      this.logout();
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: (data) => {
        this.storageService.logout();
        this.router.navigate(['/login']);
      },
    });
  }
}
