import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarerRemplacantComponent } from './declarer-remplacant.component';

describe('DeclarerRemplacantComponent', () => {
  let component: DeclarerRemplacantComponent;
  let fixture: ComponentFixture<DeclarerRemplacantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarerRemplacantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarerRemplacantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
