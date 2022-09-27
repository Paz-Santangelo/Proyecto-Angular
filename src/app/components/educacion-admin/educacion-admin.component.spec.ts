import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionAdminComponent } from './educacion-admin.component';

describe('EducacionAdminComponent', () => {
  let component: EducacionAdminComponent;
  let fixture: ComponentFixture<EducacionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
