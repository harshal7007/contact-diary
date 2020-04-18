import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ContactDiary } from '../models/contact-diary.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataBaseService implements InMemoryDbService {
  createDb() {
    const contacts = [
      {
        id: 1,
        profilePic: 'assets/images/male-avatar.png',
        firstName: 'Brian',
        lastName: 'Buckman',
        email: 'brian.buckman@yopmail.com',
        phoneNumber: '478-993-7545',
        status: 1,
        gender: 1,
        deleteLoderFlag: false,
        switchLoaderFlag: false,
      },
      {
        id: 2,
        profilePic: 'assets/images/female-avatar.png',
        firstName: 'Charlene',
        lastName: 'Lockhart',
        email: 'charlene.lockhart@yopmail.com',
        phoneNumber: '435-712-8045',
        status: 1,
        gender: 2,
        deleteLoderFlag: false,
        switchLoaderFlag: false,
      },
      {
        id: 3,
        profilePic: 'assets/images/male-avatar.png',
        firstName: 'George',
        lastName: 'Campbell',
        email: 'george.campbell@yopmail.com',
        phoneNumber: '803-566-5473',
        status: 1,
        gender: 1,
        deleteLoderFlag: false,
        switchLoaderFlag: false,
      },
      {
        id: 4,
        profilePic: 'assets/images/female-avatar.png',
        firstName: 'Devin',
        lastName: 'Meador',
        email: 'devin.meador@yopmail.com',
        phoneNumber: '949-651-3960',
        status: 2,
        gender: 2,
        deleteLoderFlag: false,
        switchLoaderFlag: false,
      },
      {
        id: 5,
        profilePic: 'assets/images/female-avatar.png',
        firstName: 'Marcia',
        lastName: 'Anaya',
        email: 'marcia.anaya@yopmail.com',
        phoneNumber: '701-996-2775',
        status: 1,
        gender: 2,
        deleteLoderFlag: false,
        switchLoaderFlag: false,
      },
    ];
    return { contacts };
  }

  genId(contacts: ContactDiary[]): number {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 1;
  }
}
