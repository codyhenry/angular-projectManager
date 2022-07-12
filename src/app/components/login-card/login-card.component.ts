import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { Validators, FormBuilder, FormGroupDirective, NgForm, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

export class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent!.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent && control.valid);
  }
}

export const passwordValidator: ValidatorFn = (form: AbstractControl): ValidationErrors | null => {
  if(form.get('confirmCtrl')!.value === ""){
    return null
  }
  const condition = form.get('passwordCtrl')!.value !== form.get('confirmCtrl')!.value;

  return condition ? { passwordsDoNotMatch: true} : null;
}

 @Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html', 
  styleUrls: ['./login-card.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class LoginCardComponent {

  nameFormGroup = this._formBuilder.group({
    firstNameCtrl: ['', Validators.required],
    lastNameCtrl: ['', Validators.required],
  });
  emailFormGroup = this._formBuilder.group({
    emailCtrl: ['', [Validators.required, Validators.email]],
  });
  passwordFormGroup = this._formBuilder.group({
    passwordCtrl: ['', [Validators.required, Validators.minLength(8)]],
    confirmCtrl: [''],
    updateOn: blur
  }, {
    //screenshot this with error (remove 's' from validators)
    validators: passwordValidator
  });

  errorMatcher = new CrossFieldErrorMatcher();

  constructor(private _formBuilder: FormBuilder) {}

  
}