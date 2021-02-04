import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerCreneauxComponent } from './supprimer-creneaux.component';

describe('SupprimerCreneauxComponent', () => {
  let component: SupprimerCreneauxComponent;
  let fixture: ComponentFixture<SupprimerCreneauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerCreneauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerCreneauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
