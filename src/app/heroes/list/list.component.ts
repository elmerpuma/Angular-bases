import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman', 'Ironman', 'Hulk', 'She-Hulk' // Fixed capitalization consistency
  ];

  public deletedHero?: string; // Better naming

  public removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}

