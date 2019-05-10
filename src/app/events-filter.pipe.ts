import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from './events.service';

@Pipe({
  name: 'eventsFilter'
})
export class EventsFilterPipe implements PipeTransform {

  public transform(events: IEvent[], searchText: string): IEvent[] {
    if (!searchText) {
      return events;
    }
    return events.filter((event: IEvent) => {
      return event.text
        .trim()
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  }

}
