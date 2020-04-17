import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbIconModule, NbTooltipModule } from '@nebular/theme';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbTooltipModule,
  ],
  exports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbTooltipModule,
  ],
})
export class SharedModule { }
