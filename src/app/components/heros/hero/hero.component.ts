import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 42;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  get heroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  chageHero() {
    this.name = this.name === 'Spiderman' ? 'Ironman' : 'Spiderman';
  }

  changeAge() {
    this.age = this.age === 28 ? 45 : 28;
  }
}
