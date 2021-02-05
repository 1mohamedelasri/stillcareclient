import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChoixPersonnelComponent } from './dialog-choix-personnel.component';

describe('DialogChoixPersonnelComponent', () => {
  let component: DialogChoixPersonnelComponent;
  let fixture: ComponentFixture<DialogChoixPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogChoixPersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogChoixPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
