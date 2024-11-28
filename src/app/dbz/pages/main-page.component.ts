import { Character } from './../interfaces/character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor() {}

  characters: Character[] = [
    { name: 'Goku', power: 9001 },
    { name: 'Vegeta', power: 8500 },
    { name: 'Frieza', power: 10000 },
  ];

  addCharacter(character: Character) {
    this.characters.push(character);
  }
}
