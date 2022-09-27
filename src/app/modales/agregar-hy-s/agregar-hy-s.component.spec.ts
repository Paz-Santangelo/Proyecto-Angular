import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarHySComponent } from './agregar-hy-s.component';

describe('AgregarHySComponent', () => {
  let component: AgregarHySComponent;
  let fixture: ComponentFixture<AgregarHySComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarHySComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarHySComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
