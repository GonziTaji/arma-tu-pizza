import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TableroComponent } from './tablero/tablero.component';
import { EntradaIngredienteComponent } from './entrada-ingrediente/entrada-ingrediente.component';

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    EntradaIngredienteComponent
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
