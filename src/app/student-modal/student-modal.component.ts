import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.scss']
})
export class StudentModalComponent implements OnInit {
  @Input() student: any;
  @Output() onSave = new EventEmitter<any>();
  studentForm: FormGroup;
  genders = ['Male', 'Female', 'Other'];

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: [this.student ? this.student.name : '', Validators.required],
      email: [this.student ? this.student.email : '', [Validators.required, Validators.email]],
      age: [this.student ? this.student.age : '', Validators.required],
      dob: [this.student ? this.student.dob : '', Validators.required],
      gender: [this.student ? this.student.gender : '', Validators.required]
    });
  }

  save(): void {
    if (this.studentForm.valid) {
      this.onSave.emit(this.studentForm.value);
      this.bsModalRef.hide();
    }
  }
}
