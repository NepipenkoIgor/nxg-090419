import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsService, IEvent } from './events.service';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // interpolation: ['/', ']']
})
export class AppComponent implements OnInit {
  public drawer: any;
  public searchText: string = '';
  public events$: Observable<IEvent[]>;

  public constructor(
    @Inject(EventsService) private _eventsService: EventsService
  ) {
  }

  public setDrawerControl(drawer: any): void {
    Promise.resolve().then(() => this.drawer = drawer);
  }

  public ngOnInit(): void {
    this.events$ = this._eventsService.getEvents();
  }

  public search(e: Event): void {
    const inputElement: HTMLInputElement = e.target as HTMLInputElement;
    this.searchText = inputElement.value;
  }
}

