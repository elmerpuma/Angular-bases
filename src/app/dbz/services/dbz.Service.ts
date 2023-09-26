
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
//console.log('uuid', uuid())

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ]
  addCharacter(character: Character): void {
    // console.log('MainPage');
    // console.log(character);
    //this.character.unshift(character);
    const newCharacter: Character = {
      id: uuid(), ...character  //agrega los atributos al id
      //  name: character.name,
      //  power:character.power
    };
    // this.character.push(character);//para poner a la lista
    this.characters.push(newCharacter);//para poner a la lista

  }
  /*onDeleteCharacter(index: number) {
    this.characters.splice(index, 1);//borrar solo un elemento
  }*/
  deleteCharacterById(id:string){
    this.characters= this.characters.filter(character=>character.id!==id)
  }


  constructor() {
  }

}
