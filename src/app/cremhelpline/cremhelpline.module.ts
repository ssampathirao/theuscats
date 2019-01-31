import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CremhelplinePage } from './cremhelpline.page';

const routes: Routes = [
  {
    path: '',
    component: CremhelplinePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CremhelplinePage]
})
export class CremhelplinePageModule {}
