import {Component, OnInit, ViewChild} from '@angular/core';
import {Post} from '../../../models/post';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {PostService} from '../../../services/post.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {

  @ViewChild('modal_add_post') modal_add_post;

  public post: Post;
  public configEditor: AngularEditorConfig;

  constructor(private _postService: PostService,
              private modalService: NgbModal,
              private router: Router) {
    this.post = new Post({});
    this.configEditor = {
      editable: true,
      height: '22rem',
    };
  }

  ngOnInit() {
  }

  addPost() {
    console.log('this.post', this.post);
    // Agregando el modal
    this._postService.addPost(this.post);
    // Abriendo el modal
    this.modalService.open(this.modal_add_post);

    this.router.navigate(['/posts']);

  }

  getCategoriesSelected($event) {
    console.log('categorias seleccionadas', $event);

    this.post.categories = $event;
  }

  getFilePath($event) {
    console.log('path imagen subida', $event);
    this.post.img = $event;
  }
}
