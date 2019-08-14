/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntradaIngredienteComponent } from './entrada-ingrediente.component';

describe('EntradaIngredienteComponent', () => {
  let component: EntradaIngredienteComponent;
  let fixture: ComponentFixture<EntradaIngredienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradaIngredienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
