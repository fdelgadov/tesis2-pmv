import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturaGraficoComponent } from './temperatura-grafico.component';

describe('TemperaturaGraficoComponent', () => {
  let component: TemperaturaGraficoComponent;
  let fixture: ComponentFixture<TemperaturaGraficoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemperaturaGraficoComponent]
    });
    fixture = TestBed.createComponent(TemperaturaGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
