import { NgModule } from '@angular/core';
import { ManageContactComponent } from './manage-contact.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ManageContactComponent,
  },
];


@NgModule({
  declarations: [
    ManageContactComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ],
})
export class ManageContactModule { }
