import {Injectable} from '@angular/core';

import {AngularFireDatabase} from '@angular/fire/database';
import {Post} from '../models/post';

import * as moment from 'moment';
import * as _ from 'lodash';
import {IPost} from '../interfaces/ipost';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afd: AngularFireDatabase) {
  }

  addPost(post: Post) {

    post.date = moment().toISOString();

    const postRef = this.afd.database.ref('post');

    const newPost = postRef.push();

    post.id = newPost.key;

    const postRefId = this.afd.database.ref('posts/' + post.id);

    postRefId.set(post.getData());
  }

  getPosts(): Observable<IPost[]> {
    return this.afd.list<IPost>('posts').valueChanges();
  }

  deletePost(ids: string[]) {
    _.forEach(ids, id => {
      this.afd.object('/posts/' + id).remove();
    });
  }

}
