import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMeUpComponent } from './start-me-up.component';

describe('StartMeUpComponent', () => {
  let component: StartMeUpComponent;
  let fixture: ComponentFixture<StartMeUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartMeUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartMeUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
