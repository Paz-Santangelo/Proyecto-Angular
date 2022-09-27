import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSobreMiComponent } from './editar-sobre-mi.component';

describe('EditarSobreMiComponent', () => {
  let component: EditarSobreMiComponent;
  let fixture: ComponentFixture<EditarSobreMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSobreMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSobreMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
