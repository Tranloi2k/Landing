import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdetalisComponent } from './newdetalis.component';

describe('NewdetalisComponent', () => {
  let component: NewdetalisComponent;
  let fixture: ComponentFixture<NewdetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdetalisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
