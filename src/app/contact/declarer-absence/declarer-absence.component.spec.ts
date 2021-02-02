import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarerAbsenceComponent } from './declarer-absence.component';

describe('DeclarerAbsenceComponent', () => {
  let component: DeclarerAbsenceComponent;
  let fixture: ComponentFixture<DeclarerAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarerAbsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarerAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
