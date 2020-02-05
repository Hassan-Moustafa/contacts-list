import {FormParts} from '../enums/enums';
import { IFormGroup } from './form-group.interface';
import { ValidatorFn } from '@angular/forms';

export interface IFormControl<T> {
  key: T;
  defaultValue: any;
  type: FormParts;
  validation?: (ValidatorFn)[];
}
