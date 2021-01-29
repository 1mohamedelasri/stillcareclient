import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterResidentComponent } from './affecter-resident.component';

describe('AffecterResidentComponent', () => {
  let component: AffecterResidentComponent;
  let fixture: ComponentFixture<AffecterResidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterResidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecterResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
