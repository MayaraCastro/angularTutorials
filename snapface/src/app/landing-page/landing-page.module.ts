import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
