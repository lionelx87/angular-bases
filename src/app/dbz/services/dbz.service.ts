import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
      { name: 'Goku', power: 15000 },
      { name: 'Vegeta', power: 14000 },
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() { }

    add(personaje: Personaje) {
        this._personajes.push(personaje);
    }



}