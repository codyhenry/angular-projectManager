import { Component } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormGroupDirective, NgForm, AbstractControl } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent!.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}


@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent{

  nameForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName:  ['',Validators.required],
  });

  emailForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });
  

  passwordForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required]
  },
  { 
    validator: this.checkPasswords 
  });
  

  matcher = new ErrorStateMatcher();

  constructor(private fb: FormBuilder) { }

  checkPasswords(group: AbstractControl) { // here we have the 'passwords' group
    let pass: string = group.get('password')!.value;
    let confirmPass: string = group.get('confirmPassword')!.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  onSubmit(){
    console.log(this.nameForm.value);
  }
  
}
