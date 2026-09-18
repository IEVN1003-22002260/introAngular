import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  styleUrl: './figuras.css',
  templateUrl: './figuras.html',
})
export class Figuras {
  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  operacion: string = '';


calcular(): void {

  let n1 = parseFloat(this.num1);
  let n2 = parseFloat(this.num2);

  if (this.operacion === 'rectangulo') {
    this.resultado = n1 * n2;
  }

  if (this.operacion === 'cuadrado') {
    this.resultado = Math.pow(n1, 2);
  }

  if (this.operacion === 'triangulo') {
    this.resultado = (n1 * n2) / 2;
  }

  if (this.operacion === 'circulo') {
    this.resultado = Math.PI * Math.pow(n1, 2);
  }

  if (this.operacion === 'pentagono') {
    this.resultado = (5 * n1 * n2) / 2;
  }
}
}
