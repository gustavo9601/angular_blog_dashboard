import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Category} from '../models/category';
import {Observable} from 'rxjs';
import {ICategory} from '../interfaces/icategory';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private afd: AngularFireDatabase) {
  }

  addCategory(category: Category) {
    // Creando como una nueva tabla de categorias de no existir, o en caso contrario seleccionarla
    let categoryRef = this.afd.database.ref('categories');

    let newCategory = categoryRef.push(category);

    category.id = newCategory.key;

    let categoryRefId = this.afd.database.ref('categories/' + category.id);

    // Insertando el objeto en Firebase
    categoryRefId.set(category.getData());
  }

  getCategories(): Observable<ICategory[]> {
    return this.afd.list<ICategory>('/categories').valueChanges();
  }

  deleteCategories(ids: string[]) {
    _.forEach(ids, id => {
      this.afd.object("/categories/" + id).remove();
    });
  }
}
