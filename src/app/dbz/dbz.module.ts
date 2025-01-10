import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbzMainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/addcharacter/addcharacter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DbzMainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DbzMainPageComponent
  ]
})
export class DbzModule { }
