import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { AddCharacterFormComponent } from './components/add-character-form/add-character-form.component';

@NgModule({
  declarations: [MainPageComponent, CharacterListComponent, AddCharacterFormComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
