import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterCreneauxComponent } from './consulter-creneaux.component';

describe('ConsulterCreneauxComponent', () => {
  let component: ConsulterCreneauxComponent;
  let fixture: ComponentFixture<ConsulterCreneauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterCreneauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterCreneauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
