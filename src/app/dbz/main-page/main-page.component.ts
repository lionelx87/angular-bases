import { Component } from '@angular/core';

interface Personaje {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  personaje: Personaje;
  personajes: Personaje[];

  constructor() {
    this.personaje = { name: '', power: 0 };
    this.personajes = [
      { name: 'Goku', power: 15000 },
      { name: 'Vegeta', power: 14000 },
    ]
  }

  add() {
    this.personajes.push(this.personaje);
    this.personaje = { name: '', power: 0 };
  }

}
