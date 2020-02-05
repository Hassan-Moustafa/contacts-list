import {FormParts} from '../enums/enums';
import { IFormControl } from './form-control.interface';
import { ValidatorFn } from '@angular/forms';

export interface IFormGroup<T> {
  key: T;
  type: FormParts;
  controls: (IFormGroup<T> | IFormControl<T>)[];
  validators?: ValidatorFn | ValidatorFn[];
}
