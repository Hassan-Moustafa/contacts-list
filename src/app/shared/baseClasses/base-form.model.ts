import { FormGroup, FormControl, FormArray, ValidatorFn } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { IFormGroup } from '../interfaces/form-group.interface';
import { IFormControl } from '../interfaces/form-control.interface';
import { FormParts } from '../enums/enums';

interface IFormObject<T> {
  controls: (IFormGroup<T>| IFormControl<T>)[];
  validators?: ValidatorFn | ValidatorFn[];
}

export abstract class BaseFormModel<T> {

  form: FormGroup;
  private formObject_: IFormObject<T>;

  set formObject(value: IFormObject<T>) {
    this.formObject_ = value;
    this.form = new FormGroup(this.constructForm(value), {validators: value.validators});
  }

  @Output()
  dataSaved = new EventEmitter<any>();

  constructForm(formObject: IFormObject<T>|IFormGroup<T>) {

    const formGroup = {};
    formObject.controls.forEach((control: (IFormControl<T>|IFormGroup<T>)) => {
      const key: string = ((control.key) as unknown) as string;
      if (control.type === FormParts.FormControl) {
        control = control as IFormControl<T>;
        formGroup[key] = new FormControl(control.defaultValue, control.validation);
      } else if (control.type === FormParts.FormGroup) {
        control = control as IFormGroup<T>;
        const innerFormGroup = this.constructForm(control);
        formGroup[key] = new FormGroup(innerFormGroup, {validators: control.validators});
      } else if (control.type === FormParts.FormArray) {
        formGroup[key] = new FormArray([]);
      }
    });
    return formGroup;
  }

  abstract getFields();

  hasError(pathKey: string[]) {
    const key = this.getFullKey(pathKey);
    return (this.form.get(key).invalid && this.form.get(key).dirty) ||
           (this.form.get(key).dirty && this.form.errors && this.form.errors.field === key);
  }

  getFullKey(pathKey: string[]) {
    let key = '';
    for (let i = 0 ; i < pathKey.length - 1 ; i++) {
      key += pathKey[i] + '.';
    }
    key += pathKey[pathKey.length - 1];
    return key;
  }

  getValidationMessage(pathKey: string[], fieldAsText: string) {
    const field = this.getFullKey(pathKey);
    if (this.form.get(field).hasError('required')) {
        return `${fieldAsText} is required`;
    } else if (this.form.get(field).hasError('email')) {
        return `${fieldAsText} must be a valid email`;
    } else if (this.form.get(field).hasError('invalidNumber')) {
        return `${fieldAsText} must be a valid number`;
    } else if (this.form.get(field).hasError('minlength')) {
      return `${fieldAsText} length must be at least ${this.form.get(field).errors.minlength.requiredLength}`;
    } else if (this.form.get(field).hasError('match')) {
      return `${fieldAsText} ${this.form.get(field).errors['match'].value}`;
    } else if (this.form.errors && this.form.errors.field === field) {
      return `${this.form.errors.message}`;
    }
  }
}

/**
 * example:
 * this.formObject = {
 * controls: [
 *   {
 *    key: ConfigurationFields.mainData,
 *    type: FormParts.FormGroup,
 *    controls: [
 *      {
 *         key: ConfigurationFields.keyName,
 *         defaultValue: '',
 *         type: FormParts.FormControl,
 *         validation: [
 *           Validators.required,
 *           Validators.minLength(5)
 *         ]
 *       },
 *       {
 *         key: ConfigurationFields.value,
 *         defaultValue: '',
 *         type: FormParts.FormControl,
 *         validation: []
 *       },
 *     ]
 *   },
 *   {
 *     key: ConfigurationFields.productId,
 *     defaultValue: '',
 *     type: FormParts.FormControl,
 *     validation: []
 *   },
 *   {
 *     key: ConfigurationFields.environmentId,
 *     defaultValue: '',
 *     type: FormParts.FormControl,
 *     validation: []
 *   },
 * ]
 * };
 */

