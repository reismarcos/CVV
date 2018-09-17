import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Infos } from './infos';

@NgModule({
  declarations: [
    Infos,
  ],
  imports: [
    IonicPageModule.forChild(Infos),
  ],
  exports: [
    Infos
  ]
})
export class InfosPageModule {}