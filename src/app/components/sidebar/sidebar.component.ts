import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../services/config.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public _configService: ConfigService,
              private _loginService: LoginService) {
  }

  ngOnInit() {
  }

  logOut() {
    this._loginService.logOut();
  }

}
