import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterResidentComponent } from './consulter-resident.component';

describe('ConsulterResidentComponent', () => {
  let component: ConsulterResidentComponent;
  let fixture: ComponentFixture<ConsulterResidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterResidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
