import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HeroimgComponent } from './shared/components/heroimg/heroimg.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './layouts/about/about.component';
import { WorkexpComponent } from './layouts/workexp/workexp.component';
import { SkillsComponent } from './layouts/skills/skills.component';
import { ProjectsComponent } from './layouts/projects/projects.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroimgComponent,
    AboutComponent,
    WorkexpComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
