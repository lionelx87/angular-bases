import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{
  
  personajes: Personaje[];

  constructor() {
    this.personajes = [
      { name: 'Goku', power: 15000 },
      { name: 'Vegeta', power: 14000 },
    ]
  }  

  add(personaje: Personaje) {
    this.personajes.push(personaje);
  }

}
