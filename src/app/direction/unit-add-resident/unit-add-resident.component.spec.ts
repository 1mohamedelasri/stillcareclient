import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitAddResidentComponent } from './unit-add-resident.component';

describe('UnitAddResidentComponent', () => {
  let component: UnitAddResidentComponent;
  let fixture: ComponentFixture<UnitAddResidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitAddResidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitAddResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
