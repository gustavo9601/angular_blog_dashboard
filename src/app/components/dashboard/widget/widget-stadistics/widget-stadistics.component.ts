import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../../../services/config.service';
import {CommentService} from '../../../../services/comment.service';
import {PostService} from '../../../../services/post.service';

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
              private _commentService: CommentService,
              private _postService: PostService) {
    this.numPosts = 0;
  }

  ngOnInit() {
    this.numUsers = this._configService.numUsers;

    this._commentService.getComments().subscribe(
      (comments) => {
        console.log('comments', comments);
        this.numComments = comments.length;
      }
    );


    this._postService.getPosts().subscribe(
      (posts) => {
        this.numPosts = posts.length;
      }
    );

  }

}
