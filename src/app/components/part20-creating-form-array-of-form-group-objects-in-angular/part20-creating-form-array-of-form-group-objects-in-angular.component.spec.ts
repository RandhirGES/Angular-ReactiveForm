import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part20CreatingFormArrayOfFormGroupObjectsInAngularComponent } from './part20-creating-form-array-of-form-group-objects-in-angular.component';

describe('Part20CreatingFormArrayOfFormGroupObjectsInAngularComponent', () => {
  let component: Part20CreatingFormArrayOfFormGroupObjectsInAngularComponent;
  let fixture: ComponentFixture<Part20CreatingFormArrayOfFormGroupObjectsInAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part20CreatingFormArrayOfFormGroupObjectsInAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part20CreatingFormArrayOfFormGroupObjectsInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
