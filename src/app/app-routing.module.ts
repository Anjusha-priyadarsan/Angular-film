import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { SingleViewComponent } from './single-view/single-view.component';

const routes: Routes = [{path:'',component:FilmListComponent},
{path:'single/:id',component:SingleViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
