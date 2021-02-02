import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuleRendezVousComponent } from './annule-rendez-vous.component';

describe('AnnuleRendezVousComponent', () => {
  let component: AnnuleRendezVousComponent;
  let fixture: ComponentFixture<AnnuleRendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuleRendezVousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuleRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
