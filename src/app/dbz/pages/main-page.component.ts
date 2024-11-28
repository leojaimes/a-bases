import { DbzService } from '../services/dbz.service';
import { Character } from './../interfaces/character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(public dbzService: DbzService) {}
}
