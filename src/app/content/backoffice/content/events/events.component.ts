import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsService, IEvent } from './events.service';

@Component({
  selector: 'course-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public searchText: string = '';
  public events$: Observable<IEvent[]>;

  public constructor(
    @Inject(EventsService) private _eventsService: EventsService
  ) {
  }


  public ngOnInit(): void {
    this.events$ = this._eventsService.getEvents();
  }

  public search(e: Event): void {
    const inputElement: HTMLInputElement = e.target as HTMLInputElement;
    this.searchText = inputElement.value;
  }

}
