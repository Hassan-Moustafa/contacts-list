import { Component, OnInit } from '@angular/core';
import { BaseFormModel } from '../../../../../shared/baseClasses/base-form.model';
import { ContactFields, FormParts } from '../../../../../shared/enums/enums';
import { Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent extends BaseFormModel<ContactFields> implements OnInit {

  contactImage: string;
  imageUrl: SafeUrl;
  constructor(private domSanitizer: DomSanitizer) { 
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
      ]
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
  }

}
