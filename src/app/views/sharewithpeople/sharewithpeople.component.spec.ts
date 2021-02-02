import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharewithpeopleComponent } from './sharewithpeople.component';

describe('SharewithpeopleComponent', () => {
  let component: SharewithpeopleComponent;
  let fixture: ComponentFixture<SharewithpeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharewithpeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharewithpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
