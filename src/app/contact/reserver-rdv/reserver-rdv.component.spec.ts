import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverRdvComponent } from './reserver-rdv.component';

describe('ReserverRdvComponent', () => {
  let component: ReserverRdvComponent;
  let fixture: ComponentFixture<ReserverRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserverRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserverRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
