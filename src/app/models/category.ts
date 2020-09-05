import {ICategory} from '../interfaces/icategory';
import * as _ from 'lodash';

export class Category implements ICategory {

  constructor(data) {
    _.set(this, 'data', data);
  }

  get id() {
    return _.get(this, 'data.id');
  }

  get name() {
    return _.get(this, 'data.name');
  }

  get description() {
    return _.get(this, 'data.description');
  }


  set id(value) {
    _.set(this, 'data.id', value);
  }

  set name(value) {
    _.set(this, 'data.name', value);
  }

  set description(value) {
    _.set(this, 'data.description', value);
  }

  getData() {
    return _.get(this, 'data');
  }
}
