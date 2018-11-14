import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ClickCounterComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'clicks', component: ClickCounterComponent},
      {path: '', pathMatch: 'full', component: HomeComponent}
    ]),
    StoreModule.forFeature('admin', reducers)
  ],
  bootstrap: [HomeComponent]
})
export class AdminModule { }
