import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman'];
  deletedHeroe: string = '';

  deleteHeroe() {
    this.deletedHeroe = this.heroes.shift() || '';
  }

}
