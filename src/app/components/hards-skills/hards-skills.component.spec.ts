import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardsSkillsComponent } from './hards-skills.component';

describe('HardsSkillsComponent', () => {
  let component: HardsSkillsComponent;
  let fixture: ComponentFixture<HardsSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardsSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardsSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
