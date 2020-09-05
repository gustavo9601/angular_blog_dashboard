import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../../../services/config.service';

import * as moment from 'moment';

@Component({
  selector: 'app-widget-last-visits',
  templateUrl: './widget-last-visits.component.html',
  styleUrls: ['./widget-last-visits.component.css']
})
export class WidgetLastVisitsComponent implements OnInit {
  public data: any;
  public options: any;

  constructor(private _configService: ConfigService) {
    this.options = {
      legend: {
        display: false
      }
    };
    this.buildDataRandom();
  }

  ngOnInit() {
  }

  private buildDataRandom() {

    this.data = {
      labels: [],
      datasets: [
        {
          data: [],
          boderColor: '#565656'
        }
      ]
    };

    for (let i = 0; i < 10; i++) {
      const random = Math.floor(Math.random() * (this._configService.max - this._configService.min) + this._configService.min);
      this.data.datasets[0].data.push(random);

      const day = moment().subtract('days', 1).format('MMM-DD');

      this.data.labels.push(day);
    }

  }

}
