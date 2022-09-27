import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHysComponent } from './editar-hys.component';

describe('EditarHysComponent', () => {
  let component: EditarHysComponent;
  let fixture: ComponentFixture<EditarHysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarHysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
