import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMemberComponent } from './second-member.component';

describe('SecondMemberComponent', () => {
  let component: SecondMemberComponent;
  let fixture: ComponentFixture<SecondMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
