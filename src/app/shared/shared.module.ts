import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbIconModule, NbTooltipModule, NbSpinnerModule } from '@nebular/theme';
import { LoaderComponent } from './component/loader/loader.component';


@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbTooltipModule,
    NbSpinnerModule,
  ],
  exports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbTooltipModule,
    NbSpinnerModule,
    LoaderComponent,
  ],
})
export class SharedModule { }
