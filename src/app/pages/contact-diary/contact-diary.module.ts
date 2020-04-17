import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactDiaryComponent } from './contact-diary.component';


const routes: Routes = [
  {
    path: '',
    component: ContactDiaryComponent,
  },
];


@NgModule({
  declarations: [
    ContactDiaryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ContactDiaryModule { }
