/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogoApComponent } from './logoAp.component';

describe('LogoApComponent', () => {
  let component: LogoApComponent;
  let fixture: ComponentFixture<LogoApComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoApComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
