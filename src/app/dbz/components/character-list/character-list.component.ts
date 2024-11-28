import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-character-list',
  standalone: false,

  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent {
  @Input() characters: Character[] = [];
}
