import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableResidentsComponent } from './table-residents.component';

describe('TableResidentsComponent', () => {
  let component: TableResidentsComponent;
  let fixture: ComponentFixture<TableResidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableResidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
