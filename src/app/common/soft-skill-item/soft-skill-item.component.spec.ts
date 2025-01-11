import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillItemComponent } from './soft-skill-item.component';

describe('SoftSkillItemComponent', () => {
  let component: SoftSkillItemComponent;
  let fixture: ComponentFixture<SoftSkillItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftSkillItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftSkillItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
