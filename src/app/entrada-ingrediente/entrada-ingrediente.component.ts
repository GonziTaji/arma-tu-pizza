import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-entrada-ingrediente',
  templateUrl: './entrada-ingrediente.component.html',
  styleUrls: ['./entrada-ingrediente.component.css']
})

export class EntradaIngredienteComponent {

  valor = '';

  @Output('valor') emisor = new EventEmitter<string>();

  constructor() {}

  enviarValor() {
    if (this.valor !== '') {
      this.emisor.emit(this.valor);
      this.valor = '';
    }
  }

}

