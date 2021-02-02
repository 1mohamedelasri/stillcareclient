import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitCreateModifyComponent } from './unit-create-modify.component';

describe('UnitCreateComponent', () => {
  let component: UnitCreateModifyComponent;
  let fixture: ComponentFixture<UnitCreateModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitCreateModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitCreateModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
