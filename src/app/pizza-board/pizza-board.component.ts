import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-board',
  templateUrl: './pizza-board.component.html',
  styleUrls: ['./pizza-board.component.css']
})
export class PizzaBoardComponent implements OnInit {

  toppings: string[] = [];

  constructor() { }

  ngOnInit() {
    const savedToppings = localStorage.getItem('toppings');

    if (savedToppings != null) {
      try {
        // TODO: serciorarse de que es un arreglo de strings
        this.toppings = JSON.parse(savedToppings);

      } catch (e) {
        console.warn('cound\'t get saved toppings')
        console.warn(e);

        localStorage.setItem('topings', null);
      }
    }
  }

  addTopping(value: string) {
    this.toppings.push(value);
  }

  removeTopping(index: number) {
    this.toppings.splice(index, 1);
  }

  saveToppings() {
    localStorage.setItem('toppings', JSON.stringify(this.toppings));
  }

  removeAllToppings() {
    const response = confirm('Do you wish to remove every topping?')
    
    if (response) {
      this.toppings = [];
      localStorage.setItem('toppings', null);
    }
  }

}
