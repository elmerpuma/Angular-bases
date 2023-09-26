import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>{{title}}</h1>
<h3>Counter:{{counter}}</h3>
<hr>
<button (click)="increaseBy(+1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent  {
  public title:string = 'Contador';
  public counter:number=10;

  public increaseBy(value:number):void{
   this.counter+=value;
  }
  public reset():number{
   return  this.counter=0
  }

  constructor() { }
}
