import { Component, OnInit } from '@angular/core';
import {MeetingsServiceService} from '../meetings-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-meetings-attend',
  templateUrl: './meetings-attend.component.html',
  styleUrls: ['./meetings-attend.component.scss']
})
export class MeetingsAttendComponent implements OnInit {

  public model: AttendMeetingModel;

  constructor(private service: MeetingsServiceService, private router: Router) {

    this.model = new AttendMeetingModel();
    this.model.Name = '';
    this.model.Email = '';

  }

  ngOnInit(): void {
  }

}

export class AttendMeetingModel {
  public Name: string;
  public Email: string;
}
