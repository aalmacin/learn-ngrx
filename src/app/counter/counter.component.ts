import { Component, OnInit } from '@angular/core';
import {State} from '../reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Decrement, Increment, Reset} from '../count.actions';
import {CountState} from '../count.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  countState$: Observable<number>;

  constructor(private store: Store<CountState>) {
    this.countState$ = store.select('count');
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
