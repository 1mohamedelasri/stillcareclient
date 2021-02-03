import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoDirectionComponent } from './profile-info-direct.component';

describe('ProfileInfoDirectionComponent', () => {
  let component: ProfileInfoDirectionComponent;
  let fixture: ComponentFixture<ProfileInfoDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInfoDirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
