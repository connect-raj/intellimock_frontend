import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { HeaderComponent } from '../../../common/header/header.component';
import { CommonModule } from '@angular/common';
import { merge } from 'rxjs';
import { LoginService } from '../../../../services/auth/login.service';
import { userObjLogin } from '../../../../constants/types';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, HeaderComponent, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginSignal = signal<string>('');
  emailErrorMsg = signal<string>('');
  passErrorMsg = signal<string>('');
  readonly userEmail = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  readonly userPassword = new FormControl('', [
    Validators.required,
    Validators.pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/
    ),
    Validators.minLength(8),
    Validators.maxLength(16),
  ]);
  readonly confirmPassword = new FormControl('', [
    Validators.required,
    Validators.pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/
    ),
    Validators.minLength(8),
    Validators.maxLength(16),
  ]);
  readonly userName = new FormControl('', [Validators.required]);
  userDataForm: FormGroup;
  constructor(private route: ActivatedRoute, private userLogin:LoginService) {
    this.userDataForm = new FormGroup({
      userEmail: this.userEmail,
      userPassword: this.userPassword,
    });

    merge(this.userEmail.valueChanges, this.userPassword.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.validatorEmail();
        this.validatorPassword();
      });
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.loginSignal.set(data['formType']);
    });
    if (this.loginSignal() === 'Register') {
      this.userDataForm.addControl('confirmPassword', this.confirmPassword);
      this.userDataForm.addControl(
        'userFullName',
        new FormControl('', Validators.required)
      );
    }

    //initilizing validators
    this.validatorEmail();
    this.validatorPassword();
  }

  formHandler() {
    if (this.userDataForm.valid) {
      const data:userObjLogin = {
        userEmail: this.userDataForm.get('userEmail')?.value,
        userPassword: this.userDataForm.get('userPassword')?.value,
      }

      this.userLogin.userLogin(data).subscribe((res) => {
        console.log(res);
      })
    } else {
      console.log('Form is invalid');
    }
  }

  validatorEmail() {
    if (this.userEmail.hasError('required')) {
      this.emailErrorMsg.set('*E-Mail is required');
    } else if (this.userEmail.hasError('email')) {
      this.emailErrorMsg.set('Please enter a valid E-mail');
    } else {
      this.emailErrorMsg.set('');
    }
  }

  validatorPassword() {
    if (this.userPassword.hasError('required')) {
      this.passErrorMsg.set('*Password is required');
    } else if (
      this.userPassword.hasError('minlength') ||
      this.userPassword.hasError('maxlength')
    ) {
      this.passErrorMsg.set(
        'Password should be of 8 characters with maximum of 16'
      );
    } else if (this.userPassword.hasError('pattern')) {
      this.passErrorMsg.set(
        'Password should be alphanumeric & special characters only'
      );
    } else {
      this.passErrorMsg.set('');
    }
  }
}
