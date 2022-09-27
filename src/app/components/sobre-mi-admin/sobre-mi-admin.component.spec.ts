import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMiAdminComponent } from './sobre-mi-admin.component';

describe('SobreMiAdminComponent', () => {
  let component: SobreMiAdminComponent;
  let fixture: ComponentFixture<SobreMiAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreMiAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMiAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
