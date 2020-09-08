import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ICategory} from '../../../../interfaces/icategory';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-widget-select-category',
  templateUrl: './widget-select-category.component.html',
  styleUrls: ['./widget-select-category.component.css']
})
export class WidgetSelectCategoryComponent implements OnInit {

  public categories: ICategory[];
  public selectedCategories: string[];


  @Output() select: EventEmitter<string[]>;

  constructor(private _categoryService: CategoryService) {
    this.categories = [];
    this.selectedCategories = [];
    this.select = new EventEmitter<string[]>();
  }

  ngOnInit() {
    this._categoryService.getCategories().subscribe(
      listCategorias => this.categories = listCategorias
    );
  }


  sendCategories() {
    // Emitira cada ves que se seleccione categorias al padre
    this.select.emit(this.selectedCategories);
  }

}
