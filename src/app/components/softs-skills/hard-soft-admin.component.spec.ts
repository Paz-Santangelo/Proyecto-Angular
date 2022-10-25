import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSoftAdminComponent } from './hard-soft-admin.component';

describe('HardSoftAdminComponent', () => {
  let component: HardSoftAdminComponent;
  let fixture: ComponentFixture<HardSoftAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSoftAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardSoftAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
