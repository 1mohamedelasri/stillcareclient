import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitAddPersonnelComponent } from './unit-add-personnel.component';

describe('UnitAddPersonnelComponent', () => {
  let component: UnitAddPersonnelComponent;
  let fixture: ComponentFixture<UnitAddPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitAddPersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitAddPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
