import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SponsorpayPage } from './sponsorpay.page';

const routes: Routes = [
  {
    path: '',
    component: SponsorpayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SponsorpayPage]
})
export class SponsorpayPageModule {}
