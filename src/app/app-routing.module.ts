import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ResumeComponent} from './components/dashboard/resume/resume.component';
import {PostsComponent} from './components/dashboard/posts/posts.component';
import {CategoriesComponent} from './components/dashboard/categories/categories.component';
import {AddCategoryComponent} from './components/dashboard/categories/add-category.component';
import {AddPostsComponent} from './components/dashboard/posts/add-posts.component';

const routes: Routes = [
  {path: 'resume', component: ResumeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'add-category', component: AddCategoryComponent},
  {path: 'add-post', component: AddPostsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'resume'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
