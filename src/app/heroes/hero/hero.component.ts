import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
public name:string="iroman";
public  age:number=45;
get capitalizarNombre():string{
  return this.name.toUpperCase();
}
getHeroDescripcion():string{
  return `${this.name}-${this.age}`;
}
changeHero():void{
   this.name='Speederman';
}
changeAge():void{
this.age=23
}
resetForm():void{
  this.name='iroman'
  this.age=45
  }


}
