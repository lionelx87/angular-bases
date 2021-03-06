import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <button (click)="increment()">+</button>
        <h1>{{ counter }}</h1>
        <button (click)="decrement()">-</button>
    `
})
export class ContadorComponent {
    counter: number = 0;
    base: number = 5; 

    increment() { this.counter += this.base }

    decrement() { this.counter -= this.base }

}