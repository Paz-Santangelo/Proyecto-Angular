import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExpComponent } from './editar-exp.component';

describe('EditarExpComponent', () => {
  let component: EditarExpComponent;
  let fixture: ComponentFixture<EditarExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
