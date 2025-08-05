import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman'; // Fixed spelling
  public age: number = 45;

  get capitalizedName(): string { // Better naming convention
    return this.name.toUpperCase();
  }

  getHeroDescription(): string { // Fixed spelling and better naming
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'spiderman'; // Consistent naming
  }

  changeAge(): void {
    this.age = 23;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
