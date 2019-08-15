import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PizzaBoardComponent } from './pizza-board/pizza-board.component';
import { ToppingSelectorComponent } from './topping-selector/topping-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaBoardComponent,
    ToppingSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
