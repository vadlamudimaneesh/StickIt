import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDailogComponent } from './dynamic-dailog/dynamic-dailog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    DynamicDailogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class DailogModule { }
