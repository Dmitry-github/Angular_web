import { Component, OnInit } from '@angular/core';
import {Meeting, MeetingsServiceService} from '../meetings-service.service';

@Component({
  selector: 'app-meetings-list',
  templateUrl: './meetings-list.component.html',
  styleUrls: ['./meetings-list.component.scss']
})
export class MeetingsListComponent implements OnInit {

  public meetings: Meeting[];

  constructor(private service: MeetingsServiceService) {

    this.meetings = [];

  }

  ngOnInit(): void {
    this.service.getMeetings().subscribe(x => {
      this.meetings = x;
    });
  }
}
