import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonAuthComponent } from './common-auth.component';

describe('CommonAuthComponent', () => {
  let component: CommonAuthComponent;
  let fixture: ComponentFixture<CommonAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
