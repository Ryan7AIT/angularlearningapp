import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule} from'@angular/material/progress-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassComponent } from './class/class.component';
import { ClassesComponent } from './classes/classes.component';
import { ClasseDetailsComponent } from './classe-details/classe-details.component';
import { SemesterComponent } from './semester/semester.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BienvenuComponent } from './bienvenu/bienvenu.component';
import { CourComponent } from './cour/cour.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    ClassesComponent,
    ClasseDetailsComponent,
    SemesterComponent,
    WelcomeComponent,
    BienvenuComponent,
    CourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
