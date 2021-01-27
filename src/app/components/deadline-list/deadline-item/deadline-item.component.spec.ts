import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineItemComponent } from './deadline-item.component';

describe('DeadlineItemComponent', () => {
  let component: DeadlineItemComponent;
  let fixture: ComponentFixture<DeadlineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadlineItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadlineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
