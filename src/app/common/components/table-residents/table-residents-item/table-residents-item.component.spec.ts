import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableResidentsItemComponent } from './table-residents-item.component';

describe('TableResidentsItemComponent', () => {
  let component: TableResidentsItemComponent;
  let fixture: ComponentFixture<TableResidentsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableResidentsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableResidentsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
