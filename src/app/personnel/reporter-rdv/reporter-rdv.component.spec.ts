import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterRDVComponent } from './reporter-rdv.component';

describe('ReporterRDVComponent', () => {
  let component: ReporterRDVComponent;
  let fixture: ComponentFixture<ReporterRDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporterRDVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterRDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
