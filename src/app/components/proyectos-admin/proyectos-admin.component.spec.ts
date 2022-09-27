import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosAdminComponent } from './proyectos-admin.component';

describe('ProyectosAdminComponent', () => {
  let component: ProyectosAdminComponent;
  let fixture: ComponentFixture<ProyectosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
