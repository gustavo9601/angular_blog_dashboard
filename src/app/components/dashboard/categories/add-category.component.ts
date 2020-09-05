import {Component, OnInit, ViewChild} from '@angular/core';
import {ICategory} from '../../../interfaces/icategory';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../models/category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  public category: ICategory;
  @ViewChild('modal_category') modal_category;

  constructor(private ngbServiceModal: NgbModal,
              private _categoryService: CategoryService,
              private router:Router) {
    this.category = {
      id: '',
      name: '',
      description: ''
    };
  }

  ngOnInit() {
  }

  addCategory() {
    const newCategory = new Category(this.category);

    console.log('newCategory', newCategory);
    this._categoryService.addCategory(newCategory);
    this.ngbServiceModal.open(this.modal_category);
    this.router.navigate(['/categories']);
  }

}
