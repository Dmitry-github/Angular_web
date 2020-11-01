import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MeetingsListComponent} from './meetings-list/meetings-list.component';
import {MeetingsAttendComponent} from './meetings-attend/meetings-attend.component';

const routes: Routes = [
  { path : '', pathMatch: 'full', component : MeetingsListComponent },
  { path : 'attend/:id', component : MeetingsAttendComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
