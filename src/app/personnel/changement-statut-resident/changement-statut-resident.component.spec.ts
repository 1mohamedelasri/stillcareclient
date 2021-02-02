import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangementStatutResidentComponent } from './changement-statut-resident.component';

describe('ChangementStatutResidentComponent', () => {
  let component: ChangementStatutResidentComponent;
  let fixture: ComponentFixture<ChangementStatutResidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangementStatutResidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangementStatutResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
