import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLoginComponent } from './contact-login.component';

describe('ContactLoginComponent', () => {
  let component: ContactLoginComponent;
  let fixture: ComponentFixture<ContactLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
