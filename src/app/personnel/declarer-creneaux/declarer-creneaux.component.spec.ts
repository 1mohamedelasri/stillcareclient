import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarerCreneauxComponent } from './declarer-creneaux.component';

describe('DeclarerCreneauxComponent', () => {
  let component: DeclarerCreneauxComponent;
  let fixture: ComponentFixture<DeclarerCreneauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarerCreneauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarerCreneauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
