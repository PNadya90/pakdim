import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManegmentModulComponent } from './manegment-modul.component';

describe('ManegmentModulComponent', () => {
  let component: ManegmentModulComponent;
  let fixture: ComponentFixture<ManegmentModulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManegmentModulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManegmentModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
