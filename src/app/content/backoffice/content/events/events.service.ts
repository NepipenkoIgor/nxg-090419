import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_URL_TOKEN } from '../../../../config';

export interface IEvent {
  _id: string;
  text: string;
  date: Date;
  status: boolean;
}

const events: IEvent[] = [
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
];


export type ResTable = { table: IEvent[] };

export class EventsService {

  public constructor(
    @Inject(HttpClient) private _http: HttpClient,
  ) {
  }

  public getEvents(): Observable<IEvent[]> {
    return this._http.get<ResTable>(`/notification/table?page=0`)
      .pipe(map((res: ResTable) => res.table));

  }
}
