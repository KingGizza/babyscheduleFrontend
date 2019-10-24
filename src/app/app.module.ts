import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaydescriptionComponent } from './daydescription/daydescription.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NewDayComponent } from './new-day/new-day.component';
import {RouterModule, Routes} from '@angular/router'
const appRoutes: Routes =[
  { path: 'detail/:id', component: DaydescriptionComponent },
  { path: 'detail/', component: DaydescriptionComponent },
  { path: 'newDay', component: NewDayComponent },
  { path: '', redirectTo: '/detail', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    DaydescriptionComponent,
    NewDayComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DaydescriptionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
