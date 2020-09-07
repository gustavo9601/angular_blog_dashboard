import {Component, OnInit} from '@angular/core';
import {TranslateService} from '../../../services/translate.service';
import {CategoryService} from '../../../services/category.service';
import {ICategory} from '../../../interfaces/icategory';

import * as _ from 'lodash';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public cols: any[];
  public categories: ICategory[];
  public showCategories: boolean;
  public selectCategories: string[];

  public searchWord: string;

  constructor(private _translateService: TranslateService,
              private _categoryService: CategoryService) {
    this.categories = [];
    this.cols = [
      {header: ''},
      {header: this._translateService.getTranslate('label.name.category')},
      {header: this._translateService.getTranslate('label.description.category')},
    ];

    this.showCategories = false;
    this.selectCategories = [];
  }

  ngOnInit() {
    this._categoryService.getCategories().subscribe(
      (respuesta) => {
        this.categories = respuesta;
        this.showCategories = true;
      }, (error) => {
        console.log('Error al traer categoruias', error);
        this.showCategories = true;
      }
    );
  }

  deleteCategories() {
    this._categoryService.deleteCategories(this.selectCategories);
    this.selectCategories = [];
  }

  updateWord(search_value) {
    console.log('search_value', search_value);
  }
}
