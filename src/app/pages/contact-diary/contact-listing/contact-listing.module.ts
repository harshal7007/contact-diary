import { NgModule } from '@angular/core';
import { ContactListingComponent } from './contact-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ContactListingService } from './contact-listing.service';

const routes: Routes = [
  {
    path: '',
    component: ContactListingComponent,
  },
];

@NgModule({
  declarations: [
    ContactListingComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    ContactListingService,
  ],
})
export class ContactListingModule { }
