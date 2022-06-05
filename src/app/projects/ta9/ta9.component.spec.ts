import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ta9Component } from './ta9.component';

describe('Ta9Component', () => {
  let component: Ta9Component;
  let fixture: ComponentFixture<Ta9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ta9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ta9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
