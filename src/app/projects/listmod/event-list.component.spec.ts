import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEventList } from './event-list.component';

describe('EventListComponent', () => {
  let component: AppEventList;
  let fixture: ComponentFixture<AppEventList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEventList ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEventList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
