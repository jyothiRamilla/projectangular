import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcontactComponent } from './navcontact.component';

describe('NavcontactComponent', () => {
  let component: NavcontactComponent;
  let fixture: ComponentFixture<NavcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
