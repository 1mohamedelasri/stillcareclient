import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotyetimplComponent } from './notyetimpl.component';

describe('NotyetimplComponent', () => {
  let component: NotyetimplComponent;
  let fixture: ComponentFixture<NotyetimplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotyetimplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotyetimplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
