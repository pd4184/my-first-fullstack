import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewbieComponent } from './update-newbie.component';

describe('UpdateNewbieComponent', () => {
  let component: UpdateNewbieComponent;
  let fixture: ComponentFixture<UpdateNewbieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNewbieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNewbieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
