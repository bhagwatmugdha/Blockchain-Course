import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabMenuModule } from 'primeng/tabmenu';
import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { ImageModule } from 'primeng/image';
import { RippleModule } from 'primeng/ripple';
import { PanelModule } from 'primeng/panel';
import { SpeedDialModule } from 'primeng/speeddial';
import { TagModule } from 'primeng/tag';
import { MenubarModule } from 'primeng/menubar';


import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { FooterComponent } from './footer/footer.component';
import { CourseContentComponent } from './course-content/course-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CurriculumComponent,
    FooterComponent,
    CourseContentComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CardModule,
    DividerModule,
    FieldsetModule,
    FormsModule,
    ImageModule,
    MenubarModule,
    PanelModule,
    RippleModule,
    SpeedDialModule,
    TabMenuModule,
    TimelineModule,
    TagModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }