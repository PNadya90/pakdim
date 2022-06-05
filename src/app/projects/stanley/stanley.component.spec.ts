import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StanleyComponent } from './stanley.component';

describe('StanleyComponent', () => {
  let component: StanleyComponent;
  let fixture: ComponentFixture<StanleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StanleyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StanleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
