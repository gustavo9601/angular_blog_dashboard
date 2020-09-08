import {IPost} from '../interfaces/ipost';
import * as _ from 'lodash';

export class Post implements IPost {

  constructor(data) {
    _.set(this, 'data', data);
  }

  /*Getters*/
  get id() {
    return _.get(this, 'data.id');
  }

  get title() {
    return _.get(this, 'data.title');
  }

  get date() {
    return _.get(this, 'data.date');
  }

  get content() {
    return _.get(this, 'data.content');
  }

  get categories() {
    return _.get(this, 'data.categories');
  }

  get img() {
    return _.get(this, 'data.img');
  }


  /*Setters*/
  set id(value: string) {
    _.set(this, 'data.id', value);
  }

  set title(value: string) {
    _.set(this, 'data.title', value);
  }

  set date(value: Date) {
    _.set(this, 'data.date', value);
  }

  set content(value: string) {
    _.set(this, 'data.content', value);
  }

  set categories(value: string[]) {
    _.set(this, 'data.categories', value);
  }

  set img(value: string) {
    _.set(this, 'data.img', value);
  }


  getData() {
    return _.get(this, 'data');
  }
}
