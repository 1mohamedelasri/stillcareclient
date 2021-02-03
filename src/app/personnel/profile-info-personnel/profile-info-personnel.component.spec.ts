import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoPersonnelComponent } from './profile-info-personnel.component';

describe('ProfileInfoPersonnelComponent', () => {
  let component: ProfileInfoPersonnelComponent;
  let fixture: ComponentFixture<ProfileInfoPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInfoPersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
