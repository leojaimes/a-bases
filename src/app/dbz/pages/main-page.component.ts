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
  get deleteCharacter(): (character: Character) => void {
    return this.dbzService.deleteCharacter;
  }

  get addCharacter(): (character: Character) => void {
    return this.dbzService.addCharacter;
  }
}
