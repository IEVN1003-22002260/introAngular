import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  styleUrl: './palindromo.css',
  templateUrl: './palindromo.html',
})
export class Palindromo {

  texto: string = '';
  resultado: string = '';
  vocales: number = 0;
  consonantes: number = 0;

  calcular(): void {

    this.vocales = 0;
    this.consonantes = 0;

    let frase = '';

    for (let letra of this.texto) {

      if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {

        this.vocales++;

      } else if (letra != ' ') {

        this.consonantes++;
      }
    }

    for (let letra of this.texto) {

      if (letra != ' ') {
        frase = frase + letra;
      }
    }

    let contador = 0;

    for (let letra of frase) {
      contador++;
    }

    let palindromo = true;
    let izq = 0;
    let der = contador - 1;

    while (izq < der) {

      if (frase[izq] != frase[der]) {
        palindromo = false;
      }

      izq++;
      der--;
    }

    if (palindromo == true) {
      this.resultado = "Si";
    } else {
      this.resultado = "No";
    }
  }
}