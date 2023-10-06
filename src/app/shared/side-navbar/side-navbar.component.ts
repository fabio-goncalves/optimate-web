import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from 'src/app/interface/IMenu';
import { HttpclientService } from 'src/app/services/HttpClientServices';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  menuList: Observable<IMenu[]>;
  constructor(private httpService: HttpclientService) { }

  ngOnInit() {
    this.menuList = this.httpService.getList<IMenu>("/assets/menu.json")
  }

}
