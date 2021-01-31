import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterListePersonnelComponent } from './consulter-liste-personnel.component';

describe('ConsulterListePersonnelComponent', () => {
  let component: ConsulterListePersonnelComponent;
  let fixture: ComponentFixture<ConsulterListePersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterListePersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterListePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
