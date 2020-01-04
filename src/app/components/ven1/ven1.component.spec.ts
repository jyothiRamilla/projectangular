import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ven1Component } from './ven1.component';

describe('Ven1Component', () => {
  let component: Ven1Component;
  let fixture: ComponentFixture<Ven1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ven1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ven1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
