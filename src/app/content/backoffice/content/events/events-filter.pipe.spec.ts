import { EventsFilterPipe } from './events-filter.pipe';
import { IEvent } from './events.service';

const events: IEvent[] = [
  {
    _id: '1',
    text: 'Angular',
    date: new Date(),
    status: false
  },
  {
    _id: '2',
    text: 'React',
    date: new Date(),
    status: false
  },
  {
    _id: '2',
    text: 'Vue',
    date: new Date(),
    status: false
  }
];

describe('Events Filter pipe', () => {
  let eventsFilterPipe: EventsFilterPipe;
  beforeEach(() => {
    eventsFilterPipe = new EventsFilterPipe();
  });

  it('should filter', () => {
    expect(eventsFilterPipe.transform(events, 'ang').length).toEqual(1);
    expect(eventsFilterPipe.transform(events, 'ang')).toEqual([events[0]]);
    expect(eventsFilterPipe.transform(events, 'angasdasd')).toEqual([]);
  });
});
