import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecardListComponent } from './profilecard-list.component';

describe('ProfilecardListComponent', () => {
  let component: ProfilecardListComponent;
  let fixture: ComponentFixture<ProfilecardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilecardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilecardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
