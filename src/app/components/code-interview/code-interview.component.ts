import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-code-interview',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './code-interview.component.html',
  styleUrl: './code-interview.component.css'
})
export class CodeInterviewComponent {
  disabledField = true
  intId = uuid(); 
  interviewData: FormGroup = new FormGroup({
    language: new FormControl(''),
    experience: new FormControl(''),
    level: new FormControl(''),
  });

  //Form Submission Handling method
  onSubmit() {
    if (this.interviewData.valid) {
      console.log('Form Submitted!', this.interviewData.value);
      // Handle form submission logic here, e.g., send data to a server
    } else {
      console.log('Form is invalid!');
    }
  }

  ngOnInit(){
    this.interviewData.get('experience')?.valueChanges.subscribe(value => {
      let level = '';
      if (value === '0-1') {
        level = 'junior';
      } else if (value === '2-5') {
        level = 'mid';
      } else if (value === '5+') {
        level = 'senior';
      }
      this.interviewData.patchValue({ level }); // Update interview level
    });

    this.interviewData.get('level')?.disable();
  }
}
