import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-add-character-form',
  standalone: false,

  templateUrl: './add-character-form.component.html',
  styleUrl: './add-character-form.component.scss',
})
export class AddCharacterFormComponent {
  @Output() onAddCharacter = new EventEmitter<Character>();
  character: Character = {
    name: '',
    power: 0,
  };

  add() {
    if (!(this.character.name.length > 0 && this.character.power > 0)) {
      return;
    }
    this.onAddCharacter.emit(this.character);
    this.character = {
      name: '',
      power: 0,
    };
  }
}
