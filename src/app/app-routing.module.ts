import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseDetailsComponent } from './classe-details/classe-details.component';
import { ClassesComponent } from './classes/classes.component';
import { SemesterComponent } from './semester/semester.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BienvenuComponent } from './bienvenu/bienvenu.component';
import { CourDetailsComponent } from './cour-details/cour-details.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  {path: 'modules', component: ClassesComponent},
  {path: '', component: WelcomeComponent},
  {path: 'modules/:id', component: ClasseDetailsComponent},
  {path: 'bien', component: BienvenuComponent},
  {path: 'modules/cours/:id', component: CourDetailsComponent},
  {path: 'forum', component: CommentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
