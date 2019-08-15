import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  ingredientes: string[] = [];

  constructor() { }

  ngOnInit() {
    const ingredientesGuardados = localStorage.getItem('ingredientes');

    if (ingredientesGuardados != null) {
      try {
        // TODO: serciorarse de que es un arreglo de strings
        this.ingredientes = JSON.parse(ingredientesGuardados);

      } catch (e) {
        console.warn('no se pudieron obtener los ingredientes guardados')
        console.warn(e);

        localStorage.setItem('ingredientes', null);
      }
    }
  }

  agregarIngrediente(valor: string) {
    this.ingredientes.push(valor);
  }

  eliminarIngrediente(indice: number) {
    this.ingredientes.splice(indice, 1);
  }

  guardarIngredientes() {
    localStorage.setItem('ingredientes', JSON.stringify(this.ingredientes));
  }

  eliminarIngredientes() {
    const respuesta = confirm('¿Desea eliminar todos los ingredientes?')
    
    if (respuesta) {
      this.ingredientes = [];
      localStorage.setItem('ingredientes', null);
    }
  }

}
