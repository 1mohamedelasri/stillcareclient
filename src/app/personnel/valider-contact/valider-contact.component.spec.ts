import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderContactComponent } from './valider-contact.component';

describe('ValiderContactComponent', () => {
  let component: ValiderContactComponent;
  let fixture: ComponentFixture<ValiderContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiderContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
