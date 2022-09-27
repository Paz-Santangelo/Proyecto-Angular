import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEducacionComponent } from './agregar-educacion.component';

describe('AgregarEducacionComponent', () => {
  let component: AgregarEducacionComponent;
  let fixture: ComponentFixture<AgregarEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
