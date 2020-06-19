import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbieDetalisComponent } from './newbie-detalis.component';

describe('NewbieDetalisComponent', () => {
  let component: NewbieDetalisComponent;
  let fixture: ComponentFixture<NewbieDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbieDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbieDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
