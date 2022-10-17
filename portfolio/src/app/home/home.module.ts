import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProjectsComponent } from './projects/projects.component';
// export function HttpLoaderFactory(http: HttpClient){
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    JobsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }