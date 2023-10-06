import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  mobileQuery: MediaQueryList
  currentUser: any;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router) { }

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
  }

  logout() {
    this.authService.logout().subscribe({
      next: data => {
        this.storageService.logout();
        this.router.navigate(["/login"]);
      }
    })
  }
}
