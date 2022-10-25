import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHabDurasComponent } from './editar-hab-duras.component';

describe('EditarHabDurasComponent', () => {
  let component: EditarHabDurasComponent;
  let fixture: ComponentFixture<EditarHabDurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHabDurasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarHabDurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
