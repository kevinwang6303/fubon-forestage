import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HmCarouselModule } from '@hamastar/hm-carousel';
import { SharedModule } from '@shared/shared.module';
import { ThemeModule } from '@theme/theme.module';

import { CarouselComponent } from './carousel/carousel.component';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    ThemeModule,
    SharedModule,
    HmCarouselModule,
    FlexLayoutModule

  ],
  declarations: [
    IndexComponent,
    CarouselComponent
  ]
})
export class IndexModule { }
