import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningCreneauxComponent } from './planning-creneaux.component';

describe('PlanningCreneauxComponent', () => {
  let component: PlanningCreneauxComponent;
  let fixture: ComponentFixture<PlanningCreneauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningCreneauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningCreneauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
