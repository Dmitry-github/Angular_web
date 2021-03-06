import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeetingsListComponent } from './meetings-list/meetings-list.component';
import { MeetingsAttendComponent } from './meetings-attend/meetings-attend.component';
import { AppRoutingModule } from './app-routing.module';
import { MeetingsCreateComponent } from './meetings-create/meetings-create.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MeetingsListComponent,
    MeetingsAttendComponent,
    MeetingsCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
