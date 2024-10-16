// src/app/student-list/student-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StudentModalComponent } from '../student-modal/student-modal.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students = [
    { name: 'John Doe', email: 'john@example.com', age: 20, dob: new Date('2002-01-01'), gender: 'Male' },
    // Add more initial students if needed
  ];
  selectedStudents: any[] = [];
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {}

  openModal(student: any = null): void {
    this.modalRef = this.modalService.show(StudentModalComponent, {
      initialState: {
        student: student
      }
    });

    this.modalRef.content.onSave.subscribe((result: any) => {
      if (student) {
        const index = this.students.indexOf(student);
        this.students[index] = result;
      } else {
        this.students.push(result);
      }
    });
  }

  toggleSelection(student: any): void {
    if (this.selectedStudents.includes(student)) {
      this.selectedStudents = this.selectedStudents.filter(s => s !== student);
    } else {
      this.selectedStudents.push(student);
    }
  }

  toggleAllSelection(event: any): void {
    if (event.target.checked) {
      this.selectedStudents = [...this.students];
    } else {
      this.selectedStudents = [];
    }
  }

  deleteSelectedStudents(): void {
    this.selectedStudents.forEach(student => {
      this.students = this.students.filter(s => s !== student);
    });
    this.selectedStudents = [];
  }
}
