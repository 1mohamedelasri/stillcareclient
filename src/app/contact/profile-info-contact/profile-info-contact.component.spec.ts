import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoContactComponent } from './profile-info-contact.component';

describe('ProfileInfoContactComponent', () => {
  let component: ProfileInfoContactComponent;
  let fixture: ComponentFixture<ProfileInfoContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInfoContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
