import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingsServiceService {

  public meetings: Array<Meeting> = [];

  addMeeting(title: string, date: Date): Observable<any> {
    const id = this.meetings.map(x => x.id).reduce((previous, next) => previous = previous < next ? next : previous) + 1;

    const newItem = {id: id, title: title, date: date, numberOfAttendencies: 0};
    this.meetings.push(newItem);
    return of(newItem);
  }

  public getMeetings(): Observable<Array<Meeting>> {


    return of(this.meetings);
  }

  constructor() {

    this.meetings.push({id: 1, title: 'Football match', date: new Date(Date.parse('01.01.2020')), numberOfAttendencies: 100});
    this.meetings.push({id: 2, title: 'Racing', date: new Date(Date.parse('02.01.2020')), numberOfAttendencies: 1000});

  }

}

export class Meeting {
  public id: number;
  public title: string;
  public date: Date;
  public numberOfAttendencies: number;
}
