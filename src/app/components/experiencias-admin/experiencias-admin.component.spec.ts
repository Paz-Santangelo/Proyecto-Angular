import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciasAdminComponent } from './experiencias-admin.component';

describe('ExperienciasAdminComponent', () => {
  let component: ExperienciasAdminComponent;
  let fixture: ComponentFixture<ExperienciasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
