import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarHabDuraComponent } from './agregar-hab-dura.component';

describe('AgregarHabDuraComponent', () => {
  let component: AgregarHabDuraComponent;
  let fixture: ComponentFixture<AgregarHabDuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarHabDuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarHabDuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
