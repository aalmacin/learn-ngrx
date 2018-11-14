import { Component, OnInit } from '@angular/core';
import {createFeatureSelector, Store} from '@ngrx/store';
import {ClickState} from '../click.reducer';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {OverrideClicks, PerformClick} from '../click.actions';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css']
})
export class ClickCounterComponent implements OnInit {
  clickState$: Observable<number>;

  constructor(private store: Store<ClickState>) {
    const selector = createFeatureSelector<ClickState>('admin')
    this.clickState$ = store.select(selector).pipe(
      map(data => data.clicks)
    );
  }

  ngOnInit() {
  }

  performClick() {
    this.store.dispatch(new PerformClick());
  }

  overrideClicks($event) {
    this.store.dispatch(new OverrideClicks(+$event.target.value));
  }
}
