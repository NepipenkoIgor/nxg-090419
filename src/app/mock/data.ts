import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface IEvent {
  _id: string;
  text: string;
  date: Date;
  status: boolean;
}

export const events$: Observable<IEvent[]> = of([
  {
    _id: '123125asfad14',
    text: 'Hi angular',
    date: new Date(),
    status: true
  },
  {
    _id: '123125asad14',
    text: 'Hi angular',
    date: new Date(),
    status: true
  },
  {
    _id: '123125asfadasd14',
    text: 'Hi Cicle',
    date: new Date(),
    status: true
  },
  {
    _id: '123asd125asfad14',
    text: 'Hi angularJS',
    date: new Date(),
    status: true
  },
  {
    _id: '12asd3125asfad14',
    text: 'Hi React',
    date: new Date(),
    status: true
  },
  {
    _id: '12asd3125asfad14',
    text: 'Hi Vue',
    date: new Date(),
    status: true
  },
  {
    _id: '1asd23125asfad14',
    text: 'Hi angular',
    date: new Date(),
    status: true
  },
  {
    _id: '1232ddd125asfad14',
    text: 'Hi Jquery',
    date: new Date(),
    status: true
  },
]).pipe(delay(3000));
