import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../services/config.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public _configService:ConfigService) { }

  ngOnInit() {
  }

}
