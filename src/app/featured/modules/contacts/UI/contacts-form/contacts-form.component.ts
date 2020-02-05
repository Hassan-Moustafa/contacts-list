import { Component, OnInit } from '@angular/core';
import { BaseFormModel } from '../../../../../shared/baseClasses/base-form.model';
import { ContactFields, FormParts } from '../../../../../shared/enums/enums';
import { Validators, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ContactService } from '../../services/contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent extends BaseFormModel<ContactFields> implements OnInit {

  contactImage: string;
  imageUrl: SafeUrl;
  countriesCodes = [
    {
      country: 'eg',
      code: '+20',
      regex: '^01[0-2]{1}[0-9]{8}$'
    },
    {
      country: 'us',
      code: '+1',
      regex: '^[\\(]{0,1}([0-9]){3}[\\)]{0,1}[ ]?([^0-1]){1}([0-9]){2}[ ]?[-]?[ ]?([0-9]){4}[ ]*((x){0,1}([0-9]){1,5}){0,1}$'
    },

  ]
  constructor(
      private domSanitizer: DomSanitizer, 
      private contactService: ContactService,
      private router: Router,
      private route: ActivatedRoute) { 
    super();
  }

  ngOnInit() {
    this.formObject = {
      controls: [
        {
          key: ContactFields.firstName,
          defaultValue: '',
          type: FormParts.FormControl,
          validation: [
            Validators.required
          ]
        },
        {
          key: ContactFields.lastName,
          defaultValue: '',
          type: FormParts.FormControl,
          validation: [
            Validators.required
          ]
        },
        {
          key: ContactFields.countryCode,
          defaultValue: '+1',
          type: FormParts.FormControl,
          validation: [
            Validators.required
          ]
        },
        {
          key: ContactFields.phoneNumber,
          defaultValue: '',
          type: FormParts.FormControl,
          validation: [
            Validators.required
          ]
        },
        {
          key: ContactFields.emailAddress,
          defaultValue: '',
          type: FormParts.FormControl,
          validation: [
            Validators.required,
            Validators.email
          ]
        },
        {
          key: ContactFields.image,
          defaultValue: '',
          type: FormParts.FormControl,
          validation: []
        },
      ],
      validators: this.validatePhoneNumber
    }
  }

  getFields() {
    return ContactFields;
  }

  readFile(event){
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.contactImage = 'data:image/png;base64,' + btoa(e.target.result);
        this.imageUrl = this.domSanitizer.bypassSecurityTrustUrl(this.contactImage);
      };
      reader.readAsBinaryString(file);
    }
  }

  blobToFile(blob: Blob, fileName: string): File {
    let b: any = blob;
    b.lastModified = Date.now();
    b.lastModifiedDate = new Date();
    b.name = fileName;
    b.webkitRelativePath="";
    return <File>blob
}

  getImage() {
    if(this.contactImage) {
      return this.imageUrl;
    } else return '../../../../../../assets/images/contact.png';
  }

  onSubmit(){
    this.contactService.addNewContact({
      ... this.form.value,
      image: this.contactImage
    });

    this.router.navigate(['../'], {relativeTo: this.route})
  }

  validatePhoneNumber: ValidatorFn = (form: FormGroup): ValidationErrors | null => {

    const phoneNumber = form.get('phoneNumber').value;
    const countryCode = form.get('countryCode').value;
    return this.isMatchRegex(countryCode, phoneNumber) ? null : {invalidPhoneNumber: true, message: 'Phone number is not valid with the selected code', field: 'phoneNumber'};
  };

  isMatchRegex(countryCode: string, phoneNumber: string): boolean {
    const countryData = this.countriesCodes.find((country) => {
      return country.code === countryCode;
    })
    const regex = RegExp(countryData.regex);
    return regex.test(phoneNumber);
  }

}
