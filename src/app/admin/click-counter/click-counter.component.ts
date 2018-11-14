import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ClickState} from '../click.reducer';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css']
})
export class ClickCounterComponent implements OnInit {
  clickState$: Observable<number>;

  constructor(private store: Store<ClickState>) {
    this.clickState$ = store.select('clicks');
  }

  ngOnInit() {
  }

}
