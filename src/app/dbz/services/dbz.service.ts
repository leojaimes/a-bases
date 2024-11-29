import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  characters: Character[] = [
    { id: uuidv4(), name: 'Goku', power: 9001 },
    { id: uuidv4(), name: 'Vegeta', power: 8500 },
    { id: uuidv4(), name: 'Frieza', power: 10000 },
  ];

  addCharacter(character: Character) {
    this.characters.push({ id: uuidv4(), ...character });
  }

  deleteCharacter(character: Character) {
    this.characters = this.characters.filter(
      (characterIn) => characterIn.id != character.id
    );
  }
}
