import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaydescriptionComponent } from './daydescription/daydescription.component';
import { NewDayComponent } from './new-day/new-day.component';

const routes: Routes = [
  { path: 'detail/:id', component: DaydescriptionComponent },
  { path: 'detail', component: DaydescriptionComponent },
  { path: 'newDay', component: NewDayComponent },
  { path: '', redirectTo: 'detail', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
