import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';
import {CategoryService} from '../../../services/category.service';
import {IPost} from '../../../interfaces/ipost';

import * as _ from 'lodash';
import {TranslateService} from '../../../services/translate.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public showPost: boolean;
  public posts: IPost[];
  public cols: any[];
  public selectedPosts: string[];
  public searchWord: string;

  constructor(private _postService: PostService,
              private _categoryService: CategoryService,
              private _translateService: TranslateService) {
    this.showPost = false;
    this.posts = [];
    this.cols = [
      {header: ''},
      {header: this._translateService.getTranslate('label.title')},
      {header: this._translateService.getTranslate('label.date.post')},
      {header: this._translateService.getTranslate('label.categories')},
      {header: this._translateService.getTranslate('label.thumbnail')},
    ];
    this.selectedPosts = [];
  }

  ngOnInit() {

    this._postService.getPosts().subscribe(posts => {
      this._categoryService.getCategories().subscribe(categories => {

        // Recorriendo los posts
        _.forEach(posts, p => {
          // Recorreindo las categorias para cada post
          _.forEach(p.categories, (c_post, c_post_index) => {
            // Filer si el id de categoria de post existe en la lista de catgorias lo retornara
            const categoryFound = _.find(categories, c => {
              return c.id === c_post;
            });

            if (categoryFound) {
              // Asignado el objeto encontrado al indice de categoria del post
              p.categories[c_post_index] = categoryFound;
            }
          });
        });

        this.posts = posts;
        this.showPost = true;

      });
    });
  }


  updateWord(value) {
    this.searchWord = value;
  }

  deletePosts() {
    this._postService.deletePost(this.selectedPosts);
  }
}
