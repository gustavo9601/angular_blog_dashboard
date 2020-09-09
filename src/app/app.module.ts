import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {AngularFireAuthModule} from '@angular/fire/auth';

// Pipe
import {TranslatePipe} from './pipes/translate.pipe';

// Service
import {TranslateService} from './services/translate.service';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {ConfigService} from './services/config.service';
import {PostsComponent} from './components/dashboard/posts/posts.component';
import {CategoriesComponent} from './components/dashboard/categories/categories.component';
import {ResumeComponent} from './components/dashboard/resume/resume.component';
import {WidgetComponent} from './components/dashboard/widget/widget.component';
import {WidgetStadisticsComponent} from './components/dashboard/widget/widget-stadistics/widget-stadistics.component';
import {WidgetLastCommentsComponent} from './components/dashboard/widget/widget-last-comments/widget-last-comments.component';
import {WidgetLastVisitsComponent} from './components/dashboard/widget/widget-last-visits/widget-last-visits.component';
import {ChartModule} from 'primeng/chart';
import {AddCategoryComponent} from './components/dashboard/categories/add-category.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {HighligthDirective} from './directives/highligth.directive';
import {AddPostsComponent} from './components/dashboard/posts/add-posts.component';
import {WidgetSelectCategoryComponent} from './components/dashboard/widget/widget-select-category/widget-select-category.component';
import {WidgetUploadThumbnailComponent} from './components/dashboard/widget/widget-upload-thumbnail/widget-upload-thumbnail.component';
import { JoinPipe } from './pipes/join.pipe';


export function translateFactory(provider: TranslateService) {
  return () => provider.getData();
}

export function configFactory(provider: ConfigService) {
  return () => provider.getData();
}

const firebaseConfig = {
  apiKey: 'AIzaSyBQNtv38NgXEc7NSPcY0NOax9wqDnYoigk',
  authDomain: 'gm-blog-dashboard.firebaseapp.com',
  databaseURL: 'https://gm-blog-dashboard.firebaseio.com',
  projectId: 'gm-blog-dashboard',
  storageBucket: 'gm-blog-dashboard.appspot.com',
  messagingSenderId: '841610789530',
  appId: '1:841610789530:web:942f8755f994ebc34e9523'
};


@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    PostsComponent,
    CategoriesComponent,
    ResumeComponent,
    WidgetComponent,
    WidgetStadisticsComponent,
    WidgetLastCommentsComponent,
    WidgetLastVisitsComponent,
    AddCategoryComponent,
    HighligthDirective,
    AddPostsComponent,
    WidgetSelectCategoryComponent,
    WidgetUploadThumbnailComponent,
    JoinPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ChartModule,
    FormsModule,
    NgbModule,
    TableModule,
    CheckboxModule,
    AngularEditorModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    },
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
