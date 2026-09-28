import { Component } from '@angular/core';

@Component({
  selector: 'app-triangulos',
  standalone: false,
  templateUrl: './triangulos.html',
  styleUrl: './triangulos.css'
})
export class Triangulos {

  x1: number = 0;
  y1: number = 0;

  x2: number = 0;
  y2: number = 0;

  x3: number = 0;
  y3: number = 0;

  resultado: string = '';
  area: number = 0;

  analizar(): void {

    let determinante =
      this.x1 * (this.y2 - this.y3) + this.x2 * (this.y3 - this.y1) + this.x3 * (this.y1 - this.y2);

    if (determinante == 0) {

      this.resultado = 'Los tres puntos no forman un triángulo porque son colineales.';
      this.area = 0;

    } else {

      this.area = Math.abs(determinante / 2);

      this.resultado = 'Los puntos forman un triángulo.';
    }
  }
}