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
  }

  agregarIngrediente(valor: string) {
    this.ingredientes.push(valor);
  }

  eliminarIngrediente(indice: number) {
    this.ingredientes.splice(indice, 1);
  }

}