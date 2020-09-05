import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../../../services/config.service';
import {CommentService} from '../../../../services/comment.service';

@Component({
  selector: 'app-widget-stadistics',
  templateUrl: './widget-stadistics.component.html',
  styleUrls: ['./widget-stadistics.component.css']
})
export class WidgetStadisticsComponent implements OnInit {

  public numUsers: number;
  public numComments: number;
  public numPosts: number;

  constructor(private _configService: ConfigService,
              private _commentService: CommentService) {
  }

  ngOnInit() {
    this.numUsers = this._configService.numUsers;

    this._commentService.getComments().subscribe(
      (comments) => {
        console.log('comments', comments);
        this.numComments = comments.length;
      }
    );
    this.numPosts = 20;
  }

}
