import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';





@NgModule({
  declarations: [
    AppComponent,
   // CounterComponent,
 //   HeroComponent,
  //  ListComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    DbzModule,
    HeroesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
