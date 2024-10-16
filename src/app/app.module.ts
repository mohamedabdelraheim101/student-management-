// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

// Import your components
import { StudentListComponent } from './student-list/student-list.component';
import { StudentModalComponent } from './student-modal/student-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    // NgSelectModule,
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
