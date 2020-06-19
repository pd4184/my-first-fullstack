import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewbieComponent } from './add-newbie.component';

describe('AddNewbieComponent', () => {
  let component: AddNewbieComponent;
  let fixture: ComponentFixture<AddNewbieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewbieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewbieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
