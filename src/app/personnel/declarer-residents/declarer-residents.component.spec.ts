import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarerResidentsComponent } from './declarer-residents.component';

describe('DeclarerResidentsComponent', () => {
  let component: DeclarerResidentsComponent;
  let fixture: ComponentFixture<DeclarerResidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarerResidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarerResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
