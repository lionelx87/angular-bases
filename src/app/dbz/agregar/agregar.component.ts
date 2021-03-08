import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() personaje: Personaje = { name: '', power: 0 };

  add() {
    console.log(this.personaje);
    this.personaje = { name: '', power: 0 };
  }


}
