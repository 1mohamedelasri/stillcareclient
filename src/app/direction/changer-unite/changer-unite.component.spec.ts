import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerUniteComponent } from './changer-unite.component';

describe('ChangerUniteComponent', () => {
  let component: ChangerUniteComponent;
  let fixture: ComponentFixture<ChangerUniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangerUniteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerUniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
