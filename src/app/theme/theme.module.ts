import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    SharedMaterialModule
  ]
})
export class ThemeModule { }
