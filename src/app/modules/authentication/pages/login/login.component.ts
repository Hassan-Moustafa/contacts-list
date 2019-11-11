import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor() { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  /**
   * onSubmit
   */
  public onSubmit() {
    console.log(this.loginForm.get('password').errors);
  }

  /**
   * getValidationMessages
   */
  public getValidationMessages(field, fieldNameAsText) {
    let validationMessage = null;
    if (this.loginForm.get(field).hasError('required')) {
      validationMessage = `${fieldNameAsText} is required`;
    } else if (this.loginForm.get(field).hasError('email')) {
        validationMessage = `${fieldNameAsText} is not valid`;
    } else if (this.loginForm.get(field).hasError('minlength')) {
        const errorData = this.loginForm.get(field).errors.minlength;
        validationMessage = `${fieldNameAsText} length should be ${errorData.requiredLength}`;
    }
    return validationMessage;
  }

}
