import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-mock-interview',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './mock-interview.component.html',
  styleUrl: './mock-interview.component.css'
})
export class MockInterviewComponent {
  disabledField = true
  intId = uuid(); 
  interviewData: FormGroup = new FormGroup({
    interviewType: new FormControl(''),
    language: new FormControl(''),
    experience: new FormControl(''),
    level: new FormControl(''),
  });

  // Getter for checking if interview type is selected
  get isMockTypeSelected(): boolean {
    return this.interviewData.get('interviewType')?.value === 'mock';
  }
  
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