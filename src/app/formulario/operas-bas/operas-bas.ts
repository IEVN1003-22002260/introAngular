import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  styleUrl: './operas-bas.css',
  templateUrl: './operas-bas.html',
})
export class OperasBas {

  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  operacion: string = '';

  calcular(): void {

    let n1 = parseFloat(this.num1);
    let n2 = parseFloat(this.num2);

    if (this.operacion === 'sumar') {
      this.resultado = n1 + n2;
    }

    if (this.operacion === 'restar') {
      this.resultado = n1 - n2;
    }

    if (this.operacion === 'multiplicar') {
      this.resultado = n1 * n2;
    }

    if (this.operacion === 'dividir') {
      this.resultado = n1 / n2;
    }
  }

/* resultado:string='' */

/*  sumar():void{ */
/* this.resultado=this.num1+this.num2 */
/* this.resultado=parseInt(this.num1)+parseInt(this.num2)
  }
   restar():void{
this.resultado=parseInt(this.num1)-parseInt(this.num2)
  }
   multiplicar():void{
this.resultado=parseInt(this.num1)*parseInt(this.num2)
  }
   dividir():void{
this.resultado=parseInt(this.num1)parseInt(this.num2)
  } */
}
