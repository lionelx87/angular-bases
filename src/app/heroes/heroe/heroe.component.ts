import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    name: string = 'Ironman';
    age: number = 45;

    get full() {  
        console.log('Probando...');
        return `${this.name} - ${this.age}`;
    }

    changeAge() {
        this.age = 30;
    }

}