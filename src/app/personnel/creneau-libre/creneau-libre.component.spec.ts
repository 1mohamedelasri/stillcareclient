import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreneauLibreComponent } from './creneau-libre.component';

describe('CreneauLibreComponent', () => {
  let component: CreneauLibreComponent;
  let fixture: ComponentFixture<CreneauLibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreneauLibreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreneauLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
