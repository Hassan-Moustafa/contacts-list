import { Component, OnInit, Input } from '@angular/core';
import { ContactModel } from 'src/app/shared/models/contact.model';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {

  @Input() contactsList: ContactModel[];
  @Input() showLettersNav: boolean = true;
  @Input() showSubHeader: boolean = true;


  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd',
    });
  }

  getSubListHeader(index: number, contact: ContactModel) {
    if (index === 0) {
      return contact.contactDisplayName[0].toUpperCase();
    } else if (this.contactsList[index].contactDisplayName[0].toLowerCase() !== this.contactsList[index - 1].contactDisplayName[0].toLowerCase()) {
      return contact.contactDisplayName[0].toUpperCase();
    }
  }

}
