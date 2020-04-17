import { Component, OnInit } from '@angular/core';
import { ContactListingService } from './contact-listing.service';
import { ContactDiary } from '../../../models/contact-diary.model';
import { ContactStatusEnum } from '../../../config';

@Component({
  selector: 'ngx-contact-listing',
  templateUrl: './contact-listing.component.html',
  styleUrls: ['./contact-listing.component.scss'],
})
export class ContactListingComponent implements OnInit {

  contacts: Array<ContactDiary> = [];
  contactStatusEnum = ContactStatusEnum;

  constructor(
    private _contactListingService: ContactListingService,
  ) { }

  ngOnInit(): void {
    this.setContacts();
  }

  setContacts(): void {
    this._contactListingService.getContacts().subscribe(res => {
      this.contacts = res;
    }, err => this.contacts = []);
  }

}
