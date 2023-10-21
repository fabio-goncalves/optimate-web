import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { ImageCropperComponent } from '../image-cropper/image-cropper.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    AvatarComponent,
    ImageCropperComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AvatarComponent
  ]
})
export class AvatarModule { }
