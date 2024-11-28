import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-character-list',
  standalone: false,

  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent {
  @Input() characters: Character[] = [];

  @Output() onDeleteCharacter = new EventEmitter<Character>();

  deleteCharacter(character: Character) {
    this.onDeleteCharacter.emit(character);
  }
}
