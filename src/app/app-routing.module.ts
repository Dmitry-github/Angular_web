import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MeetingsListComponent} from './meetings-list/meetings-list.component';
import {MeetingsAttendComponent} from './meetings-attend/meetings-attend.component';
import {MeetingsCreateComponent} from './meetings-create/meetings-create.component';

const routes: Routes = [
  { path : '', pathMatch: 'full', component : MeetingsListComponent },
  { path : 'attend/:id', component : MeetingsAttendComponent },
  { path : 'create/:id', component : MeetingsCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
