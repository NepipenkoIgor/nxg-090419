import { Component, OnInit } from '@angular/core';
import { events$, IEvent } from './mock/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // interpolation: ['/', ']']
})
export class AppComponent implements OnInit {
  public drawer: any;
  public searchText: string = '';
  public events$: Observable<IEvent[]> = events$;

  public setDrawerControl(drawer: any): void {
    Promise.resolve().then(() => this.drawer = drawer);
  }

  public ngOnInit(): void {
  }

  public search(e: Event): void {
    const inputElement: HTMLInputElement = e.target as HTMLInputElement;
    this.searchText = inputElement.value;
  }
}

