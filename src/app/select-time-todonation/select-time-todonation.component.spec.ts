import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTimeTodonationComponent } from './select-time-todonation.component';

describe('SelectTimeTodonationComponent', () => {
  let component: SelectTimeTodonationComponent;
  let fixture: ComponentFixture<SelectTimeTodonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTimeTodonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTimeTodonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
