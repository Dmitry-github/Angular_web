import { Component, OnInit } from '@angular/core';
import {MeetingsServiceService} from '../meetings-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-meetings-create',
  templateUrl: './meetings-create.component.html',
  styleUrls: ['./meetings-create.component.scss']
})
export class MeetingsCreateComponent implements OnInit {

  public model: CreateMeetingModel;

  constructor(private service: MeetingsServiceService, private router: Router) {

    this.model = new CreateMeetingModel();
    this.model.date = new Date();
    this.model.title = '';

  }

  ngOnInit(): void {
  }

  create(): void {
    this.service.addMeeting(this.model.title, this.model.date).subscribe(x => this.router.navigate(['/']));
  }

}

export class CreateMeetingModel{
  public title: string;
  public date: Date;
}
