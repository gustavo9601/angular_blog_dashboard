import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ResumeComponent} from './components/dashboard/resume/resume.component';
import {PostsComponent} from './components/dashboard/posts/posts.component';
import {CategoriesComponent} from './components/dashboard/categories/categories.component';
import {AddCategoryComponent} from './components/dashboard/categories/add-category.component';
import {AddPostsComponent} from './components/dashboard/posts/add-posts.component';
import {LoginComponent} from './components/login/login.component';
import {LoginGuard} from './guards/login.guard';

const routes: Routes = [
  {path: 'resume', component: ResumeComponent, canActivate: [LoginGuard]},
  {path: 'posts', component: PostsComponent, canActivate: [LoginGuard]},
  {path: 'categories', component: CategoriesComponent, canActivate: [LoginGuard]},
  {path: 'add-category', component: AddCategoryComponent, canActivate: [LoginGuard]},
  {path: 'add-post', component: AddPostsComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'resume'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
