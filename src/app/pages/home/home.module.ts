import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThemeModule } from '@theme/theme.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ThemeModule
  ],
  declarations: [
    HomeComponent,
    ToolbarComponent
  ]
})
export class HomeModule { }
