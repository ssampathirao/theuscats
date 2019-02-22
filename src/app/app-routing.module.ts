import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'event', loadChildren: './event/event.module#EventPageModule' },
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule' },
  { path: 'message', loadChildren: './message/message.module#MessagePageModule' },
  { path: 'commitee', loadChildren: './commitee/commitee.module#CommiteePageModule' },
  { path: 'mission', loadChildren: './mission/mission.module#MissionPageModule' },
  { path: 'cremhelpline', loadChildren: './cremhelpline/cremhelpline.module#CremhelplinePageModule' },
  { path: 'famhelpline', loadChildren: './famhelpline/famhelpline.module#FamhelplinePageModule' },
  { path: 'contactus', loadChildren: './contactus/contactus.module#ContactusPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
