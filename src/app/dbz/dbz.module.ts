import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { AddCharacterFormComponent } from './components/add-character-form/add-character-form.component';

@NgModule({
  declarations: [
    MainPageComponent,
    CharacterListComponent,
    AddCharacterFormComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
