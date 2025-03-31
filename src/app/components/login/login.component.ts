import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginSignal = signal<string>('');
  userDataForm: FormGroup = new FormGroup({
    userEmail: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/
      ),
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),
  });
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.loginSignal.set(data['formType']);
    });
    if (this.loginSignal() === 'Sign up') {
      this.userDataForm.addControl(
        'confirmPassword',
        new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/
          ),
          Validators.minLength(8),
          Validators.maxLength(16),
        ])
      );
      this.userDataForm.addControl(
        'userFullName',
        new FormControl('', Validators.required)
      );
    }
  }

  formHandler() {
    if (this.userDataForm.valid) {
      console.log(this.userDataForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
