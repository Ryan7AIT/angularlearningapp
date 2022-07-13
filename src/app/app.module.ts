import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassComponent } from './class/class.component';
import { ClassesComponent } from './classes/classes.component';
import { ClasseDetailsComponent } from './classe-details/classe-details.component';
import { SemesterComponent } from './semester/semester.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BienvenuComponent } from './bienvenu/bienvenu.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    ClassesComponent,
    ClasseDetailsComponent,
    SemesterComponent,
    WelcomeComponent,
    BienvenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
