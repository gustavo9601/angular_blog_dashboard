import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../../../services/comment.service';
import {IComment} from '../../../../interfaces/icomment';

@Component({
  selector: 'app-widget-last-comments',
  templateUrl: './widget-last-comments.component.html',
  styleUrls: ['./widget-last-comments.component.css']
})
export class WidgetLastCommentsComponent implements OnInit {

  public listComments: IComment[];

  constructor(private _commentsService: CommentService) {
  }

  ngOnInit() {
    this._commentsService.getLastComments().subscribe(
      (comments) => {
        this.listComments = comments;
      }
    );
  }

}
