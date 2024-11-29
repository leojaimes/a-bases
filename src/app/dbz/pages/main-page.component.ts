import { Character } from '../interfaces/character';
import { DbzService } from '../services/dbz.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters() {
    return this.dbzService.characters;
  }
  deleteCharacter(character: Character): void {
    this.dbzService.deleteCharacter(character);
  }

  addCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
