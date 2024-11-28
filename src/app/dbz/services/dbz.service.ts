import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  characters: Character[] = [
    { name: 'Goku', power: 9001 },
    { name: 'Vegeta', power: 8500 },
    { name: 'Frieza', power: 10000 },
  ];

  addCharacter(character: Character) {
    this.characters.push(character);
  }

  deleteCharacter(character: Character) {
    this.characters = this.characters.filter(
      (characterIn) => characterIn.name !== character.name
    );
  }
}
