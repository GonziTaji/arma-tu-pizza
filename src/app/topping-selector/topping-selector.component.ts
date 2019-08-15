import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-topping-selector',
  templateUrl: './topping-selector.component.html',
  styleUrls: ['./topping-selector.component.css']
})

export class ToppingSelectorComponent {

  value = '';

  @Output('value') valueEmitter = new EventEmitter<string>();

  constructor() {}

  emitValue() {
    if (this.value !== '') {
      this.valueEmitter.emit(this.value);
      this.value = '';
    }
  }

}

