import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbiesListComponent } from './newbies-list.component';

describe('NewbiesListComponent', () => {
  let component: NewbiesListComponent;
  let fixture: ComponentFixture<NewbiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
