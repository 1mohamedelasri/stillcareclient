import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaPersonnelsComponent } from './agenda-personnels.component';

describe('AgendaPersonnelsComponent', () => {
  let component: AgendaPersonnelsComponent;
  let fixture: ComponentFixture<AgendaPersonnelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaPersonnelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaPersonnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
