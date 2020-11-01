import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingsServiceService {

  public getMeetings(): Observable<Array<Meeting>>{

    const meetings: Array<Meeting> = [];

    meetings.push({title: 'Football match', date: new Date(Date.parse('01.01.2020')), numberOfAttendencies: 100});
    meetings.push({title: 'Racing', date: new Date(Date.parse('02.01.2020')), numberOfAttendencies: 1000});

    return of(meetings);
  }

  constructor() { }
}

export class Meeting {
  public title: string;
  public date: Date;
  public numberOfAttendencies: number;
}
