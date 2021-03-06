import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() personaje: Personaje = { name: '', power: 0 };
  
  constructor(private dbzService: DbzService) {}

  add(): void {
    this.dbzService.add(this.personaje);
    this.personaje = { name: '', power: 0 };
  }
}
